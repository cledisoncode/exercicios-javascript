const res = document.getElementById('res');
res.style.textAlign = 'center';
res.style.color = 'white';
res.style.fontSize = '1.2em';

const valores = []

function vetor() {
    for(let i = 0; i < 7; i++) {
        let numeroAleatorio = parseInt(Math.random() * 100 + 1 );
        valores.push(numeroAleatorio)
    }

    for(let pos in valores){
        res.innerHTML += `<p>A posição [${pos}],armazena o valor: ${valores[pos]}</p>`
    }
}