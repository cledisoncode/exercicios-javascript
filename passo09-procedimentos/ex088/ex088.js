function gerador(l){
    for(let i = 0; i < l; i++){
        console.log('+--------========--------+');
        console.log('Aprendendo Portugol');
        console.log('+--------========--------+');
        console.log('');
        console.log('');
        
    }
}

function programaPrincipal(){
    let linhas = Number(prompt('Em quantas linhas você quer a frase?'));
    if(isNaN(linhas)){
        alert('ERRRO!, SOMENTE NÚMEROS SÃO PERMITIDOS');
    } else {
        gerador(linhas)
    }

}
