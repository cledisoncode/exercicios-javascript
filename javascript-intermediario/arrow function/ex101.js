
const multa = vel => {
    if(vel <= 80){
        return `Você está dentro da velocidade permitida!`;
    } else {
        let preco_multa = ( vel - 80) * 5;
        return `Você está acima da velocidade permitida !.Sua multa é no valor de R$ ${preco_multa.toFixed(2)}`;
    }
};

function botao (){
    const res = document.querySelector('p#res');
    res.innerHTML = '';
    const velocidade = Number(document.getElementById('txtv').value);
    res.style.padding = '10px';
    
    res.innerHTML += 
    `
    <p id='aviso'><strong id="destaque">Velocidade permitida até 80 km/h!</strong></p>
    <p>${multa(velocidade)}</p>
    `;
    document.querySelector('p#aviso').style.color = 'white';
    document.getElementById('destaque').style.backgroundColor = 'red';
}