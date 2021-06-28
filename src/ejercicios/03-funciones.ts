/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(num1: number, num2: number, base: number = 2) {
  return num1 + num2 * base;
}

interface PersonajeLOR {
  nombre: string;
  hp: number;
  mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.hp += curarX;

  console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: 'steven',
  hp: 50,
  mostrarHp(): void {
    console.log(`Puntos de vida: ${this.hp}`);
  },
};

curar(nuevoPersonaje, 50);

const resultado1 = sumar(1, 10);
const resultado2 = sumarFlecha(2, 20);
const resultado3 = multiplicar(2, 0, 5);

console.log(resultado1, resultado2, resultado3);
