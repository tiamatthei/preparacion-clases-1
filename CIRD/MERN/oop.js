class Mascota {
  constructor(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
  }

}

class Perro extends Mascota {
  constructor(nombre, raza, edad) {
    super(nombre, raza, edad);
  }

  ladrar() {
    console.log(`Guau guau, mi nombre es ${this.nombre}`);
  }
}


class Gato extends Mascota {
  constructor(nombre, raza, edad) {
    super(nombre, raza, edad);
  }

  maullar() {
    console.log(`Miau miau, mi nombre es ${this.nombre}`);
  }
}




