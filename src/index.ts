class Heroe {
  constructor(
    public alterEgo: string,
    public edad?: number,
    public nombreReal?: string
  ) {}
}

const ironman = new Heroe('Ironman', 48, 'Tony');

console.log(ironman);
