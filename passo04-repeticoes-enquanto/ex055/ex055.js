
let numeroSorteado = parseInt(Math.random() * 10 + 1)
console.log(numeroSorteado)

function sorteio() {
    let num = 0
    let tentativas = 4;
    let acertou = false;
    while( tentativas >= 1){
        num = parseInt(prompt(`Digite um número entre 1 e 10:`))

        if(num == numeroSorteado) {
            acertou = true
            break
        } else if( num > numeroSorteado) {
            alert(`O número sorteado é menor que ${num}`)
        } else {
            alert(`O número sorteado é maior que ${num}`)
        }
        tentativas --

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        alert(`Restam ${tentativas} ${palavraTentativa}`)

        if(tentativas == 0){
            alert(`Desculpa suas tentativas acabaram`);
            break
        }
    }
    if(acertou){
    alert(`Parabéns!.Você acertou o número sorteado é ${numeroSorteado}.`);
    }
}

