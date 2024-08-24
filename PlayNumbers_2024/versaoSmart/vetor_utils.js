
import { gerar_numero_aleatorio, obter_numero_min_max, print } from "./utils.js"
import {readFileSync} from 'fs'


// MANIPULACAO DE VETOR ------------------------------------------------------

export function gerar_vetor_valores_aleatorios(tamanho,min,max){

    let novo_vetor = []
    let numeros_ja_sorteados = []

    while(novo_vetor.length !== tamanho){
        
        const numero_sorteado = gerar_numero_aleatorio(min,max)
        if(tem_number(novo_vetor, numero_sorteado) === false){
            novo_vetor.push(numero_sorteado)
            numeros_ja_sorteados.push(numero_sorteado)
        }
    
    }
    
    return novo_vetor
}

export function gerar_vetor_valor_informado(tamanho,min,max){
    
        let novo_vetor = []
        for(let i = 1;i <= tamanho;i++){
            novo_vetor.push(obter_numero_min_max(`VALOR ${i}: `,min,max))
        }
    
        return novo_vetor
    
}

export function gerar_vetor_de_arquivoInformado(nome_arquivo){
    
    const dados = readFileSync(nome_arquivo , 'utf-8')
    const linhas = dados.split(' ')
    const valores = mapear(linhas,valor => Number(valor))

    return valores

}

export function identificar_posicao_vetor(vetor,valor){
    let posicao = 0
    if(tem_number(vetor,valor)){
        for(let i = 0;i < vetor.length;i++){
            if(vetor[i] === valor) posicao = i
        }
    }
    return posicao
}

// ------------------------------------------------------------------------
export function mostrar_itens(vetor,titulo){
    print(`>>> ${titulo} <<<`)
    for(let i of vetor){
        print(`>>> ${i}`)
    }
    print(`>>> --------- <<<`)
}

export function mostrar_itens_e_posicao_vetor(vetor,titulo){
    console.log(`\n>>>>>> ${titulo} <<<<<<\n`)
    for(let i = 0 ; i < vetor.length;i++){
        console.log(`>>> ${vetor[i]} (POSICAO : ${i})`)
    }

}

export function inverter_vetor(vetor){
    let novo_vetor = []
    for(let i = vetor.length - 1;i >= 0; i--){
        novo_vetor.push(vetor[i])
    }
    return novo_vetor
}


// MAP - FILTER - REDUCE -----------------------------------------

export function filter(vetor,criterio){
    let novo_vetor = []
    for(let i of vetor){
        if(criterio(i)){
            novo_vetor.push(i)
        }
    }
    return novo_vetor
}

export function mapear(vetor,transformacao){
    let novo_vetor = []
    for(let i of vetor){
        novo_vetor.push(transformacao(i))
    }
    return novo_vetor
}

export function reduzir(vetor,funcao,valor_inicial){
    let acumalador = valor_inicial
    for(let i = 1; i < vetor.length ; i++){
        acumalador = funcao(acumalador,vetor[i])
    }
    return acumalador
}

// FUNÇOES CLOSURES ----------------------------------------------

export function gerar_se_tem_number(vetor){
    function interna(valor){
        for(let i of vetor){
            return i === valor
        }
        return false
    }
    return interna
}

export const somar = (param1 , param2) => param1 + param2

export const menor = (param1 , param2) => param1 < param2 ? param1 : param2

export const maior = (param1 , param2) => param1 > param2 ? param1 : param2

export const eh_numero_positivo = (param1) => param1 > 0

export const eh_numero_negativo = (param1) => param1 < 0

export const gerar_multiplicacao_com = (param1) => (valor) => param1 * valor

export const gerar_elevar_com = (param1) => (valor) => valor ** param1

export const gerar_numero_nao_igual_a = (param1) => (valor) => (param1 !== valor)

export const gerar_reducao_fracao = (param1 , param2) => (param3) => (param1 * param3) / param2


// FUNCOES BOOLEANAS

export function tem_number(vetor,numero){
    for(let i of vetor){
        if(i === numero) return true
    }
    return false
}

export function tem_posicao_number(vetor,posicao){
    for(let i = 0;i < vetor.length;i++){
        if(i === posicao) return true
    }
    return false
}