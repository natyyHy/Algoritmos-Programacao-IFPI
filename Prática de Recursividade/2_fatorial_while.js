import { get_number, print , random_number } from './utils.js'
import { question } from 'readline-sync'

function main(){

    let opcao = -1
    while(opcao !== 0){
        print
    (`\t--- MENU ---\n
    \t1-FATORIAL
    \t2-SEQUENCIA DE FIBBONANCI
    \t3-SEQUENCIA SIMPLES
    \t4-PRODUTO
    \t5-EXPOENCIAL
    \t6-SOMATORIO N ELEM ALEATORIOS
    \t7-CONTAR CONSOANTES E VOGAIS\n`)

    opcao = get_number('opcao: ')

    switch (opcao) {
        case 1:

            print('>>> 1-FATORIAL <<<')
            let numero_N = get_number('N: ')
            print(fatorial_de_numero(numero_N))

            break;
        case 2:

            print('>>> 2-SEQUENCIA DE FIBBONANCI <<<')
            let numero_C = get_number('C: ')
            print(sequencia_fibbonanci(numero_C))

            break;
        case 3:

            print('>>> 3-SEQUENCIA SIMPLES <<<')
            let numeros_A_B = question('A e B: ').split(' ').map(Number)
            sequencia_simples(numeros_A_B[0],numeros_A_B[1])

            break;
        case 4:

            print('>>> 4-PRODUTO <<<')
            let numeros = question('A e B: ').split(' ').map(Number)
            print(produto_somaSucessiva(numeros[0], numeros[1]))

            break;
        case 5:

            print('>>> 5-EXPOENCIAL <<<')
            let numeros_N_E = question('A e B: ').split(' ').map(Number)
            print(expoencial_numero(numeros_N_E[0],numeros_N_E[1]))

            break;
        case 6:

            print('>>> 6-SOMATORIO N ELEM ALEATORIOS <<<')
            let A_B = question('A e B: ').split(' ').map(Number)
            const vetor = vetor_n_aleatorios(A_B[0],A_B[1])
            print(vetor)
            print( 'soma: '+ (somar(vetor)))

            break;
        case 7:

            print('>>> 7-CONTAR CONSOANTES E VOGAIS <<<')
            let frase = question('frase: ')
            print('vogais: ' + contar_vogais(frase.toLowerCase(),0,0,0))
            print('consoantes: ' + contar_consoantes(frase.toLocaleLowerCase(),0,0))

            break;
    }


    }

}

main()


function fatorial_de_numero(numero){
    //caso base
    if(numero <= 1) return 1

    let fatorial = 1
    let i = numero
    while( i >= 1){
        fatorial *= i
        i--
    }
    return fatorial
}


function sequencia_fibbonanci(numero){
    //caso base
    let vetor_sequencia = [1 , 1]
    if(numero === 1 || numero === 2){
        return vetor_sequencia
    }

    let i = 2
    while(i < numero){
        vetor_sequencia.push((vetor_sequencia[i - 1] + vetor_sequencia[i - 2]))
        i++
    }
    return vetor_sequencia
}

function sequencia_simples(a,b){
    let min = 0 , max = 0
    if(a > b) min = b , max = a
    if(b > a) min = a , max = b

    while(min <= max){
        print(min)
        min++
    }
}

function produto_somaSucessiva(numero,quantidade){
    //caso base
    if(quantidade === 1) return numero
    
    let produto = 0
    let i = 0
    while(i < quantidade){
        produto += numero
        i++
    }
    return produto
}

function expoencial_numero(numero,quantidade){
    //caso base
    if(quantidade === 1) return numero
    
    let produto = 1
    let i = 0
    while(i < quantidade){
        produto *= numero
        i++
    }
    return produto
}


function somar(vetor){
    let index = 0
    
    let soma = 0
    while(index < vetor.length){

        soma += vetor[index]
        index++
    }
    return soma
}

function contar_vogais(frase){
    let vogais = 'a e i o u'.split(' ')

    let quantidade = 0
    let i = 0
    while(i < frase.length){
        if(tem_letra(frase[i],vogais)){
            quantidade = quantidade + 1
        }
        i++
    }
    return quantidade
}

function contar_consoantes(frase){
    let consoantes = 'b c d f g h j k l m n p q r s t v w x y z'.split(' ')

    let quantidade = 0
    let i = 0
    while(i < frase.length){
        if(tem_letra(frase[i],consoantes)){
            quantidade = quantidade + 1
        }
        i++
    }
    return quantidade
}



function vetor_n_aleatorios(a,b){
    let min = 0 , max = 0
    if(a > b) min = b , max = a
    if(b > a) min = a , max = b
    
    let vetor = []
    while(min <= max){
        vetor.push(random_number(a,b))
        min++
    }
    return vetor
}

function tem_letra(letra,vetor){
    let index = 0
    while(index < vetor.length){
        if(letra === vetor[index]){
            return true
        }
        index++
    }
    return false
}
