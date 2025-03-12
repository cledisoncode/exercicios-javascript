let section = document.getElementById('section');
section.addEventListener('click',vetor);

function vetor(){
    const res = document.querySelector('p#res');
    const valores = []
    let c = 0;
    res.innerHTML = ''
    for(let i = 0; i <= 9; i++){
        valores.push(c += 5);       
    }
    for(let pos in valores) {
        res.innerHTML += `<p>A posicao [${pos}], armazena o valor ${valores[pos]}</p> `;
        
    }
}