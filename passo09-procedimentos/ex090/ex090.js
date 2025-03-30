


document.querySelector('button').addEventListener('click',programaPrincipal);

function somador (a,b){
    let soma = a + b; 
    console.log(`A soma dos valores é: ${soma}`);
}

function programaPrincipal ( ){
    let num1 = Number(prompt('Digite um número:'));
    let num2 =Number(prompt('Digite outro número:'));

    if(isNaN(num1) || isNaN(num2)){
        alert('ERRRO!, SOMENTE NÚMEROS SÃO PERMITIDOS');
    } else {
        somador(num1,num2);
    }
}

