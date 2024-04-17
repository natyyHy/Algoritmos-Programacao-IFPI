import { question } from "readline-sync"
import { get_number_real } from "./utils/io_utils.js"

function main(){

let pergunta = 1

while(pergunta === 1){ 

    let soma = 0
    let notasvalidas = 0

    while(notasvalidas < 2){

    let nota_informada = get_number_real(``)
    if(nota_informada < 0 || nota_informada > 10){
        console.log(`nota invalida`)
    }else{
        soma += nota_informada
        notasvalidas++
    }

    }

    const media = soma / 2

    console.log(`media = ${media.toFixed(2)}`)

    console.log(`novo calculo (1-sim 2-nao)`)
    pergunta = parseInt(question(``))

    while(pergunta !== 1 && pergunta !== 2){
    console.log(`novo calculo (1-sim 2-nao)`)
    pergunta = parseInt(question(``))
    }

}

}

main()