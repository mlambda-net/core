from flask import Flask,jsonify
from flask_swagger import swagger
from .market import Market


class Server:

  def __init__(self):
    self.app = Flask(__name__)
    self.market = Market()


  def spec(self):
    swag = swagger(self.app)
    swag['info']['version'] = "1.0"
    swag['info']['title'] = "Portal API"
    return jsonify(swag)

  def config(self):
    self.app.add_url_rule("/", "market get", self.market.get_products)
    self.app.add_url_rule("/market/product")
    self.app.add_url_rule("/spec", "spec", self.spec)

  def run(self):
    self.config()
    self.app.run("0.0.0.0", 9090)
