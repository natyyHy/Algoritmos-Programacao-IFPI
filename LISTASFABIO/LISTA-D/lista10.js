    //Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.

    import { question } from "readline-sync";

    function main(){

    //ler data 
    console.log(` ======= DATA =======`)
    const dia = Number(question(` Informe o dia  : `))
    const mes = Number(question(` Informe o mes  :`))
    const ano = Number(question(` Informe o ano  : `))


    //imprimir 
    if(ehValido(dia,mes,ano)){  
    console.log(` A Data esta VALIDA`)

    }else {

    console.log(` A Data esta INVALIDA `)

    }

    function ehValido (dia,mes,ano){

        //verificar ano
    
    if (ano < 1 || ano > 9999){
    
        return false
    
    }
    //verificar o intervalo de mes 
    if (mes < 1 || mes > 12 ){
    
        return false
    }
    //verificar o dia 
    const diasmeses = [ 31 , 28 , 29 , 30 ] 
    if (dia < 1 || dia > diasmeses){
    
        return false
    
    }
    
        return true
    }

    }

    main()

