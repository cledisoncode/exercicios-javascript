const res =  document.getElementById('res');

function maior(a,b,c) {
    if((a === b ) && (b === c)){
        return `Todos os números são iguais`;
    }else 
        if((a > b) && (a > c)){
            return a;
        } else if((b > a) && (b > c)){
            return b;
        } else {
            return c;
        }

}

function verificar(){
    const valor1 = Number(document.getElementsByTagName('input')[0].value);
    const valor2 = Number(document.getElementsByTagName('input')[1].value);
    const valor3 = Number(document.getElementsByTagName('input')[2].value);

    resultado = maior(valor1,valor2,valor3);

    if(resultado === 'Todos os números são iguais'){
        res.innerHTML = resultado;
    } else{
        res.innerHTML = `O maior número é ${resultado}`;
    }

}