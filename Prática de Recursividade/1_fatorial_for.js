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
    print(sequencia_simples(numeros_A_B[0],numeros_A_B[1]))

    print('>>> 4-PRODUTO <<<')
    let numeros = question('A e B: ').split(' ').map(Number)
    print(produto_somaSucessiva(numeros[0], numeros[1]))

    print('>>> 5-EXPOENCIAL <<<')
    let numeros_N_E = question('A e B: ').split(' ').map(Number)
    print(expoencial_numero(numeros_N_E[0],numeros_N_E[1]))

    print('>>> 6-SOMATORIO N ELEM ALEATORIOS <<<')
    let A_B = question('A e B: ').split(' ').map(Number)
    print( 'soma: '+ (somatorio_vetor_Nelementos_aleatorios(A_B[0],A_B[1])))

    print('>>> 7-CONTAR CONSOANTES E VOGAIS <<<')
    let frase = question('frase: ')
    print('vogais: ' + contar_vogais(frase))
    print('consoantes: ' + contar_consoantes(frase))
}

main()  

function fatorial_de_numero(numero){
    let fatorial = 1
    for(let i = numero; i >= 1;i--){
        fatorial *= i
    }
    return fatorial
}

function sequencia_fibbonanci(numero){
    let sequencia = [1 , 1]

    for(let i = 2;i <= numero; i++){
        let valor = sequencia[i - 1] + sequencia[i - 2]
        sequencia.push(valor) 
    }
    return sequencia
}

function sequencia_simples(a,b){
    let sequencia = []
    if(a > b){
        for(let i = b; i <= a;i++){
            sequencia.push(i)
        }
    }else if(b > a){
        for(let i = a;i <= b;i++){
            sequencia.push(i)
        }
    }else{
        return a
    }
    return sequencia
}

function produto_somaSucessiva(a,b){
    let produto = 0
    for(let i = 0;i < b;i++){
        produto += a
    }
    return produto
}

function expoencial_numero(numero,quantidade){
    let resuldado = 1
    for(let i = 0 ; i < quantidade;i++){
        resuldado *= numero
    }
    return resuldado
}

function somatorio_vetor_Nelementos_aleatorios(a,b){
    if(a > b) return print('(A) deve ser maior')
    
    let vetor = []
    for(let i = a; i <= b;i++){
        vetor.push(random_number(a,b))
    }

    print(vetor)
    let soma = 0
    for(let i of vetor){
        soma += i
    }
    return soma
}

function contar_vogais(frase){
    let vogais = ['a','e','i','o','u']
    let cont = 0
    for(let i of frase.toLowerCase()){
        for(let j of vogais){
            if(i === j) cont++
        }
    }
    return cont
}

function contar_consoantes(frase){
    let consoantes = ['b','c','d','f','g','j','k','l','m','n','p','q','r','s','t','v','w','x','z']
    let cont = 0
    for(let i of frase.toLowerCase()){
        for(let j of consoantes){
            if(i === j) cont++
        }
    }
    return cont
}