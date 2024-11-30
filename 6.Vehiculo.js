class Vehiculo {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
}
  
mostrarDetalles() {
    return `${this.marca} ${this.modelo} (${this.año})`;
}
}
  
class Auto extends Vehiculo {
conducir() {
    console.log(`Conduciendo el auto ${this.mostrarDetalles()}.`);
    }
}
  
class Moto extends Vehiculo {
    conducir() {
      console.log(`Conduciendo la moto ${this.mostrarDetalles()}.`);
    }
}
  
const vehiculos = [];
  
vehiculos.push(new Auto("Toyota", "Corolla", 2020));
vehiculos.push(new Moto("Yamaha", "YZF-R3", 2021));
vehiculos.push(new Auto("Honda", "Civic", 2022));
vehiculos.push(new Moto("Harley-Davidson", "Iron 883", 2019));
  
function listarVehiculosPorTipo(tipo) {
    console.log(`Listado de ${tipo}s:`);
    vehiculos.forEach((vehiculo) => {
      if ((tipo === "Auto" && vehiculo instanceof Auto) || (tipo === "Moto" && vehiculo instanceof Moto)) {
        console.log(vehiculo.mostrarDetalles());
      }
    });
}

listarVehiculosPorTipo("Auto");
listarVehiculosPorTipo("Moto");
  
vehiculos[0].conducir();
vehiculos[1].conducir();
  