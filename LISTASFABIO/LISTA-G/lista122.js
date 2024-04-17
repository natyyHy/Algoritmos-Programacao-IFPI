import { question } from "readline-sync";

function main() {
  const litros = parseInt(question(`Informe o numero de litros vendidos : `));
  const tipocombustivel = question(
    `Informe a letra do tipo do combustivel (A-álcool, G-gasolina) : `
  );

  let litroAlcool = 0;
  let litroGasolina = 0;
  let preçoAlcool;
  let preçoGasolina;

  if (tipocombustivel.toUpperCase() === "A") {
    litroAlcool = litros;
    preçoAlcool = litroAlcool * 1.90;
    console.log(`TOTAL A PAGAR // ALCOOL : ${preçoAlcool.toFixed(2)} reais`);
  } else if (tipocombustivel.toUpperCase() === "G") {
    litroGasolina = litros;
    preçoGasolina = litroGasolina * 2.50;
    console.log(`TOTAL A PAGAR // GASOLINA : ${preçoGasolina.toFixed(2)} reais`);
  }

  // Desconto alcool
  let valorcomdesconto;

  if (litroAlcool <= 20) {
    valorcomdesconto = calcularDesconto(preçoAlcool, 3);
    console.log(
      `LITROS : ${litroAlcool} // COM DESCONTO 3% : ${valorcomdesconto.toFixed(2)} reais`
    );
  } else if (litroAlcool > 20) {
    valorcomdesconto = calcularDesconto(preçoAlcool, 5);
    console.log(
      `LITROS : ${litroAlcool} // COM DESCONTO 5% : ${valorcomdesconto.toFixed(2)} reais`
    );
  }

  // Desconto Gasolina
  if (litroGasolina <= 20) {
    valorcomdesconto = calcularDesconto(preçoGasolina, 4);
    console.log(
      `LITROS : ${litroGasolina} // COM DESCONTO 4% : ${valorcomdesconto.toFixed(2)} reais`
    );
  } else if (litroGasolina > 20) {
    valorcomdesconto = calcularDesconto(preçoGasolina, 6);
    console.log(
      `LITROS : ${litroGasolina} // COM DESCONTO DE 6% : ${valorcomdesconto.toFixed(2)} reais`
    );
  }
}

main();

function calcularDesconto(valor, percentualDesconto) {
  return valor - valor * (percentualDesconto / 100);
}
