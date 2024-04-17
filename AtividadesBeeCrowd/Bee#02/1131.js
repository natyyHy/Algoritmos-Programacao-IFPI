import { question } from "readline-sync"
import { get_number_inteiro } from "./utils/io_utils.js"

function main(){

let pergunta = 1

    let quantidade_greanais = 0
    let numero_vitorias_gremio = 0
    let numero_vitorias_inter = 0
    let numero_empates = 0
    let mensagem_vencedor = ``

while(pergunta === 1 ){
    

    const valores = question(``).split(" ")

    const ponto_inter = parseInt(valores[0])
    const ponto_gremio = parseInt(valores[1])

    if(ponto_inter > ponto_gremio){

        numero_vitorias_inter++
        mensagem_vencedor = `Inter venceu mais`
    }

    if(ponto_inter < ponto_gremio){

        numero_vitorias_gremio++
        mensagem_vencedor = `Gremio venceu mais`
    }

    if(ponto_gremio === ponto_inter){

        numero_empates++
        mensagem_vencedor = `Nao houve vencedor`
    }


    console.log(`Novo grenal (1-sim 2-nao)`)
    pergunta = parseInt(question(``))

    
    quantidade_greanais++


}

const resultado = 
(`${quantidade_greanais} grenais
Inter:${numero_vitorias_inter}
Gremio:${numero_vitorias_gremio}
Empates:${numero_empates}
${mensagem_vencedor}`)

console.log(resultado)

}

main()