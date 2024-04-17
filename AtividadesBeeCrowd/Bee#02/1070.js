import { get_number_inteiro, print } from "../utils/io_utils.js"

function main(){

const numero_X = get_number_inteiro(`NUMERO X : `)

let numb_impar = numero_X + 1
let i = 0

while(i < 6 ){

    if(numb_impar % 2 === 1 ){
    
        print(`${numb_impar}`)
        i++
    }
    

    numb_impar++
}
}
main()
