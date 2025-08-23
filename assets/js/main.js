
let aluno = {
    nome: "",
    telefone: 0,
    cidade: ""
};

function salvar_aluno(){
    aluno.nome = document.getElementById("nome").value;
    aluno.telefone = document.getElementById("telefone").value;
    aluno.cidade = document.getElementById("cidade").value;

    if (aluno.nome == "" || aluno.telefone == 0 || aluno.cidade == ""){
        document.getElementById("saida").innerHTML = "Dados inválidos!"
    } else {
        document.getElementById("saida").innerHTML = "Dados salvos com Sucesso!";
    }
    
}

function mostrar_aluno(){
    if (aluno.nome == "" || aluno.telefone == 0 || aluno.cidade == ""){
        document.getElementById("saida").innerHTML = "Nenhum aluno Cadastrado!"
    } else {
        document.getElementById("lista").innerHTML = 
        "<li>" + aluno.nome + " - " + aluno.telefone + " - " + aluno.cidade + "</li>";
    }
}