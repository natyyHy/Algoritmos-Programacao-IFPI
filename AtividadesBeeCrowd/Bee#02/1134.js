import { question } from "readline-sync";


function main(){

let numero

let qtd_alcool = 0
let qtd_gasolina = 0
let qtd_diecel = 0

while(true){

    numero = parseInt(question(``))

    if(numero < 1 || numero > 5){
    numero = parseInt(question(``))
    }


    if(numero === 4){
        break
    }

    if(numero === 1){
        qtd_alcool++
    }
    if(numero === 2){
        qtd_gasolina++
    }
    if(numero === 3){
        qtd_diecel++
    }

}

console.log
(`MUITO OBRIGADO
Alcool: ${qtd_alcool}
Gasolina: ${qtd_gasolina}
Diesel: ${qtd_diecel}`)

}

main()
