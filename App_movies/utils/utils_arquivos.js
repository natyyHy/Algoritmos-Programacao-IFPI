import {writeFileSync , readFileSync, existsSync} from 'fs'
import {mapear} from './utils_vetor.js'

export function carregar_arquivo(nome_arquivo, atributo1, atributo2, atributo3, atributo4) {
    let vetor = [];
    if (existsSync(nome_arquivo)) {
        const dados = readFileSync(nome_arquivo, 'utf-8')
        const linhas = dados.split('\n')
        for (let i = 0; i < linhas.length; i++) {
            const [att1, att2, att3, att4] = linhas[i].split(';')
            vetor.push({
                [atributo1]: att1,
                [atributo2]: att2,
                [atributo3]: att3,
                [atributo4]: att4
            });
        }
        return vetor
    }
    return vetor
}

export function salvar_arquivo(vetor, nome_arquivo, atributo1, atributo2, atributo3, atributo4) {
    const conteudo = mapear(vetor, linha => `${linha[atributo1]};${linha[atributo2]};${linha[atributo3]};${linha[atributo4]}`).join('\n')
    writeFileSync(nome_arquivo, conteudo, 'utf-8')
}
