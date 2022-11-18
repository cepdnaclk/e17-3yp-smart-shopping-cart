# from pymongo import MongoClient
import time
import pymongo
from bson.objectid import ObjectId

# client = MongoClient('mongodb+srv://ssc:ssc@cluster0.8jzy123.mongodb.net/?retryWrites=true&w=majority');

client = pymongo.MongoClient("mongodb+srv://ssc:ssc@cluster0.8jzy123.mongodb.net/?retryWrites=true&w=majority")

db = client.test
db = client.get_database("smart_shopping_cart")

items = db.items
users = db.users
carts = db.cartsets
userid = '6374c661fe53a34b6aab34f4'

def find_user(userid)->dict:
    return users.find_one({'_id':ObjectId(userid)})

def find_item(barcodeid) -> dict:
    item = items.find_one({'barcodeid':int(barcodeid)})
    return item

def add_new(itemid, count):
    newValues = { "current_update.itemlist": { 'item': itemid, 'count':count } }
    users.update_one({'_id': ObjectId(userid)}, {'$addToSet':newValues})

def update_count(itemid, count):
    newValues = { "current_update.itemlist.$.count": count };
    users.update_one({'_id': ObjectId(userid), "current_update.itemlist.item": itemid },{ '$set': newValues })

def remove_item(itemid):
    newValues = { "current_update.itemlist": { 'item': itemid } }
    users.update_one({'_id': ObjectId(userid)},{ '$pull': newValues })

    
    
# for find user who connected with this cart
def findCartUsingUser(cartId):
    userName=carts.find_one({'_id':ObjectId(cartId)})['user']
    return userName
# print(find_item(4797777001656))
# add_new(33333, 1)
# print(find_user(userid))
# update_count(33333, 22)
# print(find_user(userid))
# remove_item(33333)
# print(find_user(userid))

if __name__=="__main__":
    user='NaN'
    while (user=='NaN'):
        user=findCartUsingUser("63765442a4f0984ed548ac10")
        print(user)
        time.sleep(1)
    print(user)


    client.close()
