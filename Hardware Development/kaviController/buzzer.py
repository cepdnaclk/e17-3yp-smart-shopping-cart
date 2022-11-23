import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

buzzerPin=27
GPIO.setup(buzzerPin,GPIO.OUT)
def turnOnBuzzer():
    GPIO.output(buzzerPin,GPIO.HIGH)
    pass

def trunOffBuzzer():
    GPIO.output(buzzerPin,GPIO.LOW)
    pass


if __name__=="__main__":
    turnOnBuzzer()
    time.sleep(5)
    trunOffBuzzer()