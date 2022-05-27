const btnLogin = buscarElemento('.button_login'); 
const login = buscarElemento('.login')

function abrirMenu(elemento){
    if(elemento.style.display == "none"){
        elemento.style.display = "flex"; 
    } else {
        fecharMenu(elemento);
    }
}    

function fecharMenu(elemento){
    if(elemento.style.display == "flex"){
        elemento.style.display = "none";
    }
}

btnLogin.addEventListener('click', () => {
    abrirMenu(login);
})