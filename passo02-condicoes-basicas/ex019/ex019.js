function calcular(){
    var nota1 = document.getElementsByClassName('nota')[0];
    var nota2 = document.getElementsByClassName('nota')[1];
    var res = document.getElementById('res');
    var media = ( Number(nota1.value) + Number(nota2.value) ) / 2;

    if( media >= 7){
        res.innerHTML = `Você teve um ótimo aproveitamento!. Sua média é ${media.toFixed(2)}`;
    }else{
        res.innerHTML = `Você não teve um bom aproveitamento!. Sua média é ${media.toFixed(2)}`
    }
}