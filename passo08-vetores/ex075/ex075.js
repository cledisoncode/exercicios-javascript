const res = document.getElementById('res');
res.style.textAlign = 'center';
res.style.color = 'white';
res.style.fontSize = '1.2em';

function vetorFenobacci() {
    let valores = []
    let t1 = 1
    let t2 = 0

    for(let i = 0; i < 16; i++) {
        let t3 =  t1 + t2;
        t1 = t2;
        t2 = t3
        valores.push(t3)
    }

    for(let pos in valores){
        res.innerHTML += `<p>A posicao [${pos}],armazena o valor ${valores[pos]} </p>`
    }
}