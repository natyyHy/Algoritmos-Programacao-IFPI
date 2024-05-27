import { question } from "readline-sync"

function main(){

    const horarioMilitar = question("HORARIO MILITAR: ")
    const horarioAmPm = question("HORARIO AM/PM: ")

    const resultado = 
(`-------- MILITAR --------
HORARIO INFORMADO: ${horarioMilitar}
CONVERTIDO PARA AMPM: ${converterHorarioMilitarPARAampm(horarioMilitar)}
---------- AMPM ----------
HORARIO INFORMADO: ${horarioAmPm}
CONVERTIDO PARA MILITAR: ${converterHorarioAmPmPARAmilitar(horarioAmPm)}`)

console.log(resultado)

}

main()


function converterHorarioMilitarPARAampm(horario){

    let horarioArray = horario.split(":").map(Number)

    let horas = horarioArray[0]
    let minutos = horarioArray[1]
    let segundos = horarioArray[2]
    
    let periodo = horas >= 12 ? "PM" : "AM"

    horas = horas % 12

    let horarioEmAmPm = `${horas}:${minutos}:${segundos} ${periodo}`

        return horarioEmAmPm
}

function converterHorarioAmPmPARAmilitar(horario){

    let [timePart, periodo] = horario.split(' ')  //separar o horario do periodo AMPM
    let horarioArray = timePart.split(":").map(Number)

    let horas = horarioArray[0]
    let minutos = horarioArray[1]
    let segundos = horarioArray[2]

    if (periodo === "AM" && horas === 12) {
        horas = 0
    } else if (periodo === "PM" && horas !== 12) {
        horas += 12  // É o mesmo que horas = horas + 12 ex: 2 = 2 + 12 --> 14 horas
    }

    horas = formatarNumeroDoisDigitos(horas)
    minutos = formatarNumeroDoisDigitos(minutos)
    segundos = formatarNumeroDoisDigitos(segundos)

    let horarioEmMilitar = `${horas}:${minutos}:${segundos}`
    return horarioEmMilitar
}

function formatarNumeroDoisDigitos(number){   //se hora for de manha (00:00 meianoite) , converter para dois digitos (ex: 01:21 , 05:43)
    return number < 10 ? "0"+number : number
}
