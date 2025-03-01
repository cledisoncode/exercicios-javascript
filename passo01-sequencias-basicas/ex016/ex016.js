function calcular(){
    var txta =  document.getElementById('anos');
    var txtc = document.getElementById('quantCigarros')

    var anosFumando = Number(txta.value)
    var quantCigarros =  Number(txtc.value)

    var diasFumando = anosFumando * 365;
    var totalCigarros =  quantCigarros * diasFumando;
    var minutosPerdido = totalCigarros * 10;
    var diasPerdido = minutosPerdido / 1440;

    res.innerHTML = `<p>Você fumou<strong> ${totalCigarros} cigarros  </strong>!</p>`;
    
    res.innerHTML += `<p>Já perdeu <strong>${minutosPerdido} minutos</strong> de vida que equivale a<strong> ${diasPerdido.toFixed(2)} dia (s) a menos de vida</strong></p>`

}