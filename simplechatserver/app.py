from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
db = []
@app.route("/")
def index():
    return jsonify({"Hello": "World"}), 200

@app.route("/message/send", methods=["POST"])
def send():
    db.append({"name": request.json["name"], "message": request.json["message"]})
    return jsonify({"message": "ok"})

@app.route("/message/retrieve", methods=["GET"])
def retrieve():
    return jsonify({"messages": db})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5050")
