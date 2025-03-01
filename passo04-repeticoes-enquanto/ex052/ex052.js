function idade(){
    let res =  document.getElementById('res');

    let maior_18 = 0;
    let menor_5 = 0;
    let maior_idade = 0;
    let soma = 0;

    let c = 1;
    while( c <= 10){
        let idade = parseInt(prompt(`Digite a idade da pessoa ${c}`));
        if(idade > 18){
            maior_18 =  maior_18 + 1;
        }
        if(idade < 5){
            menor_5 = menor_5 + 1;
        }
        if(idade > maior_idade){
            maior_idade = idade;
        }
        soma += idade;
        c++;
    }
    let media = soma / 10;

    res.style.textAlign = 'center';
    res.innerHTML += `<p>A soma de todas as idades é: ${soma}</p>`;
    res.innerHTML += `<p>A média das idades é: ${media.toFixed(1)}</p>`
    res.innerHTML += `<p>${maior_18} pessoa(s)!, tem mais de 18 anos;</p>`;
    res.innerHTML += `<p>${menor_5} pessoa(s)!, tem menos de 5 anos; </p>`;
    res.innerHTML +=  `<p>A maior idade digitada foi ${maior_idade} anos!</p>`
}
