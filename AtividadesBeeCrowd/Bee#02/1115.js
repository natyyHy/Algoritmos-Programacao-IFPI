import { question } from "readline-sync"
import {} from "./utils/io_utils.js"

function main(){

while(true){

const entrada = question(``).split(" ")
const ponto_X = parseInt(entrada[0])
const ponto_Y = parseInt(entrada[1])

if(ponto_X === 0 || ponto_Y === 0){
    break;
}

if(ponto_X > 0 && ponto_Y > 0 ){
    console.log(`primeiro`)
}

if(ponto_X < 0 && ponto_Y > 0){
    console.log(`segundo`)
}

if(ponto_X < 0 && ponto_Y < 0 ){

    console.log(`terceiro`)
}

if(ponto_X > 0 && ponto_Y < 0){
    console.log(`quarto`)
}

}


}
main()