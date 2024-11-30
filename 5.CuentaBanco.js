class CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    depositar(monto) {
        this.saldo += monto;
        console.log(`Depósito de $${monto} en cuenta ${this.numeroCuenta}. Nuevo saldo: $${this.saldo}`);
    }

    retirar(monto) {
        if (monto > this.saldo) {
            console.log(`Fondos insuficientes en cuenta ${this.numeroCuenta}.`);
        } else {
            this.saldo -= monto;
            console.log(`Retiro de $${monto} en cuenta ${this.numeroCuenta}. Nuevo saldo: $${this.saldo}`);
        }
    }
}

class CuentaAhorros extends CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        super(numeroCuenta, saldo);
    }

    aplicarIntereses(tasaInteres) {
        const intereses = this.saldo * (tasaInteres / 100);
        this.saldo += intereses;
        console.log(`Intereses de $${intereses.toFixed(2)} aplicados en cuenta ${this.numeroCuenta}. Nuevo saldo: $${this.saldo.toFixed(2)}`);
    }
}

class CuentaCorriente extends CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        super(numeroCuenta, saldo);
    }
}

const cuentas = [
    new CuentaAhorros('123456', 1000000),
    new CuentaCorriente('654321', 1500000),
    new CuentaAhorros('234567', 2000000),
    new CuentaCorriente('765432', 2500000)
];

cuentas.forEach(cuenta => {
    cuenta.depositar(200);
    cuenta.retirar(150);
});

cuentas.forEach(cuenta => {
    if (cuenta instanceof CuentaAhorros) {
        cuenta.aplicarIntereses(5);
    }
});
