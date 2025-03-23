const res = document.getElementById('res');

function limpar(){
    res.innerHTML = '';
}

function somador (a,b){
    if(isNaN(a) || isNaN(b)){
        alert(`ERRO!, somente números são permitidos`);
        return null;
    }
    return a + b;
}
function soma(){
    const num1 = Number(prompt('Digite o primeiro número:'));
    const num2 = Number(prompt('Digite o segundo número:'));

    const resultado = somador(num1,num2);
    if(resultado !== null){
        res.innerHTML = `A soma de ${num1} + ${num2} é = ${resultado}`;
    } else {
        return soma();
    }
}