import { question } from "readline-sync"

function main(){

let valor_N = parseInt(question(``))
let contagem = 1

while(valor_N >= 1){

    let linha = ""
    linha += contagem + " "
    linha += contagem + 1 + " "
    linha += contagem + 2 + " "
    linha += "PUM"
    console.log(linha)

    //atualiza numero para a proxima linha
    contagem += 4

    valor_N--
}

}

main()
