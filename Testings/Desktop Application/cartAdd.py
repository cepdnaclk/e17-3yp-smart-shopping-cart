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
from selenium.webdriver.common.alert import Alert
import timeit
import traceback
import loginTest

cartDetails = ["cart name 8"]


def addCart(driver, itemDetails):
    time.sleep(5)
    cartTab = driver.find_element_by_xpath("//*[@id='sidebar']/ul/li[3]/a")
    cartTab.click()
    time.sleep(5)
    createButton = driver.find_element_by_xpath("//*[@id='main-content']/section/div[2]/div/section/button")
    createButton.click()
    cartName = driver.find_element_by_xpath("//*[@id='addcartinput']")
    cartSubmit = driver.find_element_by_xpath("//*[@id='addgroup']/input[2]")

    cartName.send_keys(cartDetails[0])
    time.sleep(5)
    cartSubmit.click()
    time.sleep(5)
    alert = Alert(driver)
    alert.accept()
    time.sleep(5)
    alert = Alert(driver)
    alert.accept()
    pass


if (__name__ == "__main__"):
    options = webdriver.ChromeOptions()
    # help to prevent close automatically
    options.add_experimental_option("detach", True)

    driver = webdriver.Chrome(
        options=options, executable_path='chromedriver.exe')  # give chrome driver path
    driver.maximize_window()
    loginTest.login(driver)
    addCart(driver, cartDetails)

    pass
