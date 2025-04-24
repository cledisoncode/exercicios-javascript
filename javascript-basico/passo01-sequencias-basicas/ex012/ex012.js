function calcular(){
    var txtp = document.getElementById('precoProduto');
    var txtd = document.getElementById('desconto');
    var resultado =  document.getElementById('res');

    var preco = Number(txtp.value)
    var desconto =  Number(txtd.value)
    var precoPromocional =  preco - (preco * desconto/100);

    resultado.innerHTML = `O produto <strong>sem desconto </strong> fica <strong>R$${preco.toFixed(2)}</strong>`

    resultado.innerHTML += `<p><strong>O valor do desconto é de ${desconto}%.</strong></p>`

    resultado.innerHTML += `<p>O produto <strong>com desconto</strong> fica <strong>R$${precoPromocional.toFixed(2)}</strong></p>`
    ;
}