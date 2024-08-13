import { get_number, print } from "../utils/io_utils.js"
import { lerArquivo_imprimir , imprimirPalavrasCom20letras , imprimir_Palavras_e_Porcentagem_Sem_E , imprimirPalavrasSem_N_letras } from "../U-Wordplay/StringUtils.js"

function main(){

    //ENTRADA
    const imprimirMenu = "=== MENU ===\n(1)-LER ARQUIVO\n(2)-PALAVRAS COM MAIS DE 20 LETRAS\n(3)-PALAVRAS SEM A LETRA (E) E SUA PORCENTAGEM\n(4)-PALAVRAS SEM N++ LETRAS"
    print(imprimirMenu)

    const escolhaUser = get_number('ESCOLHA: ')

    //PROCESSAMENTO
    if(escolhaUser == 1){
        lerArquivo_imprimir()
    }else if(escolhaUser == 2){
        imprimirPalavrasCom20letras()
    }else if(escolhaUser == 3){
        imprimir_Palavras_e_Porcentagem_Sem_E()
    }else if(escolhaUser == 4){
        imprimirPalavrasSem_N_letras()
    }else {
        print("Encerrando programa...")
    }

}

main()
