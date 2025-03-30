const res = document.getElementById('res');

function situacao(m){
    if(m >= 6){
        return 'APROVADO'
    } else if ( m >= 4){
        return 'em RECUPERAÇÃO';
    } else {
        return 'REPROVADO';
    }
}

function media(a,b){
    return (a + b) / 2;
}


function programaPrincipal() {
    const nota1 = Number(document.getElementsByName('notas')[0].value);
    const nota2 = Number(document.getElementsByName('notas')[1].value);
    let resultadoMedia = media(nota1,nota2);
    let status =  situacao(resultadoMedia)
    res.innerHTML = `O aluno está ${status}`
}