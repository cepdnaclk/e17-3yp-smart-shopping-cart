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
import loginTest

passwordDetails = ["123456789","msEMDVDHCwA2a9e"]


def profilePassUpdate(driver, passwordDetails):
    time.sleep(5)
    profileTab = driver.find_element_by_xpath(
        "//*[@id='container']/div/div/header/div[3]/ul/li[4]/a/span[2]")
    profileTab.click()

    time.sleep(5)
    profileDropdown = driver.find_element_by_xpath(
        "//*[@id='container']/div/div/header/div[3]/ul/li[4]/ul/li[1]/a")
    profileDropdown.click()

    time.sleep(5)
    passEditButton = driver.find_element_by_xpath(
        "//*[@id='main-content']/section/div[3]/div/section/header/ul/li[3]/a")
    passEditButton.click()

    currentPassword = driver.find_element_by_xpath("//*[@id='change-pass']/section/div/form/div[1]/div/input")
    newPassword = driver.find_element_by_xpath("//*[@id='change-pass']/section/div/form/div[2]/div/input")
    submitButton = driver.find_element_by_xpath("//*[@id='change-pass']/section/div/form/div[3]/div/button")

    currentPassword.send_keys(passwordDetails[0])
    newPassword.send_keys(passwordDetails[1])
    time.sleep(5)
    submitButton.click()

    pass


if (__name__ == "__main__"):
    options = webdriver.ChromeOptions()
    # help to prevent close automatically
    options.add_experimental_option("detach", True)

    driver = webdriver.Chrome(
        options=options, executable_path='chromedriver.exe')  # give chrome driver path
    driver.maximize_window()
    loginTest.login(driver)
    profilePassUpdate(driver, passwordDetails)

    pass
