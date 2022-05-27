//FUNÇÃO 
function buscarElemento(seletor){
    return document.querySelector(seletor);
}

const menu = buscarElemento('.menulateral'); 
const btnAbrir = buscarElemento('.btn_abrirlateral');


btnAbrir.addEventListener('click', () => {
    btnAbrir.classList.toggle('active');
    menu.classList.toggle('menulateral--ativo');
    //O método toggle () da interface DOMTokenList remove um token existente da lista e 
    //retorna false. Se o token não existir, ele será adicionado e a função retornará verdadeira.
})

                                                                            


