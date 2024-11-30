const { Estudiante } = require('./1.Estudiantes');

class Curso {
    constructor(nombreCurso) {
        this.nombreCurso = nombreCurso;
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
        console.log(`Estudiante ${estudiante.nombre} agregado al curso ${this.nombreCurso}.`);
    }

    calcularPromedioCurso() {
        if (this.estudiantes.length === 0) {
            return 0;
        }
        const sumaPromedios = this.estudiantes.reduce((acc, estudiante) => acc + estudiante.calcularPromedio(), 0);
        return sumaPromedios / this.estudiantes.length;
    }
}

class CursoOnline extends Curso {
    constructor(nombreCurso, plataforma) {
        super(nombreCurso);
        this.plataforma = plataforma;
    }

    mostrarPlataforma() {
        console.log(`El curso ${this.nombreCurso} se imparte en la plataforma ${this.plataforma}.`);
    }
}

class CursoPresencial extends Curso {
    constructor(nombreCurso, ubicacion) {
        super(nombreCurso);
        this.ubicacion = ubicacion;
    }

    mostrarUbicacion() {
        console.log(`El curso ${this.nombreCurso} se imparte en ${this.ubicacion}.`);
    }
}

// Ejemplo de uso
const estudiante1 = new Estudiante('Kevin', 20);
const estudiante2 = new Estudiante('Ana', 22);

estudiante1.agregarCalificacion(90);
estudiante1.agregarCalificacion(85);
estudiante2.agregarCalificacion(75);
estudiante2.agregarCalificacion(80);

const cursoJavaScript = new CursoOnline('Curso de JavaScript', 'Udemy');
cursoJavaScript.agregarEstudiante(estudiante1);
cursoJavaScript.agregarEstudiante(estudiante2);

cursoJavaScript.mostrarPlataforma();
console.log(`El promedio del curso es: ${cursoJavaScript.calcularPromedioCurso()}`);
