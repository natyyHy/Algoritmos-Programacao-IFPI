//Ler arquivos
import { calcularPorcentagem, get_number, obter_texto, print } from "../utils/io_utils.js"
import {readFileSync} from "fs"

const dados = readFileSync('words.txt' , "utf-8")
const linhas = dados.split("\n")

//---------------------------------------------------------------//
export function lerArquivo_imprimir(){
    for(let linha of linhas){
        print(linha)
    }
}

//---------------------------------------------------------------//

export function imprimirPalavrasCom20letras(){

    for(let linha of linhas){
        if(linha.length >= 20){
            print(linha)
        }
    }
}

//---------------------------------------------------------------//
export function imprimir_Palavras_e_Porcentagem_Sem_E(){

    let qtd_palavrasSemE = 0
    for(let i = 0 ; i < linhas.length - 1;i++){
        
        if(verificarSeHouverLetra(linhas[i],"e") === true){
            qtd_palavrasSemE++
            print("PALAVRA EM (E) - " + linhas[i])
        }
        
    }
    const porcentagemDepalavrasSem_E = (calcularPorcentagem(qtd_palavrasSemE,linhas.length - 1)).toFixed(0)
    return print(`=======================\nQUANTIDADE TOTAL SEM (E): ${qtd_palavrasSemE}\nQUANTIDAE TOTAL: ${linhas.length - 1}\nPORCENTAGEM DE PALAVRAS SEM (E): ${porcentagemDepalavrasSem_E}%`)
}

//---------------------------------------------------------------//
export function imprimirPalavrasSem_N_letras(){

    const qtdDeLetrasProibidas = get_number('QUANTIDADES DE LETRAS PROIBIDAS: ')

    //pedir serie de letras proibidas
    let serieLetrasProibidas = obterSerieDeLetras(qtdDeLetrasProibidas)

    //palavras sem a seguinte series de letras
    for(let i = 0 ; i < linhas.length - 1;i++){
        if(verificarPalavraSemSerieDeLetras(linhas[i],serieLetrasProibidas)){
            print(`PALAVRA SEM LETRAS ${serieLetrasProibidas} --> ${linhas[i]}`)
        }
    }
}

//---------------------------------------------------------------//
export function verificarSeHouverLetra(palavra,letra){
    
    //se houver a letra, retorne falso para que nao imprimar ela, sempre vai imprimir true as que LETRAS NAO FOREM IGUAL A (E)
    for(let i = 0 ; i < palavra.length ; i++){
        if(palavra[i] === letra){
            return false
        }
    }

    return true
    
}

//---------------------------------------------------------------//
export function obterSerieDeLetras(qtdDeLetras){

    let arrayLetras = []
    for(let i = 1; i <= qtdDeLetras;i++){

        const letra = obter_texto(`DIGITE A LETRA(${i}): `)
        arrayLetras.push(letra)
    }

    return arrayLetras
}

export function verificarPalavraSemSerieDeLetras(palavra,letrasProibidasArray){
    for(let i = 0;i < palavra.length; i++){
        for(let x = 0; x < letrasProibidasArray.length; x++){
            let letraProibida = letrasProibidasArray[x]
            if(palavra[i] === letraProibida){
                return false
            }
        }
    }

    return true
}