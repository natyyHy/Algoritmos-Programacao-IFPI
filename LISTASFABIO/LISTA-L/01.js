import { get_number_inteiro, print } from "./utils/io_utils.js"


function main(){

const valor_N = get_number_inteiro(`Valor N:`)

for (let i = 1;i <= valor_N;i++) {

    print(i)
}

}

main()