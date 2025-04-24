/*  
- Homens
- menos de 20 anos de empresa: +3%
- de 20 até 30 anos de empresa: +13%
- mais de 30 anos de empresa: +25%
<----------------------------------------->
- Mulheres
- menos de 15 anos de empresa: +5%
- de 15 até 20 anos de empresa: +12%
- mais de 20 anos de empresa: +23%
 */
function calcular(){
    var sexo = document.getElementsByName("radsex");
    var txts = document.getElementById("salario")
    var txta =  document.getElementById("anos_trblh");
    var salario = Number(txts.value);
    var anos_trabalhado = Number(txta.value);
    var res = document.querySelector("p#res");

    if(sexo[0].checked){
        var genero = "Homem"
        res.innerHTML = `<p>Gênero do Funcionário:<strong> ${genero}!</strong></p
        >`;

            if(anos_trabalhado < 20){
               var  salario_novo = salario + (salario * 3 / 100);
                res.innerHTML += `<p>Você trabalha na empresa a ${anos_trabalhado} ano (s). O seu salário atual é de R$ ${salario.toFixed(2)}. Com o reajuste, seu novo salário é de R$  ${salario_novo.toFixed(2)}</p>`
        
            } else if(anos_trabalhado >= 20 && anos_trabalhado <= 30){
                var salario_novo = salario + (salario * 13 / 100);
                res.innerHTML += `<p>Você trabalha na empresa a ${anos_trabalhado} ano (s). O seu salário atual é de R$ ${salario.toFixed(2)}. Com o reajuste, seu novo salário é de R$  ${salario_novo.toFixed(2)}</p>`
        
            }else if(anos_trabalhado > 30){
                var salario_novo = salario + (salario * 25 / 100);
                res.innerHTML += `<p>Você trabalha na empresa a ${anos_trabalhado} ano (s). O seu salário atual é de R$ ${salario.toFixed(2)}. Com o reajuste, seu novo salário é de R$  ${salario_novo.toFixed(2)}</p>`
            }

    }else if(sexo[1].checked){
            var genero = "Mulher"
            res.innerHTML = `<p>Gênero do Funcionário:<strong> ${genero}!</strong></p
            >`;

            if(anos_trabalhado < 15){
                var salario_novo = salario + (salario * 5 / 100);
                res.innerHTML += `<p>Você trabalha na empresa a ${anos_trabalhado} ano (s). O seu salário atual é de R$ ${salario.toFixed(2)}. Com o reajuste, seu novo salário é de R$  ${salario_novo.toFixed(2)}</p>`

            }else if(anos_trabalhado >= 15 && anos_trabalhado <= 20){
                var salario_novo = salario + (salario * 12 / 100);
                res.innerHTML += `<p>Você trabalha na empresa a ${anos_trabalhado} ano (s). O seu salário atual é de R$ ${salario.toFixed(2)}. Com o reajuste, seu novo salário é de R$  ${salario_novo.toFixed(2)}</p>`

            }else if(anos_trabalhado > 20){
                var salario_novo = salario + (salario * 23 / 100);
                res.innerHTML += `<p>Você trabalha na empresa a ${anos_trabalhado} ano (s). O seu salário atual é de R$ ${salario.toFixed(2)}. Com o reajuste, seu novo salário é de R$  ${salario_novo.toFixed(2)}</p>`
            }

    }
}