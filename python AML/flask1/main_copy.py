from flask import Flask, render_template


app = Flask(__name__)

@app.route("/play")
def play():
    return render_template(
        "index.html",
        cantidad = 3,
        color = "aqua"
    )

@app.route("/play/<x>")
def playx(x):
    return render_template(
        "index.html",
        cantidad = int(x),
        color = "aqua"
    )


@app.route("/play/<x>/<color>")
def hello(x, color):
    return render_template(
        "index.html",
        cantidad = int(x),
        color = color
    )


if __name__ == "__main__":
    app.run(debug=True)
