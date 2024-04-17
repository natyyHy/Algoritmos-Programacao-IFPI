    function main(){

        let numero_I = 0
        let numero_J = 1

        while (numero_I <= 2.0) {

            

            console.log(`I=${formatarNumero(numero_I)} J=${formatarNumero(numero_J)}`)
            console.log(`I=${formatarNumero(numero_I)} J=${formatarNumero(numero_J + 1 )}`)
            console.log(`I=${formatarNumero(numero_I)} J=${formatarNumero(numero_J + 2)}`)
            
            numero_I += 0.2
            numero_J += 0.2
        }

    }
    main()

    function formatarNumero(numero) {
        if (numero % 1 === 0) {
            return parseInt(numero).toString()
        } else {
            return numero.toFixed(1)
        }
    }