import RPi.GPIO as GPIO
#import the RPi.GPIO library

from gpio import CharLCD
#import the CharLCD library from RPLCD.gpio

GPIO.setwarnings(False)
#to ignore the warnings

lcd = CharLCD(pin_rs = 15, pin_rw=18, pin_e=16, pins_data= [21,22,23,24],
numbering_mode = GPIO.BOARD, cols=16, rows=2, dotsize=8)
#declare the LCD pins with GPIO pins of Raspberry Pi 4


#display the text on 16x2 LCD

def LCDDisplay(message):
    lcd.clear()
    lcd.write_string("Welcome to SSC")
    lcd.clear()
