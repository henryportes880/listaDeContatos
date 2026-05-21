const bancoDeContatos = require("./contatos");

function exibirContatos() {
    if (bancoDeContatos.length === 0) {
        console.log("\nNenhum contato cadastrado.\n");
        return;
    }

    console.log("\n===== LISTA DE CONTATOS =====\n");

    bancoDeContatos.forEach((contato) => {
        console.log(`Código: ${contato.id}`);
        console.log(`Nome: ${contato.nome}`);
        console.log(`E-mail: ${contato.email}`);

        const numeros = contato.telefones ?? [];

        console.log("Telefones:");

        if (numeros.length === 0) {
            console.log("  Nenhum telefone informado.");
        } else {
            numeros.forEach((telefone, indice) => {
                console.log(`  ${indice + 1} - ${telefone}`);
            });
        }

        console.log("\n-----------------------------\n");
    });
}

module.exports = exibirContatos;