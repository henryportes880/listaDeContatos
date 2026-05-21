const prompt = require("prompt-sync")();

const listarContatos = require("./listarContatos");
const adicionarContato = require("./adicionarContato");
const atualizarContato = require("./atualizarContato");
const removerContato = require("./removerContato");

function menu() {
    console.log("\n1 - Listar contatos");
    console.log("2 - Adicionar contato");
    console.log("3 - Atualizar contato");
    console.log("4 - Remover contato");
    console.log("5 - Sair");

    const opcao = prompt("\nEscolha uma opção: ");

    if (opcao === "1") {
        listarContatos();
        menu();
    }

    else if (opcao === "2") {
        const nome = prompt("Nome: ");
        const email = prompt("Email: ");

        const telefones = [];

        while (true) {
            const telefone = prompt(
                "Telefone (ENTER para finalizar): "
            );

            if (telefone === "") {
                break;
            }

            telefones.push(telefone);
        }

        const sucesso = adicionarContato({
            nome,
            email,
            telefones
        });

        if (sucesso) {
            console.log("\nContato adicionado.");
        }

        menu();
    }

    else if (opcao === "3") {
        const id = Number(
            prompt("Digite o ID do contato: ")
        );

        const nome = prompt("Novo nome: ");
        const email = prompt("Novo email: ");

        const telefones = [];

        while (true) {
            const telefone = prompt(
                "Novo telefone (ENTER para finalizar): "
            );

            if (telefone === "") {
                break;
            }

            telefones.push(telefone);
        }

        const atualizado = atualizarContato(id, {
            nome,
            email,
            telefones
        });

        if (atualizado) {
            console.log("\nContato atualizado.");
        }

        menu();
    }

    else if (opcao === "4") {
        const id = Number(
            prompt("Digite o ID para remover: ")
        );

        const removido = removerContato(id);

        if (removido) {
            console.log("\nContato removido.");
        }

        menu();
    }

    else if (opcao === "5") {
        console.log("\nPrograma encerrado.");
    }

    else {
        console.log("\nOpção inválida.");
        menu();
    }
}

menu();