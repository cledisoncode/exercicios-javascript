const res = document.getElementById('res');
res.style.color = 'black'

function nomes() {
    res.innerHTML = ''
    const vetorNomes = [];
    for(let i = 0; i < 7; i++){
        let nomesPessoas = prompt(`Qual o nome da pessoa ${i}?`);
        vetorNomes.push(nomesPessoas);
    }

    for(let i = 0; i < vetorNomes.length; i++){
        vetorNomes.reverse()
        res.innerHTML += `<p>O vetor [${i}], armazena o nome:<strong class='nomesDestaque'>${vetorNomes[i]}</strong></p>`;

        
        //!Este código percorre todos os elementos com a classe nomesDestaque e aplica a cor vermelha a cada um deles.
        let destaque = document.querySelectorAll('.nomesDestaque');
        destaque.forEach(function(element) {
        element.style.color = 'red';
        });
    }

}