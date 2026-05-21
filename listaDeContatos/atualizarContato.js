const listaContatos = require("./contatos");
const verificarEmailDuplicado = require("./emailAlreadyInUse");

function editarContato(idUsuario, dadosAtualizados) {
    const posicaoContato = listaContatos.findIndex(
        ({ id }) => id === idUsuario
    );

    if (posicaoContato < 0) {
        console.log("\nUsuário não localizado.");
        return false;
    }

    const emailEmUso = verificarEmailDuplicado(
        dadosAtualizados.email,
        idUsuario
    );

    if (emailEmUso) {
        console.log(
            `\nO e-mail "${dadosAtualizados.email}" já pertence a outro contato.`
        );

        return false;
    }

    const contatoAtualizado = {
        id: idUsuario,
        ...dadosAtualizados
    };

    listaContatos[posicaoContato] = contatoAtualizado;

    return true;
}

module.exports = editarContato;