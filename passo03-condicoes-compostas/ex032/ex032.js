let num = document.getElementById("txtn");
let numeroSorteado = parseInt(Math.random() * 5 + 1);
console.log(numeroSorteado)

function sorteio() {
    let n = Number(num.value)
    if(n == numeroSorteado){
        alert(`VOCÊ ACERTOU,PARABÉNS!. O número sorteado é ${numeroSorteado}`)
    } else if ( n > numeroSorteado) {
        alert(`Você errou!.O número sorteado é menor que ${n}`)
    } else {
        alert(`Você errou!.O número sorteado é maior que ${n}`)
    }

}
