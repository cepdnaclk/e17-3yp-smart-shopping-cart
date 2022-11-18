
import time
import RPi.GPIO as GPIO

# -----------------------
# Define some functions
# -----------------------

# Define GPIO to use on Pi
GPIO_TRIGGER_U1 = 14
GPIO_ECHO_U1 = 4

GPIO_TRIGGER_U2 = 18
GPIO_ECHO_U2 = 17

GPIO.setmode(GPIO.BCM)

# Set pins as output and input
GPIO.setup(GPIO_TRIGGER_U1, GPIO.OUT)  # Trigger
GPIO.setup(GPIO_ECHO_U1, GPIO.IN)      # Echo

GPIO.setup(GPIO_TRIGGER_U2, GPIO.OUT)  # Trigger
GPIO.setup(GPIO_ECHO_U2, GPIO.IN)      # Echo


def measure(GPIO_TRIGGER, GPIO_ECHO):
    # This function measures a distance
    GPIO.output(GPIO_TRIGGER, True)
    time.sleep(0.00001)
    GPIO.output(GPIO_TRIGGER, False)
    start = time.time()

    while GPIO.input(GPIO_ECHO) == 0:
        start = time.time()

    while GPIO.input(GPIO_ECHO) == 1:
        stop = time.time()

    elapsed = stop-start
    distance = (elapsed * 34300)/2

    return distance


def measure_average(GPIO_TRIGGER, GPIO_ECHO):
    # This function takes 3 measurements and
    # returns the average.
    distance1 = measure(GPIO_TRIGGER, GPIO_ECHO)
    time.sleep(0.001)
    distance2 = measure(GPIO_TRIGGER, GPIO_ECHO)
    time.sleep(0.001)
    distance3 = measure(GPIO_TRIGGER, GPIO_ECHO)
    distance = distance1 + distance2 + distance3
    distance = distance / 3
    return distance

# -----------------------
# Main Script
# -----------------------

# Use BCM GPIO references
# instead of physical pin numbers


def ultrasonic(GPIO_TRIGGER, GPIO_ECHO):

    # print("Ultrasonic Measurement")

    # Set trigger to False (Low)
    GPIO.output(GPIO_TRIGGER, False)

    # Wrap main content in a try block so we can
    # catch the user pressing CTRL-C and run the
    # GPIO cleanup function. This will also prevent
    # the user seeing lots of unnecessary error
    # messages.
    try:

        distance = measure_average(GPIO_TRIGGER, GPIO_ECHO)
        time.sleep(0.1)
        return distance

    except KeyboardInterrupt:
        GPIO.cleanup()


def detectObject(reading1, reading2):
    if (reading1 >= 500 or reading2 >= 500):
        return True
    else:
        return False

def ultrasonicReading():
    u1Reading = ultrasonic(GPIO_TRIGGER_U1, GPIO_ECHO_U1)
    u2Readnig = ultrasonic(GPIO_TRIGGER_U2, GPIO_ECHO_U2)
    return [u1Reading,u2Readnig]
    
if __name__ == "__main__":
    while True:
        u1Reading = ultrasonic(GPIO_TRIGGER_U1, GPIO_ECHO_U1)
        u2Readnig = ultrasonic(GPIO_TRIGGER_U2, GPIO_ECHO_U2)
        #detectObject(u1Reading, u2Reading)
        print("u1Reading: "+str(round(u1Reading,2))+" u2Reading: "+str(round(u2Readnig,2)) )
        #print(" u2Reading: "+str(round(u2Readnig,2)) )

