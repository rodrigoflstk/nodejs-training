// Objetivo 0: Obter um usuário
// Objetivo 1: Preciso obter o telefone de um usuário apartir de seu ID
// Objetivo 2: Obter o endereço do usuário pelo id

function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            // return reject(new Error('DEU RUIM DE VERDADE'))
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '119900112',
                ddd: 11
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                rua: "Rua fulano de tal da silva",
                numero: 10
            })
        }, 2000)
    })
}


main()
async function main() {
    try {
        console.time('Tempo de execução da promise')
        const usuario = await obterUsuario()
        const resultado = await Promise.all([
            obterEndereco(usuario.id),
            obterTelefone(usuario.id)
        ])

        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(` 
            Nome: ${usuario.nome}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            Endereco: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('Tempo de execução da promise')
    } catch(error) {
        console.error("DEU RUIM", error)
    }
}

// const usuarioPromise = obterUsuario()
// usuarioPromise
//     .then((usuario) => {
//         return obterTelefone(usuario.id)
//             .then(function resolverTelefone(result) {
//                return {
//                 usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id
//                 },
//                 telefone: result
//                } 
//             })
//     })
//     .then((resultado) => {
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function resolverEnderco(result) {
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         })
//     })
//     .then((resultado) => {
//         console.log(`
//             Nome: ${resultado.usuario.nome},
//             Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero},
//             Telefone: (${resultado.telefone.ddd}), ${resultado.telefone.telefone} 
//         `)
//     })
//     .catch((error) => {
//         console.error("DEU RUIM: ", error)
//     })

// obterUsuario(function resolverUsuario(error, usuario) {
//     if (error) {
//         console.error("DEU RUIM em USUÁRIO", error)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//         if (error1) {
//             console.error("DEU RUIM em TELEFONE", error)
//             return;
//         }
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//             if (error2) {
//                 console.error("DEU RUIM em ENDERECO", error)
//                 return;
//             }

//             console.log(`
//                 Nome: ${usuario.nome}
//                 Endereco: ${endereco.rua}, ${endereco.numero}
//                 Telefone: (${telefone.ddd})${telefone.telefone}
//             `)
//         })
//     })
// })
