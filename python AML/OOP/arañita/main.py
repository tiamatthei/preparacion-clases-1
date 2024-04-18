import requests
from bs4 import BeautifulSoup

print("/////////////////////////////////////////////")
print()

url = "https://www.farmaciasahumada.cl"

respuesta = requests.get(url)
soup = BeautifulSoup(respuesta.content, features="html.parser")

#sudo apt install python3-requests
#sudo apt install python3-bs4
"""
productos = soup.find_all("div", {"class": "product"})

for producto in productos:
    nombre = producto.find("div", 
                           {"class":
                            "product__card-title"}).text
    precio = producto.find("div", 
                           {"class": 
                            "alineado-porcentaje-precio"}).text
    print(nombre, precio)
    print("-----------------------------------")
    print()

"""















"""notebooks = soup.find_all("div", {"class": "product__card-title"})
precios = soup.find_all("div", {"class": "alineado-porcentaje-precio"})
for notebook in notebooks:
    print(notebook.text)
    print()

for precio in precios:
    print(precio.text)
    print()
"""














print()
print("/////////////////////////////////////////////")




































