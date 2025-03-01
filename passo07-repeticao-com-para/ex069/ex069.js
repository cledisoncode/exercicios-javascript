function pa(){
    const res = document.getElementById('res');
    let primeiroTermo = document.getElementById('txtpt');

    let razao = document.getElementById('txtr');
    let a1 = Number(primeiroTermo.value);
    let r = Number(razao.value);
    let soma = 0;

        res.innerHTML = ``;

        res.innerHTML = `a10 = `
        for(let c = 0; c < 10; c++){
            let termoAtual = a1 + (c * r);
            res.innerHTML += `${termoAtual}`;

            if(c < 9){
                res.innerHTML += ` + `;
            }
            soma += termoAtual;
        }
        res.innerHTML += `<p>A soma de todos os valores da sequência é ${soma}</p>`
        
}


//?minha versao 

//?minha versão não tá errada, ela gerar o mesmo resultado da que que o copilot fez está funcionando,a unica diferenca á na formação do laco for; vou deixar a do copilot;

/*
function pa(){
    const res = document.getElementById('res');
    let primeiroTermo = document.getElementById('txtpt');

    let razao = document.getElementById('txtr');
    let a1 = Number(primeiroTermo.value);
    let r = Number(razao.value);
    let soma = 0;

        res.innerHTML = ``;
        let aN = a1 + ((10 - 1) * r);
        for(let c = a1; c <= aN; c +=  r){
            res.innerHTML += `${c}`;

            if(c < aN){
                res.innerHTML += ` + `;
            }
            soma += c;
        }
        res.innerHTML += `<p>A soma de todos os valores da sequência é ${soma}</p>`
        
}


*/ 