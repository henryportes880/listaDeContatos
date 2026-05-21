const listaContatos = require("./contatos");

function verificarDuplicidadeEmail(emailInformado, idAtual) {
    return listaContatos.some((contato) => {
        const mesmoEmail = contato.email === emailInformado;
        const usuarioDiferente = contato.id !== idAtual;

        return mesmoEmail && usuarioDiferente;
    });
}

module.exports = verificarDuplicidadeEmail;