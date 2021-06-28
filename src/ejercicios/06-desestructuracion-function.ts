export interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: 'Nokia A1',
  precio: 150,
};

const tableta: Producto = {
  desc: 'iPad A17',
  precio: 350,
};

export function calcularISV(productos: Producto[]): [number, number] {
  let total = 0;

  productos.forEach(({ precio }: Producto): void => {
    total += precio;
  });

  return [total, total * 0.15];
}

// const articulos = [telefono, tableta];

// const [total, isv] = calcularISV(articulos);

// console.log(`Total: ${total}`);
// console.log(`ISV: ${isv}`);
