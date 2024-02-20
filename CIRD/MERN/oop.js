class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }
  attack(target) {
    // reduce targes res by power
  }
}

class Effect extends Card {
  constructor(name, cost, magnitude, stat) {
    super(name, cost);
    this.magnitude = magnitude;
    this.stat = stat;
  }

  jugar(objetivo) {
    if (objetivo instanceof Unit) {
      let palabra = "Sube";
      if (this.magnitude < 0) {
        palabra = "Baja";
      }
      if (this.stat === "poder") {
        objetivo.power += this.magnitude;
      }
      if (this.stat === "res") {
        objetivo.res += this.magnitude;
      }
      console.log(
        `${palabra} el ${this.stat} de ${objetivo.name} por ${this.magnitude}`
      );
    } else {
      console.log("NO ES UN UNIT!");
    }
  }
}

const jorge = new Unit("Jorge", 10, 20, 200);
const efecto1 = new Effect("Pot of greed", 4, -10, "res");

console.log(jorge.res); //20

efecto1.jugar(jorge);

console.log(jorge.res); //10
