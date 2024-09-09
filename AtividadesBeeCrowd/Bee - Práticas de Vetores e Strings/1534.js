import { question } from "readline-sync"

function main(){

    let n = question()
    while(n !== ""){
        let numero = Number(n)
        
        let matriz = []
        for(let i = 0; i < numero; i++){
            let linha = []
            for(let j = 0; j < numero;j++){

                let cont = numero - 1
                let valor = 0

                if(j === i && i + j === cont){
                    valor = 2
                }else if( i === j){
                    valor = 1
                }else if(i + j === cont){
                    valor = 2
                }else{
                    valor = 3
                }

                linha.push(valor)
            }

            matriz.push(linha)
        }

        show_matriz(matriz)
        
        n = question()
    }

}

main()



function show_matriz(matriz){
    for(let i = 0 ; i < matriz.length ; i++){
        let valores = ''
        for(let j = 0; j < matriz[i].length;j++){
            valores += matriz[i][j]
        }
        console.log(valores)
    }
}