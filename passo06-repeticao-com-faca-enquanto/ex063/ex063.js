
const res = document.getElementById('res');
    function display() {

        let num = 0;
        let resposta = "";
        let somatorio = 0;
        let menoValor = Number.MAX_VALUE;
        let quant_NumDigitados = 0;
        let valoresPares = 0;

        do{
            num = parseFloat(prompt(`Digite um número: `));
            resposta = prompt(`Quer continuar ( S | N )?`);

            if(num < menoValor) { 
                menoValor = num;
            }

            if(num % 2 == 0) {
                valoresPares += 1;
            }

            somatorio += num;
            quant_NumDigitados++
        }while(resposta.toLocaleUpperCase() !== "N");
        let media = somatorio/quant_NumDigitados;

        res.innerHTML = `
        <p>A soma de todos os números é ${somatorio.toFixed(2)}</p>
        <p>O menor numero digitado foi ${menoValor}</p>
        <p>A média entre todos os valores é ${media.toFixed(2)}</p>
        <p>Dos ${quant_NumDigitados} números digitados, ${valoresPares} são números pares </p>
        `

    }   

/*
    <h1>63) Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
        a) O somatório entre todos os valores
        b) Qual foi o menor valor digitado
        c) A média entre todos os valores
        d) Quantos valores são pares</h1>


*/ 