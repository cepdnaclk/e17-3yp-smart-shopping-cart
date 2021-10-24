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

profileDetails = ["piriyaraj sivagnanasutharam", "jaffna", "12345678900", "0776543210"]


def profileEdit(driver, profileDetails):
    time.sleep(5)
    profileTab = driver.find_element_by_xpath("//*[@id='container']/div/div/header/div[3]/ul/li[4]/a/span[2]")
    profileTab.click()

    time.sleep(5)
    profileDropdown = driver.find_element_by_xpath("//*[@id='container']/div/div/header/div[3]/ul/li[4]/ul/li[1]/a")
    profileDropdown.click()

    time.sleep(5)
    editButton = driver.find_element_by_xpath("//*[@id='main-content']/section/div[3]/div/section/header/ul/li[2]/a")
    editButton.click()

    Name = driver.find_element_by_xpath("//*[@id='edit-profile']/section[1]/div/form/div[1]/div/input")
    Address = driver.find_element_by_xpath("//*[@id='edit-profile']/section[1]/div/form/div[2]/div/input")
    NIC = driver.find_element_by_xpath("//*[@id='edit-profile']/section[1]/div/form/div[3]/div/input")
    PhoneNo = driver.find_element_by_xpath("//*[@id='edit-profile']/section[1]/div/form/div[4]/div/input")
    submitButton = driver.find_element_by_xpath("//*[@id='edit-profile']/section[1]/div/form/div[5]/div/button")

    Name.send_keys(profileDetails[0])
    Address.send_keys(profileDetails[1])
    NIC.send_keys(profileDetails[2])
    NIC.send_keys(Keys.TAB)
    PhoneNo.send_keys(profileDetails[3])
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
    profileEdit(driver, profileDetails)

    pass
