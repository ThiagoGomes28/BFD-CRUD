
let lista_de_alunos = [];
let selecionado = null;

let ul = document.getElementById("lista");

let aluno = {
    nome: "",
    telefone: "",
    cidade: ""
};

function salvar_aluno() {
    aluno = {
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
        document.getElementById("saida").innerHTML = `<b>Foi selecionado:</b> ${lista_de_alunos[selecionado].nome} - ${lista_de_alunos[selecionado].telefone} - ${lista_de_alunos[selecionado].cidade}`;
    }
});

function recuperar_aluno() {
    if (selecionado === null) {
        document.getElementById("saida").innerHTML = "Nenhum aluno Selecionado!";
        return;
    }

    let aluno_posicao = lista_de_alunos[selecionado];
    document.getElementById("nome").value = aluno_posicao.nome;
    document.getElementById("telefone").value = aluno_posicao.telefone;
    document.getElementById("cidade").value = aluno_posicao.cidade;
};

function editar_aluno() {

    nome = document.getElementById("nome").value;
    telefone = document.getElementById("telefone").value;
    cidade = document.getElementById("cidade").value;

    if (nome == "" || telefone == "" || cidade == "") {
        document.getElementById("saida").innerHTML = "Faltou algum Campo!"
    } else {
        document.getElementById("saida").innerHTML = "Dados Editado com Sucesso!";
    }

    lista_de_alunos[selecionado].nome = nome;
    lista_de_alunos[selecionado].telefone = telefone;
    lista_de_alunos[selecionado].cidade = cidade;

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cidade").value = "";

    selecionado = null;

    mostrar_alunos();
}

function excluir_aluno() {

    if (selecionado === null) {
        document.getElementById("saida").innerHTML = "Nenhum Aluno Selecionado!"
        return;
    }

    lista_de_alunos.splice(selecionado, 1);
    
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cidade").value = "";

    selecionado = null;

    mostrar_alunos();

    document.getElementById("saida").innerHTML = "Dados Excluídos com Sucesso!";
};