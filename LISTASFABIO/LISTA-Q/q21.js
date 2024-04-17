import { get_number, print } from "./utils/io_utils.js"

function main(){

const numero_N = get_number(`NUMERO N : `)

let quociente = 0
let denominador = 0

for(let i = 1; i <= numero_N;i++){

    print(`${i} / ${denominador}`)
    i++
    
}
}

main()