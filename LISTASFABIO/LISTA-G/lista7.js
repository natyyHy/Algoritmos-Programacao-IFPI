/*As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe
contrataram para desenvolver o programa que calculará os reajustes. Escreva um algoritmo que leia o
salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
o salários até R$ 280,00 (incluindo) : aumento de 20%
o salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
o salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
o salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
· o salário antes do reajuste;
· o percentual de aumento aplicado;
· o valor do aumento;
· o novo salário, após o aumento.*/

import { question } from "readline-sync";

function main(){

     const salarioinformado = parseInt(question(` Informe o salario do colaborador : `))

     let aumento;

     if(salarioinformado <= 280.00){

     aumento = 20;

     }else if(salarioinformado > 280.00 && salarioinformado <= 700.00 ){

      aumento = 15;

      }else if(salarioinformado > 700.00 && salarioinformado <= 1500.00 ){

       aumento = 10;

       }else {

        aumento = 5;
       }

const valordoaumento = calcularvalordoaumento(salarioinformado,aumento) 
const novosalario = calcularnovosalario(salarioinformado,aumento)

const mensagem = (`
===========================================
· o salário antes do reajuste : ${salarioinformado} reais
· o percentual de aumento aplicado : ${aumento}%
· o valor do aumento : ${valordoaumento} reais
· o novo salário, após o aumento : ${novosalario} reais
===========================================
`)

console.log(mensagem)





}

function calcularpercentual(valoraumento){

    return valoraumento / 100
}

function calcularnovosalario(valorsalario,valoraumento){

    return valorsalario + (valorsalario * calcularpercentual(valoraumento))
}

function calcularvalordoaumento(valorsalario,valoraumento){

    return valorsalario * calcularpercentual(valoraumento)
}

main()










