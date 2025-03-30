const res = document.getElementById('res');

const superSomador = function (i,f){
    let soma = 0;
    if( i < f){
        for(let cont = i; cont <= f; cont++){
            soma += cont;
        }
        return soma;
    } else {
        for(let cont = i; cont >= f; cont--){
            soma += cont;
        }
        return soma;
    }
}

function somar() {
    res.innerHTML = '';
    const valorInicial = Number(document.getElementById('txti').value);
    const valorFinal = Number(document.getElementById('txtf').value);

    //!AQUI É O DISPLAY, mostra somente os números em sequencia
    res.innerHTML += `<p>SuperSomador(${valorInicial}, ${valorFinal}) = </p>`
    if(valorInicial < valorFinal){
        for (let i = valorInicial; i <= valorFinal; i++) {
            res.innerHTML += `${i}`;
            if(i < valorFinal){
                res.innerHTML += ` + `;
            }
        }
    } else {
        for (let i = valorInicial; i >= valorFinal; i--) {
            res.innerHTML += `${i}`;
            if(i > valorFinal){
                res.innerHTML += ` + `;
            }
        }
    }
    //?Aqui é a variavel resultado que recebe a variabel superSomador que é uma funcao
    let resultado  =  superSomador (valorInicial,valorFinal);
    res.innerHTML += `<p>A soma de todos os números no intevalo é = <strong id="destaqueResultado">${resultado}</strong></p>`;
    document.getElementById('destaqueResultado').style.backgroundColor = 'red'
    document.getElementById('destaqueResultado').style.color = 'white';
    document.getElementById('destaqueResultado').style.padding = '5px'
}