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