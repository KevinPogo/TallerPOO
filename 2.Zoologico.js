class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
}

class Leon extends Animal {
    ladrar() {
        console.log(`${this.nombre} dice: ¡Roar!`);
    }
}

class Elefante extends Animal {
    trompetear() {
        console.log(`${this.nombre} dice: ¡Pawoo!`);
    }
}

class Tigre extends Animal {
    rugir() {
        console.log(`${this.nombre} dice: ¡Grrr!`);
    }
}

const zoologico = [
    new Leon('Rey León', 'León'),
    new Elefante('Dumbo', 'Elefante'),
    new Tigre('Tiger', 'Tigre')
];

zoologico.forEach(animal => {
    if (animal instanceof Leon) {
        animal.ladrar();
    } else if (animal instanceof Elefante) {
        animal.trompetear();
    } else if (animal instanceof Tigre) {
        animal.rugir();
    }
});
