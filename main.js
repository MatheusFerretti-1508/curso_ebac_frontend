function Veiculo(tipo) { /*Abstração*/
    this.tipo = tipo
}

function Carro(tipo, nome, marca, potenciaEmCavalos) { /*Classe herdeira 1*/
    Veiculo.call(this, tipo);
    
    this.nome = nome
    this.marca = marca;
    this.potenciaEmCavalos = potenciaEmCavalos;
}
function Moto(tipo, nome, marca, cilindradas) { /*Classe herdeira 2*/
    Veiculo.call(this, tipo);

    this.nome = nome
    this.marca = marca;
    this.cilindradas = cilindradas;
}

const carro1 = new Carro("Automóvel", "Lancer", "Mitsubish", 320); /*Instancia 1*/
const moto1 = new Moto("Motocicleta", "R1250 GS", "BMW", 1254); /*Instancia 2*/
const carro2 = new Carro("Automóvel", "Impreza WRX Sti", "Subaru", 750); /*Instancia 3*/



