import importlib
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.alert import Alert
import time
import pyperclip
from selenium.webdriver.common.keys import Keys
import timeit
import traceback
import loginTest


def deleteCart(driver):
    time.sleep(5)
    cartTab = driver.find_element_by_xpath("//*[@id='sidebar']/ul/li[3]/a")
    cartTab.click()

    time.sleep(5)
    deleteButton = driver.find_element_by_xpath("//*[@id='main-content']/section/div[2]/div/section/table/tbody/tr[2]/td[6]/div/button/i")
    deleteButton.click()
    time.sleep(5)

    time.sleep(5)
    alert = Alert(driver)
    alert.accept()

    time.sleep(5)
    alert = Alert(driver)
    alert.accept()

    pass


if (__name__=="__main__"):
    options = webdriver.ChromeOptions()
    # help to prevent close automatically
    options.add_experimental_option("detach", True)

    driver = webdriver.Chrome(options=options, executable_path='chromedriver.exe')  # give chrome driver path
    driver.maximize_window()
    loginTest.login(driver)
    deleteCart(driver)

    pass
