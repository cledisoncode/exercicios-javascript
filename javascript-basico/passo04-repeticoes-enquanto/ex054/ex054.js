let div = document.getElementsByTagName('div')[0];
div.addEventListener('dblclick', clique);

function clique(){
    let res = document.getElementById('res');
    res.innerHTML = '';
    let soma_geral_altura = 0;
    let mais_90 = 0;
    let menos_50 = 0;
    let mais_100 = 0;



    let c = 1;
    while(c <= 7){
        let peso = parseFloat(prompt(`Qual o peso da pessoa ${c} em (kg) ?`));
        let altura = parseFloat(prompt(`Qual a altura da pessoa  ${c} em (m) ?`));

        if(peso > 90){
            mais_90 = mais_90 + 1;
        }

        if(peso < 50 && altura < 1.60){
            menos_50 = menos_50 + 1;
        }

        if(altura > 1.90 && peso > 100){
            mais_100 = mais_100 + 1;
        }

        soma_geral_altura = soma_geral_altura + altura;
        c++;
    }
    let media_geral = soma_geral_altura / 7;
    res.innerHTML += `<p>A média da altura do grupo é: ${media_geral.toFixed(2)}</p>`;

    res.innerHTML += `<p>A quantidade de pessoas que pesam mais de 90kg é: ${mais_90}</p>`;

    res.innerHTML += `<p>A quantidade de pessoas que pesam menos de 50kg e tem menos de 1.60m de altura é: ${menos_50}</p>`;

    res.innerHTML += `<p>A quantida de pessoas que tem mais de 1.90 de altura e pesam mais 100kg é: ${mais_100}</p>`;
}
