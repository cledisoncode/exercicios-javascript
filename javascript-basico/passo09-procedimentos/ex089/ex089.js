function gerador (b,l){
    if(b === 1){
        for(let i = 0; i < l; i++){
            console.log('+--------========--------+');
            console.log('Portugol Studio');
            console.log('+--------========--------+');
            console.log('');
            console.log('');
        }
    } else  if(b === 2){
        for(let i = 0; i < l; i++){
            console.log('~~~~~~~~:::::::~~~~~~~');
            console.log('Portugol Studio');
            console.log('~~~~~~~~:::::::~~~~~~~');
            console.log('');
            console.log('');
        }
    } else  if(b === 3){
        for(let i = 0; i < l; i++){
            console.log('<<<<<<<<------->>>>>>>');
            console.log('Portugol Studio');
            console.log('<<<<<<<<------->>>>>>>');
            console.log('');
            console.log('');
        }
    }
}

function progamaPrincipal(){
    let borda = Number(prompt('Escolha uma borda: Borda 1(+-------=======------+), Borda 2 (~~~~~~~~:::::::~~~~~~~),Borda 3 (<<<<<<<<------->>>>>>>) '));
    let linhas = Number(prompt('Em quantas linhas você quer que a frase se repita?'));

    if(isNaN(borda) || isNaN(linhas)){
        alert('ERRRO!, SOMENTE NÚMEROS SÃO PERMITIDOS');
    } else {
        gerador(borda,linhas);
    }
}