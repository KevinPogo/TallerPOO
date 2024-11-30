class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.calificaciones = [];
    }

    agregarCalificacion(calificacion) {
        this.calificaciones.push(calificacion);
        console.log(`Calificación ${calificacion} agregada para ${this.nombre}.`);
    }

    calcularPromedio() {
        if (this.calificaciones.length === 0) {
            return 0;
        }
        const suma = this.calificaciones.reduce((acc, curr) => acc + curr, 0);
        return suma / this.calificaciones.length;
    }
}

module.exports = { Estudiante };  
