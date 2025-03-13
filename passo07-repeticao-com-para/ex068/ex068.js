
function display() {
    const res = document.getElementById('res');
    res.style.textAlign = 'center';
    res.style.font = 'normal bolder 1em Arial,Helvetica';

    let sexo = '';
    let peso = 0;
    let mulheres = 0;
    let somaPesoMulheres = 0;
    let mediaPesoMulheres= 0;
    let homens = 0;
    let homensMais100 = 0;
    let maiorPesoHomens = 0;
    let posicao = 0;
    

    for(let c = 1; c <= 8; c++){
        do{
            sexo = prompt(`Digite o sexo da pessoa ${c} ( M | F)`).toUpperCase();
            if(sexo !== 'F' && sexo !== 'M'){
                alert(`Entrada inválida! Por favor,insira apens 'F' ou 'M'`);
            }
        } while(sexo !== 'F' && sexo !== 'M');

        peso = parseFloat(prompt(`Digite o peso da pessoa ${c}(kg)`));

        if(sexo.toLocaleUpperCase() === 'F') {
            mulheres += 1;
            somaPesoMulheres += peso;

        }else {
            homens += 1;
            if(peso > 100){
                homensMais100 += 1;
            }
            if(peso > maiorPesoHomens){
                maiorPesoHomens = peso;
                posicao = c;
            }
        }
    }
    mediaPesoMulheres = somaPesoMulheres / mulheres;

    res.innerHTML += `
    <p>Foram cadastradas ${mulheres} mulheres e ${homens} homens</p>
    `
    if( homens == 0){
        res.innerHTML += `Não foram cadastrados homens`;

    }else {
        res.innerHTML += `
        <p>${homensMais100} homens pesa(m) mais de 100kg</p>
        <p>O maior peso entre os homens é ${maiorPesoHomens.toFixed(1)}kg e pertence a pessoa número ${posicao}</p>`
    }

    if(mulheres == 0){
        res.innerHTML += `<p>Não foram cadastradas mulheres</p>`;

    }else {
        res.innerHTML += `<p>A soma de todos os pesos das mulheres é ${somaPesoMulheres.toFixed(2)} e a média é ${mediaPesoMulheres.toFixed(2)}</p>`
    }
}

/*Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura  “para”. No final, mostre na tela:
        a) Quantas mulheres foram cadastradas
        b) Quantos homens pesam mais de 100Kg
        c) A média de peso entre as mulheres 
        d) O maior peso entre os homens*/ 