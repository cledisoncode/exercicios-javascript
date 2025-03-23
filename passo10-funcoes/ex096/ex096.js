const res = document.querySelector('p#res');

document.querySelector('button#Limpar').addEventListener('click',limpar);
function limpar() {
    res.innerHTML = '';
    document.getElementsByClassName('notas')[0].focus();
}

function media() {
    const nota1 = Number( document.getElementsByClassName('notas')[0].value);
    const nota2 = Number( document.getElementsByClassName('notas')[1].value);
    alert(`Primeira Nota: ${nota1.toFixed(2)} || Segunda Nota: ${nota2.toFixed(2)}`)

    return (nota1 + nota2) / 2;
}

function calcularMedia(){
    const resultadoMedia = media();
    res.innerHTML += `
    <p>A média do aluno é : ${resultadoMedia.toFixed(2)}
    `
}