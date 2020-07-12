from tinydb import TinyDB, Query

class Market:
  def __init__(self):
    self.db = TinyDB('data/market.json')

  def get_products(self):
    query = Query
    return self.db.seach(query.enable == True)

  def add_product(self, product):
    db.insert(product)
