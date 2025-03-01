const res =  document.getElementById('res');
res.style.font = `normal normal 1em Arial,Helvetica`;
res.style.textAlign = 'center';
res.style.padding = '5px';

function vetor() {
    let valores = [];
    let vetorMultiplos10 = [];
    let posicaoMultiplos10 = [];

    res.innerHTML = ''
    for(let i = 0; i < 15;i++) {
        let num = Number(prompt(`Digite um número: `));
        valores.push(num);
    }

    res.innerHTML += 'vetor <strong id="destaqueVetorNome">VALORES = </strong>= [ ';
    for(let i = 0; i < valores.length; i++) {
        res.innerHTML += `${valores[i]} `
        if(i < valores.length - 1){
            res.innerHTML += ` , `
        }
    }
    res.innerHTML += ' ]';
    document.getElementById('destaqueVetorNome').style.backgroundColor = 'lightgreen';

    for ( let i = 0; i < valores.length; i++) {
        if(valores[i] % 10 == 0) {
            vetorMultiplos10.push(valores[i]);
            posicaoMultiplos10.push(i)
        }
    }
    res.innerHTML += `<p>Os valores Multiplos de 10 são <strong id="numMultiplos10">(${vetorMultiplos10})</strong> e encontram-se nos indices <strong id="indicesDestaque"> ${posicaoMultiplos10}</strong> respectivamente.</p>`;

    document.getElementById('numMultiplos10').style.backgroundColor = 'lightblue';
    document.getElementById('indicesDestaque').style.backgroundColor = 'pink';
    

    




}