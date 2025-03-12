const res = document.getElementById('res');
res.style.padding = '10px';

function vetorPar() {
    const vetorNumeros = [];
    const vetorNumPares = [];
    const posicaoNumPar = [];

    for(let i = 0; i < 10; i++) {
        let num = Number(prompt(`Digite um número:`));
        vetorNumeros.push(num);
    }

    res.innerHTML += 'vetor <strong id="vetorDestaque">NUMEROS</strong>= [ ';
    for(let i = 0; i < vetorNumeros.length; i++) {
        res.innerHTML += `${vetorNumeros[i]}`
        if(i < vetorNumeros.length - 1){
            res.innerHTML += ', '
        }
    }
    res.innerHTML += ' ]';
    document.getElementById('vetorDestaque').style.backgroundColor = 'lightblue';

    for(let i = 0; i < vetorNumeros.length; i++) {
        if(vetorNumeros[i] % 2 == 0) {
            vetorNumPares.push(vetorNumeros[i]);
            posicaoNumPar.push(i);
        }
    }
    res.innerHTML += `<p>Os números pares são <strong id="vetorParDestaque">(${vetorNumPares})</strong>, e estão localizados no(s) índice(s) <strong id="posicaoDestaque">${posicaoNumPar}</strong> respectivamente.</p>`;

    document.getElementById('vetorParDestaque').style.backgroundColor = 'pink';
    document.getElementById('posicaoDestaque').style.backgroundColor = 'pink';
}