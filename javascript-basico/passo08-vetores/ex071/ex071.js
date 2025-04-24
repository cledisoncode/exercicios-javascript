let numeroAutomatico = parseInt(Math.random() * 1000 + 1);
const valores = []

function vetor() {
    const res = document.querySelector('p#res');
    res.style.textAlign = 'center';
    res.style.color = 'red';
    res.style.font =  'normal bolder 1.5em Arial,Helvetica';
    res.style.padding = '10px'

    res.innerHTML = ''
    for(let i = 0; i <= 7; i++) {
        valores.push(numeroAutomatico)
    }
    for( let i = 0; i <= 7; i++) {
        res.innerHTML +=`<p>No vetor = [${i}], temos o valor ${valores[i]} </p> `;
    }
}
