import RPi.GPIO as GPIO

from RPLCD.gpio import CharLCD

#CharLCD is a Python library for accessing Adafruit character LCDs from a Raspberry Pi
lcd = CharLCD(pin_rs=19, pin_e=16, pin_rw=None, pins_data=[23, 17, 21, 22],

numbering_mode=GPIO.BOARD,

cols=16, rows=2, dotsize=8)