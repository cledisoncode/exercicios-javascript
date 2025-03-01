function desconto(){
    var txtn= document.getElementById("nome");
    var fsex = document.getElementsByName("radsex");
    var txtp = document.querySelector("input#preco");
    var preco = Number(txtp.value);
    var res = document.querySelector("p#res");
    
    var h = Number(preco - (preco * 5/100))
    var m = Number(preco - (preco * 13/100))
    var bi = Number(preco + (preco * 50/100))
    

    if(fsex[0].checked){
    res.innerHTML = `<p>Homem detectado!.Olá, ${txtn.value}.Você recebeu um desconto de 5% e sua compra que custaria R$ ${preco.toFixed(2)}.Agora, vai custar somente R$ ${h.toFixed(2)}</p>`

    }else if(fsex[1].checked){
     res.innerHTML = `<p>Mulher detectada!.Olá, ${txtn.value}.Feliz Dia da Mulher!.Você recebeu um desconto de 13% e sua compra que custaria R$ ${preco.toFixed(2)}.Agora, vai custar somente R$ ${m.toFixed(2)}</p>`

    }else if(fsex[2].checked){
    res.innerHTML = `<p>Não Binário detectadu!.Olá, ${txtn.value}.Você recebeu um aumento de 50% na sua compra de R$ ${preco.toFixed(2)}.E agora, sua comprar vai custar somente R$ ${bi.toFixed(2)}</p>`
    }

    
}