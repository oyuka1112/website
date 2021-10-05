from flask import Flask

app = Flask(__name__)

@app.route("/members")
def hello_world():
    return {"members": ["Temka", "Oyuka", "Batmend"]}
