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
        resp.innerHTML = `<p>É possível forma um triângulo com as três retas. reta1 = ${a}, reta2 = ${b},  reta3 = ${c}.</p>`
    

        if((a == b) && (a == c) && (c == b)){
            resp.innerHTML += `<p>E o tipo de triângulo que é possível formar: É um triângulo <strong>EQUILÁTERO</strong>,que tem todos os lados iguais.</p>`;
            img.src = 'imagens/triangulo-equilatero.png';
        }

        if(((a == b) || (b == c) || (a == c)) && ((a != b) || (b != c) || (a != c))){
            resp.innerHTML += `<p>E o tipo de triângulo que é possível formar: É um triângulo <strong> ISÓCELES</strong>,que tem dois lados iguais e um diferente.</p>`;
            img.src = 'imagens/triangulo-isoceles.png';
        }

        if((a != b) && (b != c) && (a != c)){
            resp.innerHTML += `<p>E o tipo de triângulo que é possível formar: É um triângulo <strong>ESCALENO</strong>,que tem todos os lados  diferentes.</p>`;
            img.src = 'imagens/triangulo-escaleno.png';
        }

    }else{
        resp.innerHTML = `<p>Não é possível formar um triângulo</p>`
        img.src = "imagens/error-triangulo.png"
    }


}