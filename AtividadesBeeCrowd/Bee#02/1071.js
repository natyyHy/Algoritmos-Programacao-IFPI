import { question } from "readline-sync"

function main(){

const numero_X = parseInt(question(``))
const numero_Y = parseInt(question(``))

let min = Math.min(numero_X,numero_Y)
const max = Math.max(numero_X,numero_Y)


let soma = min
while(min < max){

    if(min % 2 === 1 ){
        soma += min
    }

    min++
}

console.log(soma)

}
main()