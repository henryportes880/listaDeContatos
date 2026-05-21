const listaContatos = require("./contatos");
const verificarEmailExistente = require("./emailAlreadyInUse");

function criarContato(novoContato) {
    const proximoId = listaContatos.length + 1;

    const contatoFormatado = {
        ...novoContato,
        id: proximoId
    };

    const emailJaExiste = verificarEmailExistente(
        contatoFormatado.email,
        contatoFormatado.id
    );

    if (emailJaExiste) {
        console.log("E-mail já está em uso.");
        return false;
    }

    listaContatos.push(contatoFormatado);

    return true;
}

module.exports = criarContato;