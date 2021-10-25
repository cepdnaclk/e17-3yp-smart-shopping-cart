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
firstName = "test1 fname"
email = "test@gmail.com"
address = "jaffna"
phoneNo = "0778895057"
password = "1234567890"
nic = "1234567890V"


def signup():  # function for Signup

    options = webdriver.ChromeOptions()
    options.add_experimental_option("detach", True)  # help to prevent close automatically

    driver = webdriver.Chrome(
        options=options, executable_path='chromedriver.exe')  # give chrome driver path
    driver.get(pageUrl)  # open over desktop url
    driver.maximize_window()

    fNameInput = driver.find_element_by_xpath("//*[@id = 'main-content']/form/div/div[3]/input")
    emailInput = driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[5]/input")
    addressInput = driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[7]/input")
    phoneInput = driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[9]/input")
    nicInput = driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[11]/input")
    passwordInput = driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[13]/input")
    # repasswordInput=driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[7]/input")
    # agreeInput = driver.find_element_by_xpath("//*[@id='main-content']/form/div/label/input")
    submitButton = driver.find_element_by_xpath("//*[@id='main-content']/form/div/button")

    fNameInput.send_keys(firstName)
    emailInput.send_keys(email)
    addressInput.send_keys(address)
    phoneInput.send_keys(phoneNo)
    nicInput.send_keys(nic)
    passwordInput.send_keys(password)


    submitButton.click()


if __name__ == "__main__":
    signup()