function calcular(){
    var txtr =  document.getElementById('kmRodados')
    var txtd =  document.getElementById('diasAlugado')
    var resultado =  document.getElementById('res')

    var kmRodados = Number(txtr.value)
    var dias = Number(txtd.value)
    var precoqrodados = kmRodados * 0.20
    var diaAlugado = dias * 90
    var aluguelTotal = precoqrodados + diaAlugado

    resultado.innerHTML = `<p>Você alugou o carro por<strong> ${dias} dia(s)</strong></p>`;

    resultado.innerHTML += `<p>O preço pelos dias que você alugou  é dado por: <strong>(Números de dias alugado * 90)</strong>.Que no seu caso deu um total de <strong>R$${diaAlugado.toFixed(2)}</strong></p>`;

    resultado.innerHTML += `<p>Você percorreu com o veículo <strong>${kmRodados}</strong> km.</p>`;

    resultado.innerHTML += `<p>O preço pelos quilômetros rodados é dado por: <strong>(Km percorridos * 0.20)</strong>. Que no seu caso deu um total de <strong>R$${precoqrodados.toFixed(2)}</strong></p>`;

    resultado.innerHTML += `<strong>O valor total  a pagar é: R$ ${aluguelTotal.toFixed(2)}</strong>.`;
}