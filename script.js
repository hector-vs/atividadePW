function login() {
    const user = "teste@teste"
    const pass = "teste"

    var userInput = document.getElementById("email").value
    var passInput = document.getElementById("pass").value

    if(userInput == user && passInput == pass){
        window.location.href = "pagina2.html";
    } else {
        alert("Usuário inválido!")
    }
}

function pesquisar() {
    var url = document.getElementById("url").value
    alert("Redirecionando...")
    window.location.href = url;
}

function tabuada() {
    var numero = document.getElementById("numeroTab").value
    var lista = document.getElementById("lista-tabuada")

    for(let i = 1; i < 11 ; i++){
        const el = document.createElement('li');
        el.innerText = `${numero} x ${i} = ${numero * i}`
        lista.appendChild(el)
    }
}