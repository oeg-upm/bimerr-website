import os
import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route("/webhook", methods=["GET"])
def home():
    return "<h1>BIMERR Ontology to Data Model (BO2DM)</h1>"

if __name__ == "__main__":
    PORT = int(os.environ.get('PORT', 80))
    app.run(host='0.0.0.0')
