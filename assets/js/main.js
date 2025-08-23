
let lista_de_alunos = [];

function salvar_aluno() {
    let aluno = {
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        cidade: document.getElementById("cidade").value
    };

    if (aluno.nome == "" || aluno.telefone == "" || aluno.cidade == "") {
        document.getElementById("saida").innerHTML = "Dados inválidos!"
    } else {
        document.getElementById("saida").innerHTML = "Dados salvos com Sucesso!";
        lista_de_alunos.push(aluno);
    }

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cidade").value = "";

    mostrar_alunos();
}

function mostrar_alunos() {
    let ul = document.getElementById("lista");
    let html = "";
    lista_de_alunos.forEach(elemento => {
        html += `<li>${elemento.nome} - ${elemento.telefone} - ${elemento.cidade}</li>`;
    });

    ul.innerHTML = html;
}

function recuperar_aluno() {

}

function editar_aluno() {

}

function excluir_aluno() {

}