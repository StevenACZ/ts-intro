class Heroe {
  alterEgo: string;
  edad: number;
  nombreReal: number;

  imprimirNombre() {
    return this.alterEgo + ' ' + this.nombreReal;
  }
}

interface Personaje2 {
  alterEgo?: string;
  edad?: number;
  nombreReal?: number;
}

const ironman = new Heroe();
const spiderman: Personaje2 = {};

console.log(ironman.edad);
