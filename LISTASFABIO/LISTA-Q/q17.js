import { get_number, print } from "./utils/io_utils.js"

function main(){

const numero_N = get_number(`NUMERO N : `)

let soma_quociente = 0
let soma_denomidor = 0

for(let i = 1 ; i <= numero_N;i++){

    print(` 1 / ${i} + `)
    soma_quociente += 1
    soma_denomidor += i
}

print(`RESULTADO (S) --> ${soma_quociente} / ${soma_denomidor}`)

}
main()