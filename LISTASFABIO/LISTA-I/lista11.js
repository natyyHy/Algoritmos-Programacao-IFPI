/*Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por
matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:

Média Final = (2 * nota1) + (3 * nota2) + (5 * nota3)

10

Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o
aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total
de alunos da turma.*/

import { get_number, print } from "./utils/io_utils.js"
 
function main(){

    let total_de_aprovados = 0
    let total_de_reprovados = 0
    let total_de_alunos = 0


    while(true){ 

    let matrícula = get_number(`Informe o numero da MATRICULA (0 para saida): `)

    if(matrícula === 0 ){

        break

    }

    let nota1 = get_number(`Informe a NOTA 1 do aluno : `)
    let nota2 = get_number(`Informe a NOTA 2 do aluno : `)
    let nota3 = get_number(`Informe a NOTA 3 do aluno : `)

    //CALCULAR MEDIA FINAL 
    let media_final = ((2 * nota1 ) + (3 * nota2 ) + ( 5 * nota3 )) / 10
    
    if(media_final >= 7 ){

        print(`SITUAÇAO DO ALUNO : APROVADO ! `)

    }else{

        print(`SITUAÇAO DO ALUNO : REPROVADO ! `)
    }

    if(media_final >= 7 ){

        total_de_aprovados++
        
    }else{

        total_de_reprovados++

    }

        total_de_alunos++

    }

print(` TOTAL DE ALUNOS APROVADOS : ${total_de_aprovados}`)
print(` TOTAL DE ALUNOS REPROVADOS : ${total_de_reprovados}`)
print(`TOTAL DE ALUNOS : ${total_de_alunos}`)
    
}

main()