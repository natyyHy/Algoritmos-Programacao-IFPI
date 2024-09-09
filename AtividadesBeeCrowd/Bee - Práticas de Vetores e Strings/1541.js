import { question } from "readline-sync"

function main(){

    let a_b_c = question().split(' ').map(Number)
    while(a_b_c[0] !== 0){

        let a = a_b_c[0] , b = a_b_c[1] , c = a_b_c[2]

        let valor = ((a * b) / c)
        let valor2 = Math.floor(Math.sqrt(valor) * 10) 
        console.log(valor2)
        a_b_c = question().split(' ').map(Number)
    }

}

main()