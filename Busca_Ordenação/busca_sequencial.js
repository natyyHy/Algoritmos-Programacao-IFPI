const breve_mensagem = (valor,chave) => valor !== -1 ? console.log(`Posicao da chave -> ${chave} na lista pos.${valor}`) : console.log(`Chave ${chave} nao se encontra na lista pos.`)

function busca_sequencial(arr,chave,atributo,isObj = false){
    if(isObj){
        for(let x = 0; x < arr.length;x++){
            if(arr[x][atributo] === chave){
                return x
            }
        }
    }else{
        for(let i = 0 ; i < arr.length;i++){
            if(arr[i] === chave){
                return i
            }
        }
    }

    return -1
}

function print_indices(arr,isObj){
    if(isObj){
        for(let i = 0;i < arr.length;i++){
            let objeto = arr[i]
            console.log(objeto)
        }
    }else{
        for(let i in arr){
            console.log(`${i} - ${arr[i]}`)
        }
    }
}



function main(){

    let arr_num = [1 , 5 , 2 , 9 , 10 , 4]
    let arr_str = ['luiza', 'roberta' , 'leticia' , 'melanie']
    let obj = [
        {
        cpf: '121-533-232-23' ,
        telefone: 86988836186 , 
        nome: 'jose carlos' ,
        cidade: 'acre'

        } ,
        {
            cpf: '111-222-333-44' ,
            telefone: 8698873186 , 
            nome: 'rayssa' ,
            cidade: 'amazonia'
        }
    ]

    print_indices(arr_num)
    const ind1 = busca_sequencial(arr_num,10)
    breve_mensagem(ind1,10)

    console.log('')

    print_indices(arr_str)
    const ind2 = busca_sequencial(arr_str,'leticia')
    breve_mensagem(ind2,'leticia')

    console.log('')

    print_indices(obj,true)
    const ind3 = busca_sequencial(obj,'111-222-333-44',['cpf'],true)
    breve_mensagem(ind3,'111-222-333-44')
}

main()

