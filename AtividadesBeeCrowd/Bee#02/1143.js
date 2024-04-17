import { question } from "readline-sync"

function main(){

let valor_N = parseInt(question(``))

let contagem = 1
let contagem_quadrado = 0
let contagem_cubo = 0

while(valor_N >= 1){

    contagem_quadrado = contagem**2
    contagem_cubo = contagem**3
    console.log(contagem,contagem_quadrado,contagem_cubo)

    contagem++
    valor_N--
}


}

main()