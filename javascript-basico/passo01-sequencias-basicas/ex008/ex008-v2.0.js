function kilometro(){
    var txtkm =  document.getElementById('distancia');
    var resultado = document.getElementById('res1');

    var metros = Number(txtkm.value);
    var kilo = metros / 1000;
    
    resultado.innerHTML = `<p>A distância de ${metros}m  em <strong>Quilômetros</strong> é igual a = <strong> ${kilo} </strong> Km</p>`;

    resultado.style.color = "red"
}

function hectometro(){
    var txtkm =  document.getElementById('distancia');
    var resultado = document.getElementById('res2');

    var metros = Number(txtkm.value);
    var hm = metros / 100;
    
    resultado.innerHTML += `<p>A distância de  ${metros}m  em <strong>Hectômetro</strong> é igual a = <strong> ${hm} </strong> Hm</p>`;

    resultado.style.color = "blue"
}

function decametro(){
    var txtkm =  document.getElementById('distancia');
    var resultado = document.getElementById('res3');

    var metros = Number(txtkm.value);
    var dam = metros / 10;
    
    resultado.innerHTML += `<p>A distância de  ${metros}m  em <strong>Decâmetro</strong> é igual a = <strong> ${dam} </strong> Dam</p>`;

    resultado.style.color = "green"
}

function metros(){
    var txtkm =  document.getElementById('distancia');
    var resultado = document.getElementById('res4');

    var metros = Number(txtkm.value);
    var m = metros / 1;
    
    resultado.innerHTML += `<p>A distância de  ${metros}m  em <strong>Metro</strong> é igual a = <strong> ${m} </strong> M</p>`;

    resultado.style.color = "orange" 
}

function decimetro(){
    var txtkm =  document.getElementById('distancia');
    var resultado = document.getElementById('res5');

    var metros = Number(txtkm.value);
    var dm = metros * 10;
    
    resultado.innerHTML += `<p>A distância de  ${metros}m em <strong>Decímetros</strong> é igual a = <strong> ${dm} </strong> Dm</p>`;

    resultado.style.color = "#03ffd5"
}

function centimetro(){
    var txtkm =  document.getElementById('distancia');
    var resultado = document.getElementById('res6');

    var metros = Number(txtkm.value);
    var cm = metros * 100;
    
    resultado.innerHTML += `<p>A distância de ${metros}m  em <strong>Centímetros</strong> é igual a = <strong> ${cm} </strong> Cm</p>`;

    resultado.style.color = "#ff03dd"
}

function milimetro(){
    var txtkm =  document.getElementById('distancia');
    var resultado = document.getElementById('res7');

    var metros = Number(txtkm.value);
    var cm = metros * 1000;
    
    resultado.innerHTML += `<p>A distância de  ${metros}m  em <strong>Mílimetros</strong> é igual a = <strong> ${cm} </strong> mm</p>`;

    resultado.style.color = "#ffe603"
}