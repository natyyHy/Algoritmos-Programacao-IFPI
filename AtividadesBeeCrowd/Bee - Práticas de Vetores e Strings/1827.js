import { question } from "readline-sync"

function main(){

    let n = get_number()
    
    while(n !== 0){

        let matriz = []
        let borda = Math.floor(n / 3)
        for(let i = 0; i < n;i++){
            let linha = []
            for(let j = 0; j < n;j++){
                //parte interna
                if(i >= borda && i < n - borda && j >= borda && j < n - borda){
                        
                    linha.push('1')
                }
                //diagonal principal
                else if(i === j){
                    linha.push('2')
                //diagonal segundaria
                }else if((i + j) === n - 1){
                    linha.push('3')
                }
                // Parte externa
                else{
                    linha.push('0')
                }
            }
            matriz.push(linha)
        }

        //ponto central
        matriz[Math.floor(n / 2)][Math.floor(n / 2)] = '4'

        show_matriz(matriz)

        n = get_number()
    }
}

main()

function get_number(){
    return Number(question())
}

function show_matriz(matriz){
    for(let linha of matriz){
        console.log(linha.join(''))
    }
    console.log('')
}