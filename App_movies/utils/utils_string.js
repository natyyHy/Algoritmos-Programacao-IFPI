export function tem_posicao(vetor,posicao){
    for(let i = 0;i < vetor.length;i++){
        if(vetor[i] === posicao){
            return true
        }
    }
    return false
}