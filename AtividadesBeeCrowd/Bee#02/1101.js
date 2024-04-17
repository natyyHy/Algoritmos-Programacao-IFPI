import { question } from "readline-sync"


function main(){

let valor_M = 1
let valor_N = 1

while(valor_M > 0 && valor_N > 0){

    const entrada = question(``)
    const valores = entrada.split(" ")

    valor_M = parseInt(valores[0])
    valor_N = parseInt(valores[1])
    
    if (valor_M <= 0 || valor_N <= 0) {
        break
    }

    let maior_numero = Math.max(valor_M,valor_N)
    let menor_numero = Math.min(valor_M,valor_N)
    let soma = 0
    let sequencia = ``

    while(menor_numero <= maior_numero){

        sequencia += menor_numero + ' '

        soma += menor_numero
        menor_numero++
    }

    console.log(sequencia.trim() + ' Sum=' + soma)

}
 
}

main()