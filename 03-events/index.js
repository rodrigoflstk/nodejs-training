const EventEmitter = require("events");

class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor();
const nomeEvento = "usuario:click";
meuEmissor.on(nomeEvento, (click) => {
  console.log("um usuário clicou", click);
});

const stdin = process.openStdin()

function main() {
    return new Promise ((resolve, reject) => {
        stdin.addListener('data', (value) => {
            console.log(`Você digitou ==> ${value.toString().trim()}`)
        })        
    })
}

main().then((result => {
    console.log('Resultado', resultado)
}))


// meuEmissor.emit(nomeEvento, "Na barra de rolagem");
// meuEmissor.emit(nomeEvento, "no Ok");

// let count = 0;

// setInterval(() => {
//   meuEmissor.emit(nomeEvento, "no Ok " + count++);
// }, 1000);