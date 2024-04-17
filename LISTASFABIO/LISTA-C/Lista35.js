    ///Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.: número = 9534 ; soma = 9+5+3+4 = 21.

    import { question } from "readline-sync";

    console.log(` ==== SOMA DOS ELEMENTOS DE UM NUMERO ====`)

    //entrada

    const numeroInteiro = parseInt(question(` Informe o numero inteiro de 4 digitos : `))

    //processamento 
    let msg = ''

if ((/^\d{4}$/).test(numeroInteiro)) {

    const elementos = numeroInteiro.toString().split('')

    // Calcula a soma dos elementos 
    let soma = 0;
        for (const elemento of elementos) {
        soma += parseInt(elemento);

     } 
    

     msg = `
     ------------------------------------
     NUMERO DE ELEMENTOS --> ${elementos.join(` , `)}
     ------------------------------------
        SOMA --> ${soma}

        `
            }
else 
    {

        console.log(` DIGITE UM NUMERO DE 4 DIGITOS VALIDOS "`)

    }



    console.log(msg)



