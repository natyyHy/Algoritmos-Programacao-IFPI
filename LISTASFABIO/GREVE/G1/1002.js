import { question } from "readline-sync"

function main(){

//entrada
const raio = get_number_float(``)

//processo
const areaCirculo = calcular_area_circulo(raio)

//saida
console.log(`A=${areaCirculo.toFixed(4)}`)

}

main()

function get_number_float(mensagem){

    return parseFloat(question(mensagem))
}

function calcular_area_circulo(raio){

    const area = 3.14159 * raio**2
    return area
}