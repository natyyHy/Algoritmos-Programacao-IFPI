import { question } from "readline-sync"
import { get_number, print, random_number } from "./utils.js"

function main(){

    print('>>> 1-FATORIAL <<<')
    let numero_N = get_number('N: ')
    print(fatorial_de_numero(numero_N))

    print('>>> 2-SEQUENCIA DE FIBBONANCI <<<')
    let numero_C = get_number('C: ')
    print(sequencia_fibbonanci(numero_C))

    print('>>> 3-SEQUENCIA SIMPLES <<<')
    let numeros_A_B = question('A e B: ').split(' ').map(Number)
    sequencia_simples(numeros_A_B[0],numeros_A_B[1])

    print('>>> 4-PRODUTO <<<')
    let numeros = question('A e B: ').split(' ').map(Number)
    print(produto_somaSucessiva(numeros[0], numeros[1]))

    print('>>> 5-EXPOENCIAL <<<')
    let numeros_N_E = question('A e B: ').split(' ').map(Number)
    print(expoencial_numero(numeros_N_E[0],numeros_N_E[1]))

    print('>>> 6-SOMATORIO N ELEM ALEATORIOS <<<')
    let A_B = question('A e B: ').split(' ').map(Number)
    const vetor = vetor_n_aleatorios(A_B[0],A_B[1])
    print(vetor)
    print( 'soma: '+ (somar(vetor,0)))

    print('>>> 7-CONTAR CONSOANTES E VOGAIS <<<')
    let frase = question('frase: ')
    print('vogais: ' + contar_vogais(frase.toLowerCase(),0,0,0))
    print('consoantes: ' + contar_consoantes(frase.toLocaleLowerCase(),0,0))
}

main()  

function fatorial_de_numero(numero){
    //caso base
    if(numero <= 1){ //parada
        return 1
    }
    return numero * fatorial_de_numero(numero - 1)
}


function sequencia_fibbonanci(numero){
    //caso base
    if(numero === 1){
        return 0
    }else if(numero === 2){
        return 1
    }

    return sequencia_fibbonanci(numero - 1) + sequencia_fibbonanci(numero - 2)
}

function sequencia_simples(a,b){
    print(a)
    let next = a + 1
    if(a < b){
        sequencia_simples(next,b)
    }
}

function produto_somaSucessiva(a,b,cont = 0){
    //caso base
    if(cont === b){
        return 0
    }
    return a + produto_somaSucessiva(a,b,cont + 1)
}

function expoencial_numero(numero,quantidade,cont = 0){
    
    if(cont === quantidade){
        return 1
    }
    return numero * expoencial_numero(numero,quantidade,cont + 1)
}


function somar(vetor,i){
    if(i === vetor.length){
        return 0
    }
    return vetor[i] + somar(vetor,i + 1)
}

function contar_vogais(frase,i,quantidade){
    let vogais = 'a e i o u'.split(' ')
    //caso base,parada
    //quando terminar de percorrer todas as letras , retornar contador
    if(i === frase.length){
        return quantidade
    }

    if(tem_letra(frase[i],vogais)){
        quantidade = quantidade + 1
    }
    //convergencia
    return contar_vogais(frase,i + 1,quantidade)
}

function contar_consoantes(frase,i,quantidade){
    let consoantes = 'b c d f g h j k l m n p q r s t v w x y z'.split(' ')
    
    if(i === frase.length){
        return quantidade
    }
    
    if(tem_letra(frase[i] , consoantes)){
        quantidade = quantidade + 1
    }
    return contar_consoantes(frase,i + 1,quantidade)
}


// FOR SO PARA CRIAR VETOR E UMA CONDIÇAO --------------------------
function vetor_n_aleatorios(a,b){
    if(a > b) return print('(A) deve ser maior')
    
    let vetor = []
    for(let i = a; i <= b;i++){
        vetor.push(random_number(a,b))
    }
    return vetor
}

function tem_letra(letra,vetor){
    for(let i of vetor){
        if(i === letra){
            return true
        }
    }
    return false
}