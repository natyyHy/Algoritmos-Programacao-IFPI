import { get_number, print } from "./utils/io_utils.js"

function main(){

const numero_N = get_number(`NUMERO N : `)
let S = ""

for(let i = 1;i <= numero_N ; i++){

    if(i === numero_N){

        S += `${i}/${(numero_N+1) - i} --> `
        break;
    }
    else if(i > 1 && i % 2 !== 0){

        S += `${i}/${(numero_N + 1)-(i)} - --> `
    }else if(i > 1 && i % 2 === 0){

        S += `${(numero_N+1)-(i)}/${i} + --> `
    }else{

        S += `${i}/${numero_N} --> `
    }

}

print(S)


}

main()