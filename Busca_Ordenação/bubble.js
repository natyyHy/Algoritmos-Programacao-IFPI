let lista = [17,68,99,10,23,41,41,26] // -1 = 7

/* quicksort (recursiva)
select/ insert
bubble(elevar o maior valor)*/

function main(){

    console.log(bubble(lista))

}

main()

//bubble

function bubble(colecao){
    let ultima_pos_nOrdenada = colecao.length - 1 // 6
    let qtd = colecao.length - 1 // 6

    while(qtd > 0){
        let condicao = true
        for(let i = 0; i < ultima_pos_nOrdenada;i++){
            if(colecao[i] > colecao[i+1]){ // 1 , 0
                aux = colecao[i] // 1
                colecao[i] = colecao[i+1] // 1 = 0
                colecao[i+1] = aux // 0 = 1
                condicao = false
            }
        }
        if(condicao){
            break;
        }
        qtd--
    }

}

let ordem_asc = []


function filter(vetor,criterio){
    let novo_vetor = []
    for(let i = 0; i < vetor.length;i++){
        novo_vetor.push(criterio(vetor[i]))
    }
    return novo_vetor
}

console.log(lista)