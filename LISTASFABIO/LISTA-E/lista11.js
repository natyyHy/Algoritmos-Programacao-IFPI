//Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
//valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
//possíveis para a variável opção são 1, 2 e 3.

import { question } from "readline-sync"

function main () {


let opcao = parseInt(question("Digite a opção (1, 2 ou 3):"))
let num1 = Number(question("Digite o primeiro numero:"))
let num2 = Number(question("Digite o segundo numero:"))
let num3 = Number(question("Digite o terceiro numero:"))


if (opcao === 1) {
    console.log("O valor e: " + num1)
} else if (opcao === 2) {
    console.log("O valor e: " + num2)
} else if (opcao === 3) {
    console.log("O valor e: " + num3)
}else{

    console.log("Opcao inválida. Por favor, digite 1, 2 ou 3.")

  }
    

}

 main()






















































