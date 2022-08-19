/*
    Crie uma classe CONTA BANCÁRIA
    Com as propriedades de saldo na conta corrente, saldo na conta poupança e juros da poupança
    Crie os métodos de DEPÓSITO, SAQUE, TRANSFERIR DINHEIRO DA POUPANÇA PARA A CORRENTE
    Além disso crie uma conta especial que herda da conta normal
    Na conta especial os juros são dobrados da conta normal
*/


class ContaBancaria{
    constructor(saldoCC, saldoCP, jurosP ){ // PROPRIEDADES DA CONTA
        this.saldoCC = saldoCC
        this.saldoCP = saldoCP
        this.jurosP = jurosP
    }

    // Vizualizar o saldo da CONTA CORRENTE
    get getSaldoCC(){
        return `TOTAL NA CONTA CORRENTE >> R$ ${this.saldoCC}`
    }

    // Vizualizar o saldo da CONTA POUPANÇA
    get getSaldoCP(){
        return `TOTAL NA CONTA POUPANÇA >> R$ ${this.saldoCP}`
    }



    // Método para depositar | tipoConta = corrente/poupança | value = O valor para depositar
    depositar(tipoConta, value){
        // CONTA CORRENTE
        if(tipoConta.toUpperCase() == 'CORRENTE'){
            this.saldoCC += value
            console.log(`Você depositou R$ ${value} na sua CONTA CORRENTE | TOTAL NA CONTA C > R$ ${this.saldoCC}`)
        
        // CONTA POUPANÇA
        } else if(tipoConta.toUpperCase() == 'POUPANÇA'){
            this.saldoCP += value
            console.log(`Você depositou R$ ${value} na sua CONTA POUPANÇA | TOTAL NA CONTA POUP > R$ ${this.saldoCP}`)
            
        }
    }
    // Método para sacar dinheiro da conta desejada
    saque(tipoConta, value){
         // CONTA CORRENTE
         if(tipoConta.toUpperCase() == 'CORRENTE'){
            //Verifica se o valor desejado para sacar está disponível na respectiva conta escolhida
            if(value <= this.saldoCC){
                this.saldoCC -= value
                console.log(`SAQUE CONCLUÍDO | SAQUE DE R$ ${value} | TOTAL NA CONTA > R$ ${this.saldoCC}`)
            }else{
                console.log('FUNDOS INSUFICIENTES')
            }
        
        // CONTA POUPANÇA
        } else if(tipoConta.toUpperCase() == 'POUPANÇA'){
            if(value <= this.saldoCP){
                this.saldoCP -= value;
                console.log(`SAQUE CONCLUÍDO | SAQUE DE R$ ${value} | TOTAL NA CONTA > R$ ${this.saldoCP}`)
            }else{
                console.log('FUNDOS INSUFICIENTES')
            }

        }
    }
    // Método para transferir dinheiro da CONTA POUPANÇA ---> CONTA CORRENTE
    transferir(value){
        if(value <= this.saldoCP){
            this.saldoCP -= value
            this.saldoCC += value
            console.log(`TRANSFERÊNCIA CONCLUÍDA | TRANSFERIU R$ ${value} DA CONTA POUPANÇA PARA CONTA CORRENTE \n NOVO SALDO CONTA POUPANÇA: R$ ${this.saldoCP} | NOVO SALDO CONTA CORRENTE: R$ ${this.saldoCC}`)
        }else{
            console.log("FUNDOS INSUFICIENTES")
        }
        
    }
    // Método para render mensal na conta POUP
    jurosContaP(){
        let juros = (this.saldoCP * this.jurosP) / 100
        this.saldoCP += juros
        console.log(`SEU DINHEIRO RENDEU R$ ${juros} ao mês`)
    }
}

// ContaEspecial que herda as propriedades e métodos da classe ContaBancaria
class ContaEspecial extends ContaBancaria{
    constructor(saldoCC, saldoCP, jurosP){
        super(saldoCC, saldoCP, jurosP*2)
    }
}


let myConta = new ContaBancaria(0, 100, 2) // Criando a conta | SALDO CORRENTE = 0 | SALDO POUP = 100 | JUROS = 2%
myConta.depositar('corrente', 200) // DEPOSITANDO R$ 200 na conta corrente
myConta.depositar('poupança', 300) // DEPOSITANDO R$300 na conta poupança

// Juros mensal na Poupança de acordo com o dinheiro que está disponível na conta
myConta.jurosContaP() // output: R$ 8

// Verificar o saldo na conta CORRENTE
// O método get/set são métodos porém tratamos como propriedades quando queremos chama-los
console.log(myConta.getSaldoCC ) // output: R$ 200

// Verificar o saldo na conta POUPANÇA
console.log(myConta.getSaldoCP) // output: R$ 408

// Realizando Saque na conta CORRENTE
myConta.saque('corrente', 10)

// Realizando Saque na conta POUPANÇA
myConta.saque('poupança', 50)

// Transferindo dinheiro da conta poupança para CORRENTE
myConta.transferir(50)

let myContaEspecial = new ContaEspecial(1000, 2000, 5) // CORRENTE = 1000 | POUP = 2000 | JUROS 2x


console.log(myContaEspecial)
myContaEspecial.jurosContaP()


