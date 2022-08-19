/*
    Crie um objeto que simula um endereço de um cliente
    Propriedades: Rua, Bairro, Cidade e Estado
    Crie métodos para atualizar todas as propriedades
*/

class Endereco{
    constructor(rua, bairro, cidade, estado){ // Propriedas da Classe
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }
    get getVizualizar(){ // Usando o método get para retornar as propriedades
        return (`RUA: ${this.rua} \n BAIRRO: ${this.bairro} \n CIDADE: ${this.cidade} \n ESTADO: ${this.estado}`)
    }

    changeRua(rua_old, rua_new){ // Não optei usar o SET mas poderia :) | Método para alterar a RUA
        if(this.rua == rua_old){
            this.rua = rua_new
            console.log('ENDEREÇO ALTERADO COM SUCESSO')
        } else {
            console.log('ENDEREÇO NÃO CADASTRADO')
        }
    }

    changeBairro(bairro_old, bairro_new){ // Método para alterar o BAIRRO
        if(this.bairro == bairro_old){
            this.bairro = bairro_new
            console.log('ENDEREÇO ALTERADO COM SUCESSO')
        } else{
            console.log('ENDEREÇO NÃO CADASTRADO')
        }

    }

    changeCity(city_old, city_new){ // Método para alterar a ESTADO
        if(this.cidade == city_old){
            this.cidade = city_new
            console.log('ENDEREÇO ALTERADO COM SUCESSO')
        } else{
            console.log('ENDEREÇO NÃO CADASTRADO')
        }

    }
    
    changeState(state_old, state_new){ // Método para alterar o ESTADO
        if(this.estado == state_old){
            this.estado = state_new
            console.log('ENDEREÇO ALTERADO COM SUCESSO')
        } else{
            console.log('ENDEREÇO NÃO CADASTRADO')
        }

    }
    
}   

let casa_01 = new Endereco('rua 123','bairro 456', 'cidade 789', 'estado 90') // Instanciando a classe
 console.log(casa_01.getVizualizar)

casa_01.changeRua('rua 123', 'rua ZZZ') // Alterando a RUA

casa_01.changeBairro('bairro 456', 'bairro XXX') // Alterando o BAIRRO

casa_01.changeCity('cidade 789', 'cidade WWW') // Alterando a CIDADE 

casa_01.changeState('estado 90', 'estado YYY') // Altenrado o ESTADO

console.log(casa_01.getVizualizar) // Endereço NOVO

