import { question } from "readline-sync"
import { get_number_inteiro } from "./utils/io_utils.js"

function main(){

let senha_informada = get_number_inteiro(``)

while(senha_informada != 2002){

    console.log(`Senha Invalida`)
    senha_informada = get_number_inteiro(``)
    senha_informada = senha_informada
}

console.log(`Acesso Permitido`)

}

main()