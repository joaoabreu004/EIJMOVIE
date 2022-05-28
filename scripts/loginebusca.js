
const btnLogin = buscarElemento('.button_login'); 
const btnPesquisar = buscarElemento('.button_pesquisar'); 
const login = buscarElemento('.login')
const pesquisar = buscarElemento('.pesquisar');


function fecharMenu(elemento){
    if(elemento.style.display == "flex"){
        elemento.style.display = "none";
    }
}

function abrirMenu(elemento){
    if(elemento.style.display == "none"){
        elemento.style.display = "flex"; 
    } else {
        fecharMenu(elemento);
    }
}  


btnLogin.addEventListener('click', () => {
    abrirMenu(login);
    fecharMenu(pesquisar);
})

btnPesquisar.addEventListener('click', () => {
    abrirMenu(pesquisar);
    fecharMenu(login);
})
