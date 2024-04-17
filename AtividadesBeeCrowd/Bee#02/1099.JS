    import { question } from 'readline-sync'

    function main(){

    let numero_acasos = parseInt(question(``))

    while(numero_acasos >= 1 ){

        const valores = question(``).split(" ")

        let valor_X = parseInt(valores[0])
        let valor_Y = parseInt(valores[1])

        let min = Math.min(valor_X,valor_Y)
        let max = Math.max(valor_X,valor_Y)

        let soma = 0
        while(min <= max){

            if(min % 2 !== 0 ){
                soma += min
                console.log(soma)
            }

            min++
        }

        numero_acasos--
    }

    }
    main()

