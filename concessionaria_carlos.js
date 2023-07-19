function Concessionaria(fab, cv, estado, valor) {
    this.fabricante = fab;
    this.potencia = cv;
    this.estado = estado;
    this.preço = valor
}

function Combustivel(gas) {
    this.combustivel = gas;
}

function Carro(nome, fab, cv, estado, gas, valor) {
    this.nome = nome;

    Concessionaria.call(this, fab, cv, estado, valor);
    Combustivel.call(this, gas);
}

function Moto(nome, fab, cv, estado, gas, valor) {
    this.nome = nome;

    Concessionaria.call(this, fab, cv, estado, valor);
    Combustivel.call(this, gas);
}

function Eletrico(nome, fab, cv, estado, valor) {
    this.nome = nome;

    Concessionaria.call(this, fab, cv, estado, valor);
}

const carro1 = new Carro("Kwid Zen", "Renault", "71 cv", "0km", "Gasolina", 69.999);
const carro2 = new Carro("Mobi", "Fiat", "74 cv", "Usado", "Flex", 40.999);
const moto1 = new Moto("Ninja ZX", "Kawasaki", "600cc", "usado", "Gasolina", 63.505);
const moto2 = new Moto("CG 160", "Honda", "160cc", "usado", "Gasolina", 15.605);
const eletrico1 = new Eletrico("2008 E-GT", "Pegeot", "136cv", "0km", 219.999);

console.log(carro1,carro2)
console.log(moto1,moto2)
console.log(eletrico1)