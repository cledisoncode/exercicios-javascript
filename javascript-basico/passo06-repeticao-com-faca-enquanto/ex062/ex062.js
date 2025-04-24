function display() {
    const res = document.getElementById('res');
    
    res.innerHTML = "";

    let resposta = "";
    let idades = 0;
    let quant_IdadesDigitadas = 0;
    let somaIdades = 0;
    let idadeMais21 = 0;

    do{
        idades = parseInt(prompt(`Digite a idade da pessoa: `));
        resposta = prompt(`Quer continuar ( S | N )?`);

        if(idades >= 21){
            idadeMais21 += 1;
        }

        somaIdades += idades;
        quant_IdadesDigitadas++
        
    }while(resposta.toLocaleLowerCase() === "s");
    
    let mediaIdadesDigitadas = somaIdades / quant_IdadesDigitadas

    res.innerHTML = `
    <p>Foram digitadas as idades de  ${quant_IdadesDigitadas}  pessoas </p>;
    <p>A soma de todas as idades é ${somaIdades} anos. A média entre as idades é ${mediaIdadesDigitadas.toFixed(2)}</p>
    <p>Existem ${idadeMais21} pessoas com 21 ou mais anos</p>`
    
}

/*
62) Faça um programa usando a estrutura “faça enquanto” que leia a idade de várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou não continuar a digitar dados. No final, quando o usuário decidir parar, mostre na tela:
            a) Quantas idades foram digitadas
            b) Qual é a média entre as idades digitadas
            c) Quantas pessoas tem 21 anos ou mais.
            */