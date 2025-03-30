const res = document.getElementById('res');
res.style.lineHeight = '50vh';

const potencia = function (b,e){
    return b ** e;
}

function calcularPotencia () {
    const valorBase = parseInt(Number(prompt('Digite o valor da  base da potência:')));
    const valorExpoente = parseInt(Number(prompt('Digite  o valor  do expoente da potência:')));

    if(isNaN(valorBase) || isNaN(valorExpoente)) {
        alert('Erro! somente números são permitidos');
        return calcularPotencia();
    } else {
        let resultado = potencia(valorBase,valorExpoente)
        res.innerHTML = `
        O número <span class="destaque">${valorBase}</span> elevado a <span class="destaque">${valorExpoente}</span> é = <span class="destaque"> ${resultado}</span>
        `;

        let destaque = document.querySelectorAll('.destaque');
        destaque.forEach(function(element) {
            element.style.color = 'red';
            element.style.backgroundColor = 'white';
            element.style.padding = '5px';
        })
    }
}

const botaoReiniciar = document.getElementById('reiniciar').addEventListener('click',reiniciar);

function reiniciar(){
    res.innerHTML = '';
}
