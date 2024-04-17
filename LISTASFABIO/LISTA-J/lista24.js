//Escreva um algoritmo que leia a razão de uma PA (Progressão Aritmética) e o seu primeiro termo e
//escreva os N termos da PA. Ler o valor de N.

import {print, get_number} from "./utils/io_utils.js"

function main(){

    const razao = get_number(`Informe o valor da RAZAO : `)
    const primeiro_termo = get_number(`Informe o valor do PRIMEIRO TERMO : `)
    let n = get_number(`Informe a quantidade de TERMOS : `)
    
    print(`Os ${n} termos da PA sao : `)
    
    let i = 1
    while(i < n) {  //continuidade
    
        const termo = primeiro_termo * i * razao  //trabalho
    
        print(`Termo ${i+1} : ${termo} `)
        i++  //convergencia
    
    }
    
    }
    
    main()