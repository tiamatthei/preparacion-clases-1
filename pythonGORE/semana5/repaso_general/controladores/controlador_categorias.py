from flask import Blueprint, render_template, request, redirect, session, flash



categorias_bp = Blueprint('categorias_bp', __name__)



@categorias_bp.route("/categorias")
def categorias():
    #mi logica de mi ruta
    return render_template("categorias.html")








