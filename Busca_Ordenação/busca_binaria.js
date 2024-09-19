const breve_mensagem = (valor,chave) => valor !== -1 ? console.log(`Posicao da chave -> ${chave} na lista pos.${valor}`) : console.log(`Chave ${chave} nao se encontra na lista pos.`)

function main(){

    //busca binaria requer a lista ordenada
    let lista = [3 , 10 , 1 , 7 , 9]
    let lista_ordenada = quicksort(lista)
    let indice = busca_binaria(lista_ordenada,10)
    console.log(indice)
    breve_mensagem(indice,1)
    

}

main()

function busca_binaria(lista,chave){
    let inicio = 0
    
    let final = lista.length - 1

    while(inicio <= final){

        let meio = Math.floor((inicio + final) / 2)

        if(lista[meio] === chave){
            return meio
        }
        
        if(lista[meio] > chave){
            final = meio - 1
        }
        else{
            inicio = meio + 1
        }
    }

    return -1
}


function quicksort(lista){
    if(lista.length < 2){
        return lista
    }
    
    let menor = [] , maior = []
    let pivo = lista[0]
    for(let i = 1; i < lista.length;i++){
        if(lista[i] < pivo){
            menor.push(lista[i])
        }else{
            maior.push(lista[i])
        }
    }
    return [...quicksort(menor),pivo,...quicksort(maior)]
}


