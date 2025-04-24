function verificar(){
    var data = new Date();
    var anoAtual = data.getFullYear();
    var anoNasc = document.getElementById('anoNasc');
    var res =  document.getElementById('res');
    var Idadevoto = anoAtual - Number(anoNasc.value);

    if(anoNasc.value.length == 0 || Number(anoNasc.value ==  anoAtual)){
        alert("ERRO!,Preencha o espaço com o ano do seu nascimento!");
    }else if(Idadevoto < 16){
        res.innerHTML = `<p>Você tem ${Idadevoto} anos!</p>`;
        res.innerHTML += "<p>Não precisa votar!</p>"
    }else if(Idadevoto < 18 || Idadevoto > 70){
        res.innerHTML = `<p>Você tem ${Idadevoto} anos!</p>`;
        res.innerHTML += "<p>Voto Opcional!</p>";
    }else{
        res.innerHTML = `<p>Você tem ${Idadevoto} anos!</p>`;
        res.innerHTML += "<p>Voto Obrigatório</p>"
    }
}