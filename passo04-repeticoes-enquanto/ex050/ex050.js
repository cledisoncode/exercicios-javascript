const res = document.getElementById('display');
res.style.textAlign = 'center';
res.style.padding = '10px'

function sorteio() {
    let maior5 = 0
    let divisivel3 = 0;

    let c = 1;
    while ( c <= 20) {
        let numeroSorteado =  parseInt(Math.random() * 10 + 0)
        res.innerHTML += `${numeroSorteado}`

        if(c < 20){
            res.innerHTML += ` , `
        }

        if(numeroSorteado > 5){
            maior5 += 1;
        }

        if(numeroSorteado % 3 == 0){
            divisivel3 += 1
        }

        c++
    }
    res.innerHTML += `
    <p>${maior5} números são maiores que o número 5</p>
    <p>${divisivel3} números são divisíveis por 3</p>
    `

}