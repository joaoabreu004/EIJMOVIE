function adicionarNome(){
    let campo = buscarElemento('.barraNome'); 
    let nome = []; 
    nome.push(campo.value); 

}




const btnEntrar = buscarElemento('.btn-entrar').onclick = adicionarNome; 