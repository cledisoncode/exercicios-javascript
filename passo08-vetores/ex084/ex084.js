const res =  document.querySelector('p#res');

function listagem() {
    let vetorNomes = [];
    let vetorIdades = [];
    let contPessoas = 0;
    let contPesoasIdades = 0;

    for(let i = 0; i < 9; i++) {
        let nomes = prompt(`Digite o nome da pessoa${contPessoas++}`);
        vetorNomes.push(nomes);
        let idades = Number(prompt(`Digite a idade da pessoa${contPesoasIdades++} `));
        vetorIdades.push(idades);
    }
    console.log(vetorNomes);
    console.log(vetorIdades);

    let vetorMenorIdades = [];
    let vetorMenorIdadesNomes = [];
    for(let i = 0 ; i < vetorNomes.length; i++) {
        if(vetorIdades[i] < 18){
            vetorMenorIdadesNomes.push(vetorNomes[i]);
            vetorMenorIdades.push(vetorIdades[i]);
        }
    }
    console.log(vetorMenorIdadesNomes);
    console.log(vetorMenorIdades);

    if(vetorMenorIdadesNomes.length === 0){
        alert(`NENHUMA DAS PESSOAS INSERIDAS É MENOR DE IDADE!`);

    } else {
        res.innerHTML += `<p><strong class="destaque">[Listagem]</strong></p>`;
        res.innerHTML += `<p><strong class="destaque">NOMES --- IDADES</strong></p>`;
        res.innerHTML += `<p>--------------------------------</p>`;
        for(let i = 0; i < vetorMenorIdadesNomes.length; i++) {
            res.innerHTML += `<p>${vetorMenorIdadesNomes[i]} --- ${vetorMenorIdades[i]}</p>`
        }
        res.innerHTML += `<p>--------------------------------</p>`;

        let strongDestaque = document.querySelectorAll('.destaque');
            strongDestaque.forEach(function(element){
                element.style.color = 'red';
            })
        }
    
}

//!botao de limpa a lista
let buttonReiniciar = document.getElementById('limparListagem');
buttonReiniciar.addEventListener('click', limpar)
function limpar() {
    res.innerHTML = '';
}

//?reiniciar variaveis

