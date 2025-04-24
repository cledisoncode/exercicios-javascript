function display(){
    const res = document.getElementById('Res');
    let resposta = "s";
    let sexo = 0;
    let idade = 0;
    let homens = 0;
    let mulheres = 0;
    let maior_idade = 0;
    let mais_jovem = Number.MAX_VALUE;
    let soma_Idades_Homens = 0;

    let c = 0;
    while(true){
        c++
        sexo = prompt(`Qual o sexo da pessoa ${c} ( F | M )?`);
        idade = parseInt(prompt(`Qual a idade da pessoa ${c}?`));
        resposta = prompt(`Quer continuar ( S | N )?`);

        if(sexo.toLocaleLowerCase() == 'f'){
            mulheres = mulheres + 1;

            if(idade < mais_jovem){
                mais_jovem = idade;
            }

        } else if(sexo.toLocaleUpperCase() == 'M'){
            homens = homens + 1;
            soma_Idades_Homens = soma_Idades_Homens + idade;
        };
        
        if(idade > maior_idade){
            maior_idade = idade;
        }

        if(resposta.toLocaleLowerCase() == 'n')break;
    }
    let mediaIdadeHomens = soma_Idades_Homens / homens;

    res.innerHTML += `
    <p>Foram cadastrados ${homens} homens e ${mulheres} mulheres</p>
    <p>A maior idade lida foi ${maior_idade}</p>
    <p>A mulher mais jovem tem ${mais_jovem} ano(s)</p>
    <p>A soma total das idades dos homens é ${soma_Idades_Homens}</p>
    <p>A média de idade entre homens é ${mediaIdadeHomens.toFixed(2)}</p>
    `
}