const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoas('a')
        const names = []

        console.time('Tempo de execução (for padrão)')
        for (let i=0; i <= result.results.length -1; i++) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('Tempo de execução (for padrão)')

        console.time('Tempo de execução (for in)')
        for(let i in result.results) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('Tempo de execução (for in)')

        console.time('Tempo de execução (for of)')
        for (pessoa of result.results) {
            names.push(pessoa.name)
        }
        console.timeEnd('Tempo de execução (for of)')

        console.log(names)
    } catch (error) {
        console.error("Erro interno", error)
    }
}
main()