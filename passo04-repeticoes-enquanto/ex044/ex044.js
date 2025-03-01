let body = document.getElementsByTagName('body')[0];
    body.style.fontFamily = 'Arial,Helvetica';

function contar(){
    let inicio = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.querySelector('div#res');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO],Preencha todos os dados!');

    }else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if( p <= 0 ){
            alert('Incremento Inválido, Considerando INCREMENTO 1!');
            p = 1;
        }


        res.innerHTML = '';
        res.innerHTML = `Contagem: <br>`;
        let c = i;
        while ( c <= f){
            res.innerHTML += `${c} \u{1F567}`;
            c += p;
        }
        res.innerHTML += `Acabou! \u{1F345}`
    }
}