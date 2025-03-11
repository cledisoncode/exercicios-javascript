let vetorNumerosAleatorios = [];

for(let i = 0; i < 20; i++) {
    let numerosAleatorios = parseInt(Math.random() * 99 + 1);
    vetorNumerosAleatorios.push(numerosAleatorios);
}
console.log(`vetor antes do sort ${vetorNumerosAleatorios}`);

function mostrarVetor (){
    alert(`Os números sorteados foram: [${vetorNumerosAleatorios}]`);
    vetorNumerosAleatorios.sort((a,b) => a - b);// FUNCAO DE COMPARACAO
    console.log(`vetor depois do sort ${vetorNumerosAleatorios}`);

    let res = document.getElementById('res');
    res.style.padding = `10px`;
    res.innerHTML += `vetor com os números ordenados [ `;
        for(let i = 0; i < vetorNumerosAleatorios.length;  i++) {
            res.innerHTML += `${vetorNumerosAleatorios[i]}`;

            if(i < vetorNumerosAleatorios.length - 1){
                res.innerHTML += ` , `;
            }
        }
    res.innerHTML += ` ] `;
}



