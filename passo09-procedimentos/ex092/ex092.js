


document.querySelector('button').addEventListener('click',programaPrincipal);

function parOuimpar (a){
    if( a % 2 != 0){
        console.log(`O número ${a}é ímpar`);
    } else {
        console.log(`O número ${a} é par`);
    }
}

function programaPrincipal ( ){
    let num = Number(prompt('Digite um número:'));
    if(isNaN(num)){
        alert('ERRRO!, SOMENTE NÚMEROS SÃO PERMITIDOS');
    } else {
        parOuimpar(num);
    }
}

