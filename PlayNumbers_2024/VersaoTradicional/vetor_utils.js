//funções específicas para manipulação de vetores, para operações como: adicionar,remover, map, filter, mostrar vetor

import { gerar_numero_aleatorio, obter_numero_min_max } from "./utils.js"
import {readFileSync} from "fs"


export function gerar_vetor(tamanho,min,max){
    let novo_vetor = []
    for(let i = 0; i < tamanho;i++){
        novo_vetor.push(gerar_numero_aleatorio(min,max))
    }

    return novo_vetor
}

export function mostrar_itens_vetor(vetor,titulo){
        console.log(`\n>>>>>> ${titulo} <<<<<<\n`)
        for(let i of vetor){
            console.log(">>> "+ i)
        }
    
}

export function mostrar_itens_e_posicao_vetor(vetor,titulo){
    console.log(`\n>>>>>> ${titulo} <<<<<<\n`)
    for(let i = 0 ; i < vetor.length;i++){
        console.log(`>>> ${vetor[i]} (POSICAO : ${i})`)
    }

}

export function gerar_vetor_valor_informado(tamanho,min,max){
    let novo_vetor = []
    for(let i = 1;i <= tamanho;i++){
        novo_vetor.push(obter_numero_min_max(`VALOR ${i}: `,min,max))
    }

    return novo_vetor
}

export function gerar_vetor_de_arquivoInformado(nome_arquivo){
    
    const dados = readFileSync(nome_arquivo , "utf-8")
    const linhas = dados.split(' ')
    const valores = mapear(linhas,eh_number)

    let novo_vetor = []
    for(let i = 0;i < valores.length;i++){
        novo_vetor.push(valores[i])
    }

    return novo_vetor

}

export function mapear(vetor,tranformadora){
    let novo_vetor = []
    for(let i = 0; i < vetor.length;i++){
        novo_vetor.push(tranformadora(vetor[i]))
    }

    return novo_vetor
}

export function filtrar(vetor,criterio){
    let novo_vetor = []
    for(let i of vetor){
        if(criterio(i)){
            novo_vetor.push(i)
        }
    }
    return novo_vetor
}


export function calcular_quantidade_vetor(vetor){
    let quantidade = vetor.length
    return quantidade
}

export function calcular_somatorio_vetor(vetor){
    let somatorio = 0
    for(let i of vetor){
        somatorio += i
    }
    return somatorio
}

export function calcular_media_vetor(vetor){
    let media = 0 ; let somatorio = calcular_somatorio_vetor(vetor) , quantidade = calcular_quantidade_vetor(vetor)
    return media = (somatorio / quantidade).toFixed(1)
}


// TRANSFORMADORES -------------------------------------------------------------------

export function tem_number(vetor,elemento){
    for(let i of vetor){
        if(i === elemento) return true
    }

    return false
}

export function tem_posicao_number(vetor,posicao){
    for(let i = 0;i < vetor.length;i++){
        if(i === posicao) return true
    }
    return false
}

export function eh_number(elemento){
    return Number(elemento)
}

export function eh_number_positivo(valor){
    return valor > 0
}

export function eh_number_negativo(valor){
    return valor < 0
}

export function multiplicar(){
    
}

export function menor(valor1,valor2){
    return valor1 < valor2 ? valor1 : valor2
}


// FUNÇOES CLOSURES ----------------------------------------------------------------------

export function gerar_multiplicacao_com(valor){
    function interna(numero){
        return  numero * valor
        }
    
    return interna
}

export function gerar_expoenciacao_com(valor){
    function interna(numero){
        return numero **valor
    }

    return interna
}

export function gerar_substituicao(min,max){
    function interna(valor){
        const num_aleatorio = gerar_numero_aleatorio(min,max)
        return valor = num_aleatorio
    }

    return interna
}

export function gerar_compararNumeros() {
    function interna(valor){
        
    }
    return interna
  }


export function gerar_remover_item(valores){
    function interna(valor){
        for(let i = 0 ; i < valores.length;i++){
            if(valor === valores[i]){
                return false
            }
        }
        return true
    }
    return interna
}

export function gerar_remover_posicao(valores){
    function interna(valor){
        for(let i = 0 ; i < valores.length;i++){
            if(valor === valores[i]){
                return false
            }
        }
        return true
    }
    return interna
}

export function ordenar_vetor_ordem_crescente(vetor){

    let novo_vetor = []
    let atual = vetor[0]

    for(let i = 1;i < vetor.length;i++){
        atual = menor(atual,vetor[i])
        novo_vetor.push(atual)
    }
    return novo_vetor
}
