const res = document.getElementById('res');
res.style.textAlign = 'center';
res.style.color = 'white';
res.style.fontSize = '1.2em';

function valores() {
    const vetor = [];
        let t1 = 5;
        let t2 = 3;

    for(let i = 0; i < 10; i++) {
        if(i % 2 == 0) {
            vetor.push(5)
        } else {
            vetor.push(3)
        }
    }

    for ( let i = 0; i < 10; i++) {
        res.innerHTML += `<p>A posição [${i}],armazena o valor: ${vetor[i]} </p>`;
        
    }
}






