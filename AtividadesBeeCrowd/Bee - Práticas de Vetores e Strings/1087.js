import { question } from "readline-sync"

function main(){
    let [x1, y1, x2, y2] = question().split(` `).map(Number);

    while(x1 !== 0){
        
        let distancia_x = Math.abs(x1 - x2)
        let distancia_y = Math.abs(y1 - y2)
        if(distancia_x === 0 && distancia_y === 0){

            console.log('0')

        }else if(distancia_x === 0 || distancia_y === 0 || distancia_x === distancia_y){
            console.log('1')
        }else{
            console.log(`2`)
        }

        [x1, y1, x2, y2] = question().split(` `).map(Number);
    }
}
main()