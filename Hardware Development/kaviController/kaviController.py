import logging
import threading
import time
import queue
from unittest import result
from kaviController.LCD import LCDDisplay
from kaviController.loadCell import loadCellReading
from kaviController.mongo import find_item, find_user, findCartUsingUser

from kaviController.ultrasonic import ultrasonicReading
# from mongo import *

queueForBarcode = queue.Queue()
barcodeFlag=False
barcode=""

uss1stInterruptFlag=False
uss1stInterruptThreshold=20

uss2ndInterruptFlag=False
uss2ndInterruptThreshold=20

currentCartWeight=0

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
        print(userId)
        time.sleep(1)
    return userId

def main():
    # global barcodeFlag
    userId=waitForUserConnection()
    user=find_user(userId)
    LCDDisplay("Welcome to "+str(user['name']))

    barCodeThread = threading.Thread(target=threadBarcode, args=(1,))  
    barCodeThread.start()
    while(True):
        while(not(uss1stInterruptFlag)):
            uss1stInterruptFlag=Check1stUltraSonicInterrupt()
            pass

        while(not(uss2ndInterruptFlag)):
            uss2ndInterruptFlag=Check2ndUltraSonicInterrupt()
            pass

        # ToDo : capture image here

        barcodeFlag = queueForBarcode.get()
        barcode=queueForBarcode.get()
        print(barcodeFlag)

        if(barcodeFlag):
            pass
            # get item details from database --> we need weight change & its name 
            item = find_item(barcode)
            print(item)
            # weight change from weight sensor 

            # capture image ,send to python server & get output from their

