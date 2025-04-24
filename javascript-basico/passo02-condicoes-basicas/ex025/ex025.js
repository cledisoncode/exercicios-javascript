function triangulo(){
    var lado_a = document.getElementsByClassName('reta')[0];
    var lado_b = document.getElementsByClassName('reta')[1];
    var lado_c = document.getElementsByClassName('reta')[2];
    var resp = document.getElementById('res');
    var img = document.querySelector('img#foto');

    var a = Number(lado_a.value);
    var b = Number(lado_b.value);
    var c = Number(lado_c.value);

    if((a < b + c) && (b < a + c ) && (c < a + b)){
        resp.innerHTML = `É possível formar um triângulo com os segmentos três retas. reta1 = ${a}, reta2 = ${b}, reta3 = ${c}`
        img.src = 'imagens/foto-triangulo.png';

    }else{
        resp.innerHTML = `<p>Não é possível formar um triângulo</p>`;
        img.src = `imagens/error-triangulo.png`
    }


}