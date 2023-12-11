from flask import Blueprint, render_template, request, redirect, session, flash



eventos_bp = Blueprint('eventos_bp', __name__)



@eventos_bp.route("/eventos")
def eventos():
    #mi logica de mi ruta
    return render_template("eventos.html")









