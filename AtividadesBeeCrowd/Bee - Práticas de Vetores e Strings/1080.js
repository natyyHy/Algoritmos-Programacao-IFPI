import { question } from "readline-sync";

function main() {
    let tamanho = get_number()

    const valores = question().split(' ');

    let valores_number = mapear(valores, elemt => Number(elemt));

    const menor_valor = encontrar_menorValor_vetor(valores_number);
    const posicao_valor = encontrar_posicaoValor_vetor(menor_valor, valores_number);
    console.log(`Menor valor: ${menor_valor}`);
    console.log(`Posicao: ${posicao_valor}`);

}

main()



function encontrar_posicaoValor_vetor(valor, vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === valor) {
            return i;  // Retorna a posição assim que encontra o menor valor
        }
    }
    return -1;  // Caso não encontre o valor (o que não deve acontecer)
}

function encontrar_menorValor_vetor(vetor) {
    let menor = Infinity;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }
    return menor;
}

function mapear(vetor, transformacao) {
    let novo_vetor = []
    for (let i of vetor) {
        novo_vetor.push(transformacao(i))
    }
    return novo_vetor;
}

function get_number() {
    return Number(question())
}