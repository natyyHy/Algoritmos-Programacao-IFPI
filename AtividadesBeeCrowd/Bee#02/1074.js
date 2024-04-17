    import { get_number_inteiro } from "../utils/io_utils.js"

    //quantidade de acasos
    const numero_N = get_number_inteiro(``)

    if(numero_N > 10000){

        console.log(`Invalido`)

    }else{

        let contagemN = numero_N

        while(contagemN > 0 ){

            const valor_X = get_number_inteiro(``)

            if(-Math.pow(10, 7) < valor_X && valor_X < Math.pow(10, 7)){

                if(valor_X === 0 ){
                    console.log(`NULL`)

                }else{

                    const par_ou_impar = valor_X % 2 === 0 ? `EVEN` : `ODD`
                    const sinal = valor_X > 0 ? `POSITIVE` : `NEGATIVE`
                    console.log(`${par_ou_impar} ${sinal}`)
                }


            }else{

                console.log(`fora do intervalo!`)
            }

            contagemN--
        }
    }