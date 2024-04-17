    import { question } from "readline-sync"

    function main(){

    let valor_X = parseInt(question(``))
    let valor_Y = parseInt(question(``))

    let menor_numero = Math.min(valor_X,valor_Y)
    let maior_numero = Math.max(valor_X,valor_Y)

    if(menor_numero % 5 === 2 || menor_numero % 5 === 3){
        menor_numero = menor_numero + 1
    }

    while(menor_numero < maior_numero){

        if(menor_numero % 5 === 2 || menor_numero % 5 === 3){
            console.log(menor_numero)
        }

        menor_numero++
    }

    }

    main()
    
    
