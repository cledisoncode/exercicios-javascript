function verificar(){
    var txtvel = document.getElementById('txtvel');
    var res = document.getElementById("res");

    if(txtvel.value.length == 0 ){
        alert("ERROR!,espaço em branco, por favor preencha o espaço com a velocidade do carro!")
    }else if(Number(txtvel.value) > 80){
        var multa = (txtvel.value - 80) * 5;
        res.innerHTML = "<p>Você ultrapassou o limite de velocidade de 80Km/h e foi multado!</p>"
        res.innerHTML += `<p>O valor da sua multa é de R$ ${multa.toFixed(2)} reais!</p>`
        
    }else{
        res.innerHTML = "Você está dentro do limite de velocidade estabelecido!"
    }
}