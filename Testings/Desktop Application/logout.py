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



def logout(driver):
    time.sleep(5)
    profileTab = driver.find_element_by_xpath(
        "//*[@id='container']/div/div/header/div[3]/ul/li[4]/a/span[2]")
    profileTab.click()

    time.sleep(5)
    logoutButton = driver.find_element_by_xpath("//*[@id='container']/div/div/header/div[3]/ul/li[4]/ul/li[5]/a")
    logoutButton.click()

    pass


if (__name__ == "__main__"):
    options = webdriver.ChromeOptions()
    # help to prevent close automatically
    options.add_experimental_option("detach", True)

    driver = webdriver.Chrome(
        options=options, executable_path='chromedriver.exe')  # give chrome driver path
    driver.maximize_window()
    loginTest.login(driver)
    logout(driver)

    pass
