const res = document.querySelector('p#res');
res.style.textAlign = 'center';

function display() {
    const valores = []
    let c = 9;

    res.innerHTML = ''
    for(let i = 0; i <= 9; i++){
        valores.push(c--);
    }
    for(let pos in valores) {
        res.innerHTML += `<p>A posição [${pos}],armazena o valor = ${valores[pos]} </p>`
    }

}