export function bubbleSort(lista,ordem){
    let qtd = lista.length - 1

    while(qtd > 0){
        let condicao = true
        for(let i = 0; i < lista.length - 1;i++){
            if(ordem === 1){
                if(lista[i] > lista[i+1]){

                    //gravar valor primeiro antes de ser sobrescrito
                    let valor = lista[i]
    
                    lista[i] = lista[i+1]
                    lista[i+1] = valor
    
                    condicao = false
                }
            }else{
                if(lista[i] < lista[i+1]){

                    let valor = lista[i]
    
                    lista[i] = lista[i+1]
                    lista[i+1] = valor
    
                    condicao = false
                }
            }
        }
        if(condicao){
            break;
        }
        qtd--
    }
}