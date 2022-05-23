//FUNÇÃO 
function buscarElemento(seletor){
    return document.querySelector(seletor);
}

const menu = buscarElemento('.menulateral'); 
const btnAbrir = buscarElemento('.btn_abrirlateral');


btnAbrir.addEventListener('click', () => {
    menu.classList.toggle('menulateral--ativo');
})






