/*
- abaixo de 18.5: Abaixo do peso
- entre 18.5 e 25: Peso ideal
- entre 25 e 30: Sobrepeso
- entre 30 e 40: Obesidade
- acima de 40: Obseidade mórbida
*/
function imc(){
    var txta = document.getElementById("altura");
    var txtp = document.querySelector("input#peso");
    var res = document.getElementsByTagName("p")[2];

    var altura =  Number(txta.value);
    var peso = Number(txtp.value);
    var imc = peso/ (altura * altura);

    res.innerHTML = `${imc.toFixed(2)}`;

    //imc > 40 Você está com OBESIDADE MÓRBIDA!
    if(imc > 40){
        res.innerHTML = `Você tem ${altura.toFixed(2)} m de altura e pesa ${peso}kg. Seu imc é de ${imc.toFixed(2)}.Você está com OBESIDADE MÓRBIDA!`;

    }else if( imc > 30  ){
        res.innerHTML = `Você tem ${altura.toFixed(2)}m de altura e pesa ${peso}kg. Seu imc é de ${imc.toFixed(2)}.Você está com OBESIDADE!`;


    }else if(imc <= 30 && imc > 25 ){
        res.innerHTML = `Você tem ${altura.toFixed(2)}m de altura e pesa ${peso}kg. Seu imc é de ${imc.toFixed(2)}.Você está com SOBREPESO!`;

    }
    else if(imc <= 25 && imc >= 18.5){
        res.innerHTML = `Você tem ${altura.toFixed(2)}m de altura e pesa ${peso}kg. Seu imc é de ${imc.toFixed(2)}.Você está no PESO IDEAL !`;

    }else {
        res.innerHTML = `Você tem ${altura.toFixed(2)}m de altura e pesa ${peso}kg. Seu imc é de ${imc.toFixed(2)}.Você está ABAIXO DO PESO IDEAL!`;
    }


}