const res = document.getElementById('res');

function somador (a,b){
    return a + b;
}

function soma () {
    const num1 = Number(document.getElementsByName('txtnums')[0].value);
    const num2 = Number(document.getElementsByName('txtnums')[1].value);
    res.innerHTML = `A soma de ${num1} + ${num2} é = ${somador(num1,num2)}`
}