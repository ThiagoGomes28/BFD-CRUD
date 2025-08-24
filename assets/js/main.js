
let lista_de_alunos = [];
let selecionado = null;

let ul = document.getElementById("lista");

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

    let html = "";
    lista_de_alunos.forEach((elemento, i) => {
        html += `<li data-index="${i}">${elemento.nome} - ${elemento.telefone} - ${elemento.cidade}</li>`;
    });

    ul.innerHTML = html;
};


ul.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        selecionado = event.target.dataset.index;
        document.getElementById("saida").innerHTML = `Foi selecionado: ${lista_de_alunos[selecionado].nome} - ${lista_de_alunos[selecionado].telefone} - ${lista_de_alunos[selecionado].cidade}`;
    }
});

function recuperar_aluno() {

}

function editar_aluno() {

}

function excluir_aluno() {

}