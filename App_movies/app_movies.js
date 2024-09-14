import * as utils from './utils/utils_entrada_saida.js'
import {adicionar_filme , atualizar_filme, listar_filmes , remover_filme , filtrar} from './utils/utils_crud.js'
import { carregar_arquivo, salvar_arquivo } from './utils/utils_arquivos.js'

function main(){

    let escolha = -1
    let movies = carregar_arquivo('movies.txt','nome','ano','IMDB','bilheteria')

    while(escolha !== 0){
        
        menu()
        escolha = utils.get_number_min_max('\t>> selecione sua escolha: ',0,5)

        switch (escolha) {
            case 1:
                adicionar_filme(movies)            
                break;
            case 2:
                listar_filmes('FILMES',movies)
                break;
            case 3:
                movies = remover_filme(movies)
                break;
            case 4:
                atualizar_filme(movies)
                break;
            case 5:
                filtrar(movies)
                break;
            default:
                break;
        }
    }
    salvar_arquivo(movies,'movies.txt','nome','ano','IMDB','bilheteria')
    utils.print('\t>>Encerrando...')
}

main()

function menu(){
    utils.print('')
    utils.print(`\t======== ROGER MOVIES =======
  \t1 - Cadastrar filme
  \t2 - Listar filmes
  \t3 - Remover um filme da lista
  \t4 - Atualizar filme
  \t5 - Filtrar filmes
    
  \t0 - Salvar e Sair`)
  utils.print('')
}