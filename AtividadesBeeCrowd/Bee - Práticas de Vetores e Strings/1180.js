import { question } from 'readline-sync'

function main(){

    let tamanho = 0
    do {
        tamanho = get_number('')
    }while(tamanho <= 1 || tamanho >= 1000)
    
    const valores = question().split(' ')

    if(valores.length === tamanho){
        let valores_number = mapear(valores,elemt => Number(elemt))

            const menor_valor = encontrar_menorValor_vetor(valores_number)
            const posicao_valor = encontrar_posicaoValor_vetor(menor_valor,valores_number)
            console.log(`Menor valor: ${menor_valor}`)
            console.log(`Posicao: ${posicao_valor}`)
        
    }

}

main()

function encontrar_posicaoValor_vetor(valor,vetor){
    
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === valor){
            return i
        }
    }
    return -1
}

function encontrar_menorValor_vetor(vetor){
    let menor = Infinity
    
    for(let i = 0; i < vetor.length;i++){
        if( vetor[i] < menor){
            menor = vetor[i]
        }
    }
    return menor
}

function mapear(vetor,transformacao){
    let novo_vetor = []
    for(let i of vetor){
        novo_vetor.push(transformacao(i))
    }
    return novo_vetor
}

function get_number(mensagem){
    return Number(question(mensagem))
}

function verificar_numero_repetido(vetor){
    for(let i = 0; i < vetor.length;i++){
        let valor_atual = vetor[i]
        for(let j = 0; j < vetor.length;j++){
            if(i !== j){
                if(valor_atual === vetor[j]) return true
            }
        }
    }
    return false
}