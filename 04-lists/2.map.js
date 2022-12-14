const service = require('./service')

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []
    for (let indice = 0; indice <= this.length - 1; indice++) {
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado
}

async function main() {
    try {
        const results = await service.obterPessoas(`a`)
        // Métodos utilizados anteriormente para listagem dos nomes
        // const names = []
        // result.results.forEach((item) => {
        //     names.push(item.name)
        // })
        // const names = result.results.map((pessoa) => {
        //     return pessoa.name
        // })
        const names = results.results.meuMap(function (pessoa, indice) {
            return `[${indice}]${pessoa.name}`
        })
        console.log('names', names)
    } catch (error) {
        console.error("Deu ruim", error)
    }
}

main()