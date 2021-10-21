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

pageUrl = "http://localhost:3000/login"

email = "piriyaraj1998@gmail.com"

password = "msEMDVDHCwA2a9e"



def login():  # function for Signup

    options = webdriver.ChromeOptions()
    options.add_experimental_option("detach", True)  # help to prevent close automatically

    driver = webdriver.Chrome(
        options=options, executable_path='chromedriver.exe')  # give chrome driver path
    driver.get(pageUrl)  # open over desktop url
    driver.maximize_window()

    emailInput = driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[2]/input")
    passwordInput = driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[3]/input")
    # repasswordInput=driver.find_element_by_xpath("//*[@id='main-content']/form/div/div[7]/input")
    # agreeInput = driver.find_element_by_xpath("//*[@id='main-content']/form/div/label/input")
    submitButton = driver.find_element_by_xpath("//*[@id='main-content']/form/div/button")

    emailInput.send_keys(email)
    passwordInput.send_keys(password)


    submitButton.click()


if __name__ == "__main__":
    login()
