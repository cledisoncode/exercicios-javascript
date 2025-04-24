


document.querySelector('button').addEventListener('click',programaPrincipal);

function maior (a,b){
    if( a > b){
        console.log(`O número ${a} é maior que ${b}`);
    } else if (a < b ){
        console.log(`O número ${b} é maior que ${a}`);
    } else 
    console.log(`Os números são iguais`);
}

function programaPrincipal ( ){
    let num1 = Number(prompt('Digite um número:'));
    let num2 =Number(prompt('Digite outro número:'));

    if(isNaN(num1) || isNaN(num2)){
        alert('ERRRO!, SOMENTE NÚMEROS SÃO PERMITIDOS');
    } else {
        maior(num1,num2);
    }
}

