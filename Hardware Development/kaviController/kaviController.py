import logging
import threading
import time
import queue
from unicodedata import name
from unittest import result
from LCD import LCDClear, LCDDisplay
from buzzer import turnOnBuzzer
from camera import takeImage
from dlForImage import checkProductsUsingIP
from led import turnOnLED
from loadCell import loadCellReading
from mongo import find_item, find_item_temp, find_user, findCartUsingUser

from ultrasonic import ultrasonicReading
# from mongo import *

queueForBarcode = queue.Queue()
barcodeFlag=False
barcode=""

uss1stInterruptFlag=False
uss1stInterruptThreshold=45

uss2ndInterruptFlag=False
uss2ndInterruptThreshold=45

currentCartWeight=0

currentProductsInCart={}
# using cartid we can find user who connect to the cart
cartId="63765442a4f0984ed548ac10"

def threadBarcode(name):
    while(True):
        barcode=input()
        barcodeFlag=True
        queueForBarcode.put(barcodeFlag)
        queueForBarcode.put(barcode)
# when items add 
def Check1stUltraSonicInterrupt():
    result=False
    u1Reading,u2Reading=ultrasonicReading()
    if(u1Reading<uss1stInterruptThreshold or u2Reading<uss1stInterruptThreshold):
        result=True
    return result

# after items add
def Check2ndUltraSonicInterrupt():
    result=False
    u1Reading,u2Reading=ultrasonicReading()
    if(u1Reading>uss2ndInterruptThreshold and u2Reading>uss2ndInterruptThreshold):
        result=True
    return result

def checkWeightChange():
    newWeight=loadCellReading()
    weightChange=newWeight-currentCartWeight
    return weightChange

def waitForUserConnection():
    userId='NaN'
    while (userId=='NaN'):
        userId=findCartUsingUser("63765442a4f0984ed548ac10")
        time.sleep(1)
    return userId

def main():
    global uss1stInterruptFlag,uss2ndInterruptFlag
    userId=waitForUserConnection()
    user=find_user(userId)
    print("connected user: ",user['name'])
    LCDClear()
    LCDDisplay("Welcome "+str(user['name']))

    barCodeThread = threading.Thread(target=threadBarcode, args=(1,))  
    barCodeThread.start()
    while(True):
        while(not(uss1stInterruptFlag)):
            uss1stInterruptFlag=Check1stUltraSonicInterrupt()
            pass
        uss1stInterruptFlag=False
        print("passed uss1stInterruptFlag")
        while(not(uss2ndInterruptFlag)):
            uss2ndInterruptFlag=Check2ndUltraSonicInterrupt()
            pass
        uss2ndInterruptFlag=False
        print("passed uss2ndInterruptFlag")
        
        # ToDo : capture image here

        barcodeFlag = queueForBarcode.get()
        barcode=queueForBarcode.get()
        weightChange=checkWeightChange()
        print("barcode Flag: ",barcodeFlag)

        image=takeImage()
        resultItemsInCart=checkProductsUsingIP(image)
        isItemsChanged=resultItemsInCart!=currentProductsInCart
        if(isItemsChanged):
            isItemsRemoved=sum(resultItemsInCart.values())<sum(currentProductsInCart.values())
            isItemsAdded=sum(resultItemsInCart.values())>sum(currentProductsInCart.values())
            # todo find changed items
            changeItems={}
        if(barcodeFlag):
            fixedShapeFlag=True
            # get item details from database --> we need weight change & its name 
            item = find_item(barcode)
            if item is None:
                fixedShapeFlag=False
                item = find_item_temp(barcode)

            LCDClear()
            print("weight Change: ",weightChange)

            LCDDisplay("Scanned :"+str(item['name']))
            if(weightChange==0 and not(isItemsChanged)):
                LCDDisplay("Please add the scanned product.")
                # Todo handle when they add
            else:
                if(weightChange==item['weight'] and changeItems['name']==item['name']):
                    currentProductsInCart=resultItemsInCart
                else:
                    if(isItemsAdded):
                         LCDDisplay("Please continue with manual shopping!")
                         turnOnLED("RED")
                         turnOnBuzzer()
                    else:
                        LCDDisplay("remove unnecessary items")
            # weight change from weight sensor 

            weightCheckFlag=False
            print("weight check Flag: ",weightCheckFlag)
            # capture image ,send to python server & get output from their
            cameraCheckFlag=False
        else:
            if(weightChange==0 and not(isItemsChanged)):
                pass
            else:
                if(weightChange<0 or isItemsRemoved):
                    LCDDisplay("Scan barcode of removed items!")
                    # todo remove items in database, check correct product scanned
                else:
                    if(weightChange>0 or isItemsAdded):
                        LCDDisplay("Please continue with manual shopping!")
                        turnOnLED("RED")



            # Todo check form flow chart
            pass
if __name__=="__main__":
    main()