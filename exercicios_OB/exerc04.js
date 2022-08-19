/*
    Crie uma classe que simule um carro
    Propriedades: marca, cor, tanque
    Crie um método para de dirigir o carro, que vá diminuindo a gasolina gradativamente
    E um de abastecer para aumentar a gasolina quando necessário
*/

class Carro{
    // Propriedades do CARRO
    constructor(marca, cor, tanque, gasolinaNoTanque){
        this.marca = marca
        this.cor = cor
        this.tanque = tanque
        this.gasolinaNoTanque = gasolinaNoTanque
    }
    
    // Retorna as propriedades do CARRO
    get getCarro(){
        console.log(`MARCA: ${this.marca} \n COR: ${this.cor} \n TANQUE: ${this.tanque} L \n GASOLINA TANQUE: ${this.gasolinaNoTanque} L`)
    }
    // Método para abastecer o carro
    abastecerCarro(value){
        // Verifica quanto que falta para encher o tanque
            // Caso o valor inserido exceda o espaço que tem para abastecer irá retornar uma mensagem
        if((this.tanque - this.gasolinaNoTanque) < value){
            console.log('Não é possível abastecer, pois irá exceder o TANQUE.')
            // Caso False, irá abastecer o tanque com a quantidade desejada
        }else{
            this.gasolinaNoTanque += value
            console.log(`ABASTECEU ${value} L de GASOLINA ADITIVADA`)
        }
    }

    /*
    ATÉ 100 KM >
        VELOCIDADE <= 100 >>> GASTA 5 LITROS
        VELOCIDADE > 100 >>> GASTA 8 LITROS

    + 100 KM>
        VELOCIDADE <= 100 >>> GASTA 6 LITROS
        VELOCIDADE > 100 >>> GASTA 9 LITROS
     
    VALORES FICTÍCIOS 
    */

        

    dirigirCarro(km, velocidade){
        if(km <= 100 ){
            
            if(velocidade <= 100){
                this.gasolinaNoTanque -= 5
                console.log('VOCÊ GASTOU 5 LITROS')
            }else if (velocidade > 100){
                this.gasolinaNoTanque -= 8
                console.log('VOCÊ GASTOU 8 LITROS')
            }
        } else if(km > 100){
            if(velocidade <= 100){
                this.gasolinaNoTanque -= 6
                console.log('VOCÊ GASTOU 6 LITROS')
            } else if(velocidade > 100){
                this.gasolinaNoTanque -= 9
                console.log('VOCÊ GASTOU 9 LITROS')
            }

        }
    }

    
}

// Instanciando a CLASSE 
let myCarro = new Carro('VW', 'BLACK', 50, 20) // MARCA: VW | COR: BLACK | TANQUE: 50L | GASOLINA NO TANQ : 20L
myCarro.getCarro // Vizualiza as propriedades do CARRO

myCarro.abastecerCarro(30) // Completando o TANQUE com 30 LITROS , pois a CAPACIDADE MÁXIMA do carro é 50L

myCarro.getCarro // Vizualiza as propriedades do CARRO

myCarro.dirigirCarro(100, 90) // DIRIGIR 100 KM | VELOCIDADE: 90 KM/H > GASTA 5 LITROS
myCarro.dirigirCarro(100, 120) // DIRIGIR 100 KM | VELOCIDADE: 120 KM/H > GASTA 8 LITROS
myCarro.dirigirCarro(140, 90) // DIRIGIR 140 KM | VELOCIDADE: 90 KM/H > GASTA 6 LITROS
myCarro.dirigirCarro(140, 120) // DIRIGIR 140 KM | VELOCIDADE: 120 KM/H > GASTA 9  LITROS

myCarro.getCarro 

