import { get_number, print } from "./utils/io_utils.js"

function main(){

const numero_N = get_number(`NUMERO N : `)

//quociente

let soma_quociente = 0
let soma_denomidor = 0

for(let i = 1; i <= numero_N;i++){

    let denomidor = numero_N - i + 1
    print(`${i} / ${denomidor} +`)

    soma_denomidor += denomidor
    soma_quociente += i

}

print(`RESULTADO (S) --> ${soma_quociente} / ${soma_denomidor}`)

}

main()