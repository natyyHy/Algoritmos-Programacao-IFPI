function main(){

    let arr = [4 , 6 , 10 , 2 , 1]
    console.log(quicksort(arr))

}

main()


function quicksort(lista){
    //caso base
    if(lista.length < 2){
        return lista
    }

    let pivo = lista[0]
    let left = [] , rigth = []
    for(let i = 1;i < lista.length;i++){
        if(lista[i] < pivo){
            left.push(lista[i])
        }else{
            rigth.push(lista[i])
        }
    }
    return [... quicksort(left),pivo,...quicksort(rigth)]
}