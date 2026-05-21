const listaContatos = require("./contatos");

function excluirContato(idContato) {
    const posicao = listaContatos.findIndex(
        ({ id }) => id === idContato
    );

    if (posicao < 0) {
        console.log("\nContato não encontrado.");
        return false;
    }

    listaContatos.splice(posicao, 1);

    return true;
}

module.exports = excluirContato;