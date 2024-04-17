///Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é
//sempre pelo mais barato.

import { question } from "readline-sync";

function main(){

promt(`===== PRODUTO MAIS BARATO =====`)

const preçoproduto1 = parseFloat(question(` Informe o preço do produto 1 : `))
const preçoproduto2 = parseFloat(question(` Informe o preço do produto 2 : `))
const preçoproduto3 = parseFloat(question(` Informe o preço do produto 3 : `))

if(preçoproduto1 < preçoproduto2 && preçoproduto1 < preçoproduto3 ){

    promt (`O PRODUTO 1 DE ${preçoproduto1} reais DEVE SER COMPRADO ! `)

}else if(preçoproduto2 < preçoproduto1 && preçoproduto2 < preçoproduto3){

    promt(`O PRODUTO 2 DE ${preçoproduto2} reais DEVE SER COMPRADO `)
}else{

    promt(`O PRODUTO 3 DE ${preçoproduto3} reais DEVE SER COMPRADO ! `)
}


}

function promt(texto){
    return console.log(texto)
}




main()






















