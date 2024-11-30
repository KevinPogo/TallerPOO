class Empleado {
    constructor(nombre, sueldoPorHora) {
        this.nombre = nombre;
        this.sueldoPorHora = sueldoPorHora;
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, sueldoPorHora) {
        super(nombre, sueldoPorHora);
    }

    calcularSueldo(horasTrabajadas) {
        return this.sueldoPorHora * horasTrabajadas;
    }
}

class EmpleadoMedioTiempo extends Empleado {
    constructor(nombre, sueldoPorHora) {
        super(nombre, sueldoPorHora);
    }

    calcularSueldo(horasTrabajadas) {
        return this.sueldoPorHora * horasTrabajadas;
    }
}

const empleados = [
    new EmpleadoTiempoCompleto('Kevin', 20),
    new EmpleadoMedioTiempo('Camila', 15),
    new EmpleadoTiempoCompleto('Cristian', 25),
    new EmpleadoMedioTiempo('Alexa', 10)
];

const horasTrabajadas = [40, 20, 40, 25];

console.log('Sueldos de los empleados:');
empleados.forEach((empleado, index) => {
    const sueldoTotal = empleado.calcularSueldo(horasTrabajadas[index]);
    console.log(`${empleado.nombre} - Sueldo total: $${sueldoTotal}`);
});
