let vetorNumerosSorteados = [];
    for(let i = 0; i < 30; i++) {
        let numerosSorteados = parseInt(Math.random() * 15 + 1);
        vetorNumerosSorteados.push(numerosSorteados);
    }
    console.log(vetorNumerosSorteados);

function verificar() {
    let num =  document.getElementById('fnum');
    let vetorNumeroEncontrado = [];
    let posicaoNumeroEncontrado = [];

    for(let i = 0; i < vetorNumerosSorteados.length; i++){
        if(vetorNumerosSorteados[i] === Number(num.value)) {
            vetorNumeroEncontrado.push(vetorNumerosSorteados[i]);
            posicaoNumeroEncontrado.push(i);
        } 
    }
    console.log(vetorNumeroEncontrado);
    
    let palavraPosicao = vetorNumeroEncontrado.length > 1? 'nos índices' : 'no índice';
    if(vetorNumeroEncontrado.length > 0){
    alert(`Os números sorteados foram [${vetorNumerosSorteados}].
        O número ${num.value} foi encontrado ${vetorNumeroEncontrado.length}x, ${palavraPosicao} (${posicaoNumeroEncontrado}).
        `);

    } else {
        alert(`O número digitado não foi encontrado!.Tente outro número`);
    }
}
