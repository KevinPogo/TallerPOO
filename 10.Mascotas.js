class Mascota {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
}

class Perro extends Mascota {
  constructor(nombre) {
    super(nombre, "Perro");
  }

  ladrar() {
    console.log(`${this.nombre} está ladrando.`);
  }
}

class Gato extends Mascota {
  constructor(nombre) {
    super(nombre, "Gato");
  }

  maullar() {
    console.log(`${this.nombre} está maullando.`);
  }
}

const mascotas = [
  new Perro("Ladrón McPerrón"),
  new Gato("Bigotes Traviesos"),
  new Perro("Toby el Travieso"),
  new Gato("Don Maullido")
];

mascotas.forEach((mascota) => {
  if (mascota instanceof Perro) {
    mascota.ladrar();
  } else if (mascota instanceof Gato) {
    mascota.maullar();
  }
});
