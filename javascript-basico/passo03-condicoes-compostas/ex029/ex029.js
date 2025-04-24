function calcular(){
    var txtnome = document.getElementById("nome");
    var txts = document.getElementById("salario");
    var txta = document.getElementById("anos_trabalhando");
    var salario = Number(txts.value);
    var anos_trabalhado = Number(txta.value)
    var res = document.querySelector("p#res");

    res.style.color = "blue";

    if(anos_trabalhado <= 3){
        var salario_novo =  salario + (salario * 3/ 100)
        res.innerHTML = `<p>Olá,${txtnome.value}!. Você trabalhar na empresa a ${anos_trabalhado} ano (s).Seu salário foi reajustado para R$${salario_novo.toFixed(2)}</p>.`

    } else if(anos_trabalhado > 3 && anos_trabalhado < 10){
        var salario_novo = salario + (salario * 12.5 / 100);

        res.innerHTML = `<p>Olá,${txtnome.value}!. Você trabalhar na empresa a ${anos_trabalhado} ano (s).Seu salário foi reajustado para R$${salario_novo.toFixed(2)}</p>.`

    }else if(anos_trabalhado >= 10){
        var salario_novo = salario + (salario * 20 /100);
        res.innerHTML = `<p>Olá,${txtnome.value}!. Você trabalhar na empresa a ${anos_trabalhado} ano (s).Seu salário foi reajustado para R$${salario_novo.toFixed(2)}.</p>v`

    }
}