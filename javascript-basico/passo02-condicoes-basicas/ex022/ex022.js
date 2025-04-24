function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear();
    var txta = document.getElementById('anoNasc');
    var res =  document.getElementById('res')

    var anoNasc = anoAtual - Number(txta.value);
    var depois= anoNasc - 18;
    var antes = 18 - anoNasc

    if(anoNasc > 18){
        res.innerHTML = `Você tem ${anoNasc} ano (s) e já se passou ${depois} ano (s) desde de que você deveria ter se alistado!`
    }else if(anoNasc == 18){
        res.innerHTML = `Você já tem ${anoNasc} anos e tem que se alistar esse ano!`
    }
    else{
        res.innerHTML = `Você tem ${anoNasc} ano (s) e faltam ${antes} ano (s) para você se alistar!`
    }
   
}