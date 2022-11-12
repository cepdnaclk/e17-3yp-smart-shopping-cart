# all components controller 

# declare threshold values

ultrasonicTH=0
barCodeScanFlag=False
photoTakeFlag=False
barCodeData=[]
loadBalanceValue=0
def ultrasonicData()->list:
    pass

def loadBalanceReading()->float:
    pass

def LCDDisplay(text:str):
    pass

def kepadReading()->str:
    pass

def buzzer(status:bool):
    pass

def cameraModule()->list:  # return bool,image
    pass

def checkProduct(img,barcodeData)->bool:
    # check wether image and barcode is same
    pass

def barcodeScanned()->list: # return flag,otherData
    pass

def main():
    while True:
        u1,u2=ultrasonicData()
        if(u1 < ultrasonicTH or u2 < ultrasonicTH): # if any interrupted detect from ultrasonic sensor
            if(barCodeScanFlag):                    # if there is barcode scanned value available
                LCDDisplay("place product in front of camera")
                while photoTakeFlag==False:
                    photoTakeFlag,image=cameraModule()
                if(checkProduct(image, barCodeData)):  #if product correct by camera and barcode
                    LCDDisplay("place product in cart")
                    loadValue = loadBalanceReading()
                    # Check product weight and load balance change
                    if(loadValue - loadBalanceValue == barCodeData[2]):
                        LCDDisplay('product added successfully')
                        photoTakeFlag=False
                        barCodeScanFlag=False
                        loadBalanceValue = loadValue
                    else:
                        LCDDisplay("Remove the product")
                else:
                    LCDDisplay("place Correct product")
            else:                                   # if ultrasonic interrupted not barcode scanned
                pass
    pass