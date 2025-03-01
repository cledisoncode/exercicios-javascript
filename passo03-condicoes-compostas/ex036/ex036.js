function calcular(){
    var txth = document.querySelector("input#horas");
    var horas = Number(txth.value);
    var res = document.getElementById("res");
    

    if(horas <= 10){
        var pontos = horas * 2;
        var fatura = pontos * 0.05;
        res.innerHTML = `Você pratica ${horas} horas de atividade física por mês. Você acumulou um total de ${pontos} pontos. E ganhou a quantia de R$ ${fatura.toFixed(2)}`;

    }else if(horas > 10 && horas <= 20){
        var pontos = horas * 5;
        var fatura = pontos * 0.05;
        res.innerHTML = `Você prática ${horas} horas de atividade física por mês. Você acumulou um total de ${pontos} pontos. E ganhou a quantia de R$ ${fatura.toFixed(2)}.`;

    }else{
        var pontos = horas * 10;
        var fatura = pontos * 0.05;
        res.innerHTML = `Você prática ${horas} horas de atividade física por mês. Você acumulou um total de ${pontos} pontos. E ganhou a quantia de R$ ${fatura.toFixed(2)}.`;
    }
}