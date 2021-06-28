interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Despacito',
  detalles: {
    autor: 'Alguien',
    anio: 2020,
  },
};

const {
  volumen: vol,
  segundo,
  cancion,
  detalles: { autor, anio },
} = reproductor;

console.log(`El volumen actual es de: ${vol}`);
console.log(`El segundo actual es de: ${segundo}`);
console.log(`La cancion actual es de: ${cancion}`);
console.log(`El autor actual es de: ${autor}`);
console.log(`El anio actual es de: ${anio}`);
