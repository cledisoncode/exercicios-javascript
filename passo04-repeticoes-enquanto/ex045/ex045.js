let body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'aquamarine';


let button = document.getElementById('button');
button.addEventListener('click', contar);

function contar(){
    let inicio = document.getElementsByTagName('input')[0];
    let fim = document.getElementsByTagName('input')[1];
    let passo = document.getElementsByTagName('input')[2];
    let res = document.getElementById('res');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível Contar!`

    }else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if( p <= 0 ) {
            alert('Incremento Inválido!,Considerando INCREMENTO 1!');
            p = 1;
        }


        if( i > f){
            let c = i;
            res.innerHTML= '';
            res.innerHTML = `Contagem: <br> `;
            while ( c >= f){
                res.innerHTML += `${c} \u{1F436} `;
                c -= p;
            }

        }else {
            let c = i;
            res.innerHTML = '';
            res.innerHTML = `Contagem:<br>`;

            while ( c <= f){
                res.innerHTML += `${c} \u{1F439} `;
                c += p
            }
        }
        res.innerHTML += `Acabou ! \u{1F433}`;
        
    }
}