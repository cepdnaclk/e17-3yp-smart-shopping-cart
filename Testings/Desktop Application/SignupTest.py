import importlib
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os
from selenium.webdriver.common.action_chains import ActionChains
import time
import pyperclip
from selenium.webdriver.common.keys import Keys
import timeit
import traceback


pageUrl = "http://localhost:3000/signup"
firstName="fName1"
LastName="lName1"
email="test@gmail.com"
address="jaffna"
phoneNo="0778895057"
password="1234567890"

def signup():    # function for Signup
    options = webdriver.ChromeOptions()  
    options.add_experimental_option("detach", True)  # help to prevent close automatically

    driver = webdriver.Chrome(
        options=options, executable_path='chromedriver.exe')   # give chrome driver path
    driver.get(pageUrl)                           # open over desktop url
    driver.maximize_window()

    fNameInput=driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[1]/input")
    lNameInput = driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[2]/input")
    emailInput = driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[3]/input")
    addressInput=driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[4]/input")
    phoneInput=driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[5]/input")
    passwordInput=driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[6]/input")
    # repasswordInput=driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[7]/input")
    # agreeInput = driver.find_element_by_xpath("//*[@id='main-content']/form/div/label/input")
    submitButton = driver.find_element_by_xpath("//*[@id='main-content']/form/div/button")

    fNameInput.send_keys(firstName)
    lNameInput.send_keys(LastName)
    emailInput.send_keys(email)
    addressInput.send_keys(address)
    phoneInput.send_keys(phoneNo)
    passwordInput.send_keys(password)
    # repasswordInput.send_keys(password)
    # agreeInput.click()
    for i in range(10):
        try:
            driver.find_element_by_xpath("//*[@id='main-content']/form/div/label/input").click()
            break
        except Exception as e:
            print('Retry in 1 second')
            time.sleep(1)

    submitButton.click()

if __name__=="__main__":
        signup()

