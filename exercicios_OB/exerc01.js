/*
    > CRIE UMA CLASSE QUE SIMULA UMA CONTA NO BANCO
    > DEVE CONTER A PROPRIEDADE SALDO
    > E OS MÉTODOS DEPOSITO E SAQUE
    > TESTE OS METODOS
*/

class AccBack{
    constructor(saldo){
        this.saldo = saldo
    }

    get getSaldo(){
        return `SEU SALDO É R$ ${this.saldo}`  // Para verificar o saldo da CONTA
    }

    depositar(value){ // Depositar dinheiro na conta
        this.saldo += value
        console.log(`VOCÊ ADICIONOU R$ ${value} >> TOTAL NA SUA CONTA -> ${this.getSaldo}`)
    }

    saque(value){ // Sacar dinheiro 
    // Verificando se o valor fornecido está disponível na conta
        if(value > this.saldo){  // if for maior
            console.log('Fundos Insuficientes') 
        }
        else{
            this.saldo -= value;
            console.log(`Você sacou R$ ${value} >> TOTAL >> R$ ${this.getSaldo}`)
        }
    }
}

let conta_01 = new AccBack(1000) // Instanciando a classe 
conta_01.depositar(200) // Depositando na conta
conta_01.saque(100) // Retirando da conta

conta_01.saque(4500) // Tentando retirar um valor que excede o saldo da conta
