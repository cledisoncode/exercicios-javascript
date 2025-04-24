function calcular(){
    var casa_valor = document.getElementById("casa_valor");
    var txts = document.getElementsByName("salario")[0];
    var txta = document.querySelector("input#anos");
    var res = document.querySelector("p#res");
    var preco_casa = Number(casa_valor.value);
    var salario = Number(txts.value);
    var anos = Number(txta.value);

    var meses = anos * 12;
    var prestacao_mensal = preco_casa / meses;
    var salario_excessao = salario * 30 / 100;

   

    if(prestacao_mensal <= salario_excessao){
        res.innerHTML = `EMPRÉSTIMO APROVADO!,O valor da casa é  de R$ ${preco_casa.toFixed(2)} ,Você vai pagar a casa em ${anos} ano(s),O valor da prestação mensal é de R$ ${prestacao_mensal.toFixed(2)} de 12x,e é menor que 30% do seu salário que é ${salario_excessao.toFixed(2)}`;

    }else if(prestacao_mensal > salario_excessao){
        res.innerHTML = `EMPRÉSTIMO NEGADO!,O valor da prestação mensal R$ ${prestacao_mensal.toFixed(2)}, é maior que 30% do seu salário que é ${salario_excessao.toFixed(2)}`
    }
}