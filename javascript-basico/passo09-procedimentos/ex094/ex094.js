
document.querySelector('button').addEventListener('click',programaPrincipal);

function fibonacci (a){
    console.log(`Fibonacci(${a}) = `);
    t1 = 1;
    t2 = 0;
    for(let i = 0; i < a; i++){
        let t3 = t1 + t2;
        t1 = t2;
        t2 = t3;
        console.log(`${t3}`);
        if( i < a - 1){
            console.log(' >> ');
        }
    }
}

function programaPrincipal ( ){
    let num = parseInt(prompt('Digite um número inteiro:'));
    if(isNaN(num)){
        alert('ERRRO!, SOMENTE NÚMEROS SÃO PERMITIDOS');
    } else {
        fibonacci(num);
    }
}