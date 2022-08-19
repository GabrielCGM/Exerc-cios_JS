/*
    Crie uma classe que simula um carrinho de compras de um e-commerce;
    Propriedades: itens, quantidade total, valor total;
    Crie os métodos para adicionar e remover itens;

*/

class CartItems{
    constructor(itens, qtd, valorTotal){
        this.itens = itens; // ITEM
        this.quantidadeTotal = qtd; // CARRINHOS DE COMPRAS
        this.valorTotal = valorTotal;   // VALOR TOTAL DO CARRINHO DE COMPRAS
    }

    addItem(item){
        let contador = 0
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id ){ //  Verifica se ja existe o ID no carrinho
                this.itens[itemCarrinho].qtd += item.qtd // Caso true, altera a quantidade do item
                contador = 1   
            }
        }

        if(contador == 0){
            this.itens.push(item) // Caso false, ele adiciona o produto no carrinho
        }


        this.quantidadeTotal += item.qtd // Somando a quantidade total
        this.valorTotal += item.preco * item.qtd // Somando o valor Total
    }


    removeItem(item){
        let contador = 0
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                
                let obj = this.itens[itemCarrinho] // Instanciando o respectivo objeto
                let index = this.itens.findIndex(function(obj) { return obj.id == item.id})  // Coletando o index do objeto respectivo 

                this.quantidadeTotal -= this.itens[itemCarrinho].qtd;  // Subtraindo a quantidade do item em relação ao carrinho de compras
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd; // Subtraindo o preço


                this.itens.splice(index, 1); //Alterando o carrinho de compras

                

            }
        }
    }
}

let cart_01 = new CartItems([{
        id: 01,
        nome: 'Teclado',
        qtd: 1,
        preco: 20
        },
        {
        id:02,
        nome:'Mouse',
        qtd: 2,
        preco: 30
        }
    ], 3, 80
)

console.log(cart_01.itens) // Itens do carrinho
console.log(cart_01.quantidadeTotal) // Quantidade de produtos | Output: 3
console.log(cart_01.valorTotal) // Valor Total dos produtos | Output: R$ 80


cart_01.addItem({    // Adicionando um produto que não existe no carrinho de compras no carrinho
    id:03,
    nome:'camisa',
    qtd: 2,
    preco: 50
})
console.log(cart_01.valorTotal) // | Output: R$ 180
console.log(cart_01.quantidadeTotal) // Output: 5

cart_01.addItem({ // Adicionando um produto que já existe no carrinho de compras, logo alterando apenas a quantidadeTotal e o valorTotal
    id:03,
    nome:'camisa', 
    qtd: 1,
    preco: 50
})

console.log(cart_01.valorTotal) // | Output: R$ 230
console.log(cart_01.quantidadeTotal) // | Output: 6 

cart_01.removeItem({ // Removendo um produto do carrinho de compras
    id:03,
    nome:'camisa',
    qtd: 3,
    preco: 50
})

console.log(cart_01.valorTotal) // | Output: R$ 80
console.log(cart_01.quantidadeTotal) // | Output: 3

