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

itemDetails=["Apple","50","1000","fruits"]

def addItem(driver,itemDetails):
    time.sleep(5)
    itemTab=driver.find_element_by_xpath("//*[@id='sidebar']/ul/li[2]/a/span[1]")
    itemTab.click()
    time.sleep(5)
    itemTab = driver.find_element_by_xpath("//*[@id='main-content']/section/a")
    itemTab.click()
    itemName  = driver.find_element_by_xpath("//*[@id='main-content']/section/section/form/table/tbody/td[1]/input")
    itemPrice = driver.find_element_by_xpath("//*[@id='main-content']/section/section/form/table/tbody/td[2]/input")
    itemStock = driver.find_element_by_xpath("//*[@id='main-content']/section/section/form/table/tbody/td[3]/input")
    itemCate  = driver.find_element_by_xpath("//*[@id='main-content']/section/section/form/table/tbody/td[4]/input")
    itemSubm = driver.find_element_by_xpath("//*[@id='main-content']/section/section/form/table/tfoot/tr/td/button")

    itemName.send_keys(itemDetails[0]) 
    itemPrice.send_keys(itemDetails[1])
    itemStock.send_keys(itemDetails[2])
    itemCate.send_keys(itemDetails[3])
    time.sleep(5)
    itemSubm.click()


    pass


if (__name__=="__main__"):
    options = webdriver.ChromeOptions()
    # help to prevent close automatically
    options.add_experimental_option("detach", True)

    driver = webdriver.Chrome(
        options=options, executable_path='chromedriver.exe')  # give chrome driver path
    driver.maximize_window()
    loginTest.login(driver)
    addItem(driver,itemDetails)

    pass
