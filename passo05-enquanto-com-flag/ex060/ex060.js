function display() {
    const res = document.getElementById('res');

    let resposta = 's';
    let nome = 0;
    let idade = 0;
    let sexo = 0;

    let mulheres = 0;
    let mulheresMenos18 = 0;
    let mulherMaisJovem = Number.MAX_VALUE;
    let nomeMulherMaisJovem = 0
    let homens = 0;
    let homensMais30 = 0;
    let maisVelha = 0;
    let nomeMaisVelha = 0;
    let somaIdadeGrupo = 0

    let c = 0;
    while(true){
        c++;
        nome = prompt(`Qual o nome da pessoa ${c}?`);
        idade = parseInt(prompt(`Qual a idade da pessoa ${c}?`));
        sexo = prompt(`Qual o sexo da pessoa ${c} ( M | F)?`);

        if(sexo.toLocaleUpperCase() == 'F'){
            mulheres = mulheres + 1;
            if( idade < 18){
                mulheresMenos18 = mulheresMenos18 + 1;
            }
            
            if( idade < mulherMaisJovem ){
                mulherMaisJovem = idade;
                nomeMulherMaisJovem = nome;

            }

        }else if(sexo.toLocaleLowerCase() == 'm') {
            homens = homens + 1;
            if( idade > 30){
                homensMais30 = homensMais30 + 1;
            }
        }

        if(idade > maisVelha){
            maisVelha = idade;
            nomeMaisVelha =  nome;
        }

        somaIdadeGrupo = somaIdadeGrupo + idade;
        resposta = prompt(`Quer continuar ( S | N)?`);
        if(resposta.toLocaleUpperCase() == 'N')break;
    }
    let mediaIdadeGrupo = somaIdadeGrupo / (homens + mulheres);

    res.innerHTML = `
    <p>Foram cadastradas ${homens} homen(s) e ${mulheres} mulher(es)</p>
    <p>A soma de todas as idades entre homens e mulheres é ${somaIdadeGrupo}</p>
    <p>O nome da pessoa mais velha é: ${nomeMaisVelha}</p>
    <p>A média de idade do grupo é ${mediaIdadeGrupo.toFixed(2)}</p>
    `
    if( mulheres == 0){
        res.innerHTML += `não foram registradas mulheres`;
    }else{
        res.innerHTML += `
        <p>Tem ${mulheresMenos18} mulher(es) com menos de 18 anos</p>
        <p>O nome da mulher mais jovem é: ${nomeMulherMaisJovem}</p>
        `
    }

    if( homens == 0){
        res.innerHTML += `não foram registrados homens`;
    }else{
        res.innerHTML += `
        <p>Tem ${homensMais30} homen(s) com mais de 30 anos</p>
        `
    }

}

// 
//