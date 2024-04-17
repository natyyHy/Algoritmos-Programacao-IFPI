import { question } from "readline-sync";

function main() {
    const N = parseInt(question(``));
    
    let inicio = 1
    while(inicio <= N){

        const quadrado = inicio * inicio
        const cubo = inicio * inicio * inicio
        console.log(`${inicio} ${quadrado} ${cubo}`)
        console.log(`${inicio} ${quadrado + 1} ${cubo + 1}`)
        inicio++
    }
}

main();
