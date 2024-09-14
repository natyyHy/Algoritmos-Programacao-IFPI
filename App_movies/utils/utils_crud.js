import * as utils from './utils_entrada_saida.js'
import { bubbleSort } from './utils_ordenar.js'
import { filter, get_names_movies, mapear, reduce, show_vetor, show_vetor1_vetor2 } from './utils_vetor.js'

export function adicionar_filme(movies){
    utils.print('')
    utils.print('\t ----- Cadastrar filme -----')
    utils.print('')
    let novo_movie = {}
    novo_movie['nome'] = utils.get_text('\t>> Nome do filme: ')
    novo_movie['ano'] = utils.get_number_positive('\t>> Ano de lancamento: ')
    novo_movie['IMDB'] = utils.get_number_min_max('\t>> Nota da IMDB (estrelas): ', 1,10)
    novo_movie['bilheteria'] = utils.get_number_positive('\t>> Arrecadacao: ')
    movies.push(novo_movie)
    utils.print('')
    utils.print('\t>> Filme adiocionado com Sucesso')
    utils.print('')
}

export function listar_filmes(titulo,movies){
    utils.print('')
    utils.print('\t----- ' + titulo + ' -----')
    utils.print('')
    if(movies.length === 0) return utils.print(`\t>> Nao ha nenhum filme cadastrado`)
    for(let i = 0; i < movies.length ;i++){
        const filme = movies[i]
        utils.print(`\tFilme ${i+1} - Nome: ${filme['nome']} | Ano de lancamento: ${filme['ano']} | Nota na IMDB: ${filme['IMDB']} | Arrecadacao: ${filme['bilheteria']}`)
    }
    utils.print('')
}

export function atualizar_filme(movies){
    listar_filmes('ESCOLHA UM FILME PARA ATUALIZAR',movies)
    let escolha = utils.get_number_min_max(`\t>> opcao : `,1,movies.length)
    let novo = {}
    for(let i = 0; i < movies.length;i++){
        if(i+1 === escolha){
            novo['nome'] = utils.get_text('\t>> Novo Nome do filme: ')
            novo['ano'] = utils.get_number_positive('\t>> Novo Ano de lancamento: ')
            novo['IMDB'] = utils.get_number_min_max('\t>> Nova Nota da IMDB (estrelas): ', 1, 10)
            novo['bilheteria'] = utils.get_number_positive('\t>> Nova Arrecadacao: ')

            movies[escolha - 1] = novo
        }
    }
}

export function remover_filme(movies){
    listar_filmes('ESCOLHA UM FILME PARA REMOVER',movies)
    let escolha = utils.get_number_min_max(`\t>> selecione o numero do filme a Remover: `,1,movies.length)
    let novo_movies = []
    for(let i = 0 ; i < movies.length; i++){
        if(i + 1 !== escolha){
            novo_movies.push(movies[i])
        }
    }
    utils.print('')
    utils.print('\t>> Filme removido com Sucesso')
    utils.print('')
    return novo_movies
}

export function filtrar(movies){
    //totais de filmes .reduce
    //os melhores filmes baseado na IMDB .filter
    //os mais vendidos .filter
    //media das notas imdb .reduce
    utils.print('')
    utils.print('\t(1)-Nomes em ordem Crecente ou decrecente\n\t(2)-Melhores filmes (IMDB)\n\t(3)-Mais Vendidos (Bilheria)\n\t(4)-Media das notas (IMDB)')
    utils.print('')
    let escolha = utils.get_number_min_max(`\t>> selecione: `,1,4)
    
    switch (escolha) {
        case 1:
            let arr_nomes = filter(movies,'nome',valor => valor.length> 0 ? true : false)
            utils.print('')
            utils.print('\t--- OPCOES ---\n')
            utils.print('\t(1)Nomes em Crescente\n\t(2)Nomes em Decrescente')
            let escolha = utils.get_number_min_max('\topcao: ',1,2)
            utils.print('')
            if(escolha === 1){
                bubbleSort(arr_nomes,1)
                show_vetor('\t--- NOMES CRESCENTE ---',arr_nomes)
            }else{
                bubbleSort(arr_nomes,2)
                show_vetor('\t--- NOMES DECRESCENTE ---',arr_nomes)
            } 

            break;

        case 2:
            //AQUI ELE ESTA EM STRING , LOGO N FUNCIONARIA SEGUNDO MEUS TESTES
            let arr_IMDB = filter(movies,'IMDB',valor => valor.length> 0 ? true : false)

            //AQUI ESTA EM NUMBER,VERSAO CORRETA
            let arr_IMDB_em_Number = mapear(arr_IMDB,elem => Number(elem))

            //ORDENAR EM BUBBLESORT
            bubbleSort(arr_IMDB_em_Number,2)

            //PEGAR NOMES DOS TOP FILMES BASEADO EM MELHORES IMDB
            let nomes_baseado_imdb = get_names_movies(movies,'IMDB','nome',arr_IMDB_em_Number)

            utils.print('')
            show_vetor1_vetor2('\t---- MELHORES FILMES ----',nomes_baseado_imdb,arr_IMDB_em_Number,'estrelas')
            utils.print('')
            break;
    
        case 3:

            let arr_bilheteria = filter(movies,'bilheteria',valor => valor.length> 0 ? true : false)
            let arr_bilheteria_em_Number = mapear(arr_bilheteria,elemt => Number(elemt))
            bubbleSort(arr_bilheteria_em_Number,2)

            let nomes_baseado_bilheteria = get_names_movies(movies,'bilheteria','nome',arr_bilheteria_em_Number)
            utils.print('')
            show_vetor1_vetor2('\t---- MELHORES FILMES EM BILHETERIA ----',nomes_baseado_bilheteria,arr_bilheteria_em_Number, 'reais')
            utils.print('')
            break;

        case 4:
            let arr_IMDB_v2 = filter(movies,'IMDB',valor => valor.length> 0 ? true : false)
            let arr_IMDB_v2_EmNumber = mapear(arr_IMDB_v2,elem => Number(elem))
            let total = reduce(arr_IMDB_v2_EmNumber,(elemt1 , elemt2) => elemt1 + elemt2, arr_IMDB_v2_EmNumber[0])
            
            let media = total / arr_IMDB_v2_EmNumber.length

            utils.print('')
            utils.print('\tSOMA TOTAL: ' + total)
            utils.print('\tMEDIA: ' + media.toFixed(1))
            utils.print('')
            break;

        default:
            break;
    }
}