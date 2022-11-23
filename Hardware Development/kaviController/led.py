import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

yellowPin=15
redPin=7
greenPin=10

GPIO.setup(yellowPin,GPIO.OUT)
GPIO.setup(redPin,GPIO.OUT)
GPIO.setup(greenPin,GPIO.OUT)


def turnOnLED(color):
    if(color=="red"):
        pin=redPin
    elif(color=="yellow"):
        pin=yellowPin
    elif(color=="green"):
        pin=greenPin
    
    GPIO.output(pin,GPIO.HIGH)


def turnOffLED(color):
    if(color=="red"):
        pin=redPin
    elif(color=="yellow"):
        pin=yellowPin
    elif(color=="green"):
        pin=greenPin
    
    GPIO.output(pin,GPIO.LOW)
    
if __name__=="__main__":
    turnOnLED("red")
    time.sleep(5)
    turnOffLED("red")
    turnOnLED("green")
    time.sleep(5)
    turnOffLED("green")
    turnOnLED("yellow")
    time.sleep(5)
    turnOffLED("yellow")