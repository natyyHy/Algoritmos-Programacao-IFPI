/*Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave
pode levantar vôo ou não. Considere os seguintes critérios:
· O peso de decolagem da aeronave é sempre igual a 500.000 kg;
· O peso de decolagem é composto pela soma do peso do combustível, do peso da carga, do peso dos
passageiros;
· O peso do combustível é a quantidade do combustível (em litros) multiplicada pelo fator 1.5kg/l;
· A quantidade mínima de combustível para que a aeronave decole é de 10000 l;
· O peso da carga é o somatório do peso dos “containers” de cargas em quilogramas.
· O peso dos passageiros é o somatório do peso de cada passageiro e de todos os volumes da sua
bagagem; cada passageiro tem o peso estimado de 70kg e cada volume de bagagem tem o peso
estimado de 10kg.
O algoritmo deve ler o números de containers e a seguir ler o peso de cada container. A seguir devem
ser lidos os dados dos passageiros (número do bilhete, quantidade de bagagens) até que o número do
bilhete seja igual a 0. Devem ser mostrados, a quantidade de passageiros, a quantidade total de volume
de bagagem, o peso dos passageiros, o peso da carga, a quantidade possível de combustível, e uma
mensagem indicando a liberação da decolagem ou não.*/

import { get_number, print } from "./utils/io_utils.js"

function main(){ 

print(`==================================================`)
print(`              AEROPORTO DO PIAUI                `  )
print(`   BEM VINDO A : VERIFICACAO DE DECOLAGEM !       `)
print(`==================================================`)

// INICIAR AS VARIAVEIS DE TOTAL PASSEIRO E BAGAGENS
let total_passageiros = 0;
let total_bagagens = 0;


//PEDIR ENTRADA QUANTIDADE DE CONTAINERS
print(` ------ ANALISE PESO DA CARGA ------`)
let quantidade_containers = get_number(` Informe a Quantidade de Containers : `)

//SOMATORIO PESO DOS CONTAINERS
const somatorio_peso_containers = calcular_somatorio_peso_containers(quantidade_containers)
const peso_da_carga = somatorio_peso_containers

print(`==================================================`)
print(`PESO DA CARGA : ${peso_da_carga}`)

//CALCULAR PESO DOS PASSAGEIROS

while(true){

    print(` ------ ANALISE PESO DE PASSAGEIROS ------`)
    const numero_de_bilhetes = get_number(`Informe o NUMERO DE BILHETES (0 para saida): `)

    if(numero_de_bilhetes > 0 ){

        let { passageiros, bagagens } = calcular_peso_passageiros(numero_de_bilhetes)
            total_passageiros += passageiros
            total_bagagens += bagagens
            

    }else if(numero_de_bilhetes === 0 ){

        break;

    }else{

        print(` ERRO DE ENTRADA!! D:`)
        break;
    }

}

//MOSTRAR RESULTADO E PESO DOS PASSAGEIROS

const peso_dos_passageiros = total_passageiros + total_bagagens
print(`==================================================`)
print(`QUANTIDADE TOTAL DE PASSAGEIROS : ${total_passageiros}`)
print(`QUANTIDADE TOTAL DE VOLUME DE BAGAGEM : ${total_bagagens}`)
print(` PESO DOS PASSAGEIROS : ${peso_dos_passageiros}`)

//PESO DA CARGA TOTAL 

const peso_cargaTotal = peso_da_carga + peso_dos_passageiros


//CALCULAR QUANTIDADE DE COMBUSTIVEL 

const quantidade_de_combustivel = calcular_qtd_combustivel(peso_cargaTotal)

print(` ------ ANALISE QUANTIDADE DE COMBUSTIVEL ------`)
print(`QUANTIDADE POSSIVEL DE COMBUSTIVEL : ${quantidade_de_combustivel}`)


//// VERIFICAR DECOLAGEM SIM OU NAO

if(quantidade_de_combustivel >= 10000 ){

    print(`=======================`)
    print(` DECOLAGEM DA AERONAVE `)
    print(` SITUACAO : PERMITIDA!` )
    print(`=======================`)

}else {

    print(`=======================`)
    print(` DECOLAGEM DA AERONAVE `)
    print(` SITUACAO : NAO AUTORIZADA !` )
    print(`=======================`)

}

 

////FUNÇOES////

//calcular PESO CONTAINERS
function calcular_somatorio_peso_containers(qtd_containers){ 
    let numero_containers = qtd_containers
    let soma_dos_pesos_containers = 0
    while(qtd_containers > 0 ){

     let peso_containers = get_number(`Informe o peso(KG) do Containers ${numero_containers} : KG `)
     numero_containers--
     qtd_containers--
     soma_dos_pesos_containers += peso_containers

      }

      return soma_dos_pesos_containers
}

function calcular_peso_passageiros(num_bilhetes){

    let somatorio_peso_passageiro = num_bilhetes * 70
    let num_bagagens = get_number(`Informe a quantidade de bagagens para os ${num_bilhetes} passageiros: `)
    let somatorio_peso_bagagens = num_bilhetes * num_bagagens * 10

    return {
        passageiros : somatorio_peso_passageiro,
        bagagens : somatorio_peso_bagagens
    }

}

function calcular_qtd_combustivel(peso_cargaTotal){

    let peso_combustivel = peso_cargaTotal * 1.5

    return peso_combustivel

}


}
main()