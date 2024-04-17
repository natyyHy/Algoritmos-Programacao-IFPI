
import { get_number, print } from "./utils/io_utils.js";

function main() {
    let numero_N = get_number("NUMERO N: ");
    let S = "";

    for (let i = 1; i <= numero_N; i++) {
        if(i === numero_N){

            S += ` ${1}/${i}`
        }
        else if(i >= 1 && i % 2 !== 0){

            S += ` ${1}/${i} - `
        }else{

            S += ` ${1}/${i} + `
        }
    }

    print(S);
}
main();