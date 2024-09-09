import { question } from "readline-sync"

function main(){

    //imprimir matriz correspondente ao tamanho
    let n = get_number()
    while(n !== 0){

        if(n >= 0 && n <= 100){
            
            let matriz1 = gerar_matriz(n)

            for(let i = 0; i < n ; i++){
                for(let j = 0; j < n ; j++){
                    matriz1[i][j] = Math.min(i , j , n - i - 1 , n - j - 1) + 1
                }
            }
        
           
            show_matriz(matriz1)
            
        }
        
        n = get_number()        
    }

}

main()


function gerar_matriz(tamanho){
    let matriz = [] 
    for(let i = 0 ; i < tamanho; i++){
        matriz[i] = []
    }
    return matriz
}


function get_number(){
    return Number(question())
}

function print(msg){
    return console.log(msg)
}

function show_matriz(matriz){
    
    for (let i = 0; i < matriz.length; i++) {
        let linha = ''
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j].toString().padStart(3,' ') + (j === matriz[i].length - 1 ? '' : ' ')
        }
        print(linha)
    }
    print('')
}