import { question } from "readline-sync"


function main(){

while(true){

    const entrada = question(``)
    const valores = entrada.split(" ")

    const valor_Y = parseInt(valores[0])
    const valor_X = parseInt(valores[1])

    if(valor_X === valor_Y ){
        break;
    }

    if(valor_X > valor_Y){

        console.log(`Crescente`)
    }else if(valor_X < valor_Y){
        console.log(`Decrescente`)
    }
}

}
main()