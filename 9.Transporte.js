class Transporte {
    constructor(capacidad, tipoCombustible) {
      this.capacidad = capacidad;
      this.tipoCombustible = tipoCombustible;
    }
  }
  
  class Autobus extends Transporte {
    constructor(capacidad, tipoCombustible) {
      super(capacidad, tipoCombustible);
    }
  
    arrancar() {
      console.log("El autobús ha arrancado.");
    }
  }
  
  class Bicicleta extends Transporte {
    constructor(capacidad) {
      super(capacidad, "N/A");
    }
  
    pedalear() {
      console.log("La bicicleta está en movimiento.");
    }
  }
  
  const transporteArr = [
    new Autobus(50, "Diesel"),
    new Bicicleta(1),
    new Autobus(30, "Gasolina"),
    new Bicicleta(1)
  ];
  
  transporteArr.forEach((transporte) => {
    if (transporte instanceof Autobus) {
      transporte.arrancar();
    } else if (transporte instanceof Bicicleta) {
      transporte.pedalear();
    }
  });
  