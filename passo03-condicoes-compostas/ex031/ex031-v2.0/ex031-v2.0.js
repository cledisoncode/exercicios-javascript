function jogar(){
    let txtj1 = document.getElementById('txtj1');
    let txtj2 = document.getElementById('txtj2');
    let res = document.getElementById('display');
    res.style.textAlign = 'center';
    res.style.width = '500px';
    res.style.padding = '10px';

    if(txtj1.value.lenght == 0 || txtj2.value.lenght == 0){
        alert('[ERRO] Falta de Dados!. Ambos tem que escolher uma das opções!');

        //!PEDRA
    } else if(txtj1.value == "PEDRA" && txtj2.value == "PEDRA"){
        res.innerHTML = "EMPATE";

    } else if(txtj1.value == "PEDRA" && txtj2.value == "TESOURA"){
        res.innerHTML = "PEDRA QUEBRAR TESOURA!, PONTO PARA O JOGADOR 1!"
        ;
    }else if(txtj1.value == "PEDRA" && txtj2.value == "PAPEL"){
        res.innerHTML = "PAPEL EMBRULHAR PEDRA!, PONTO PARA O JOGADOR 2!";
    }
        //!PAPEL
        else if(txtj1.value == "PAPEL" && txtj2.value == "PAPEL"){
        res.innerHTML = "EMPATE!";

        }else if(txtj1.value == "PAPEL" && txtj2.value == "PEDRA"){
            res.innerHTML = "PAPEL EMBRULHAR PEDRA!, PONTO PARA O JOGADOR 1!";
        }else if(txtj1.value == "PAPEL" && txtj2.value == "TESOURA"){
        res.innerHTML = "TESOURA CORTAR PAPEL!, PONTO PARA O JOGADOR 2!";
    }

        //!TESOURA
        else if(txtj1.value == "TESOURA" && txtj2.value == "TESOURA"){
            res.innerHTML = "EMPATE";

        }else if(txtj1.value == "TESOURA" && txtj2.value == "PEDRA"){
            res.innerHTML = "PEDRA QUEBRAR TESOURA!, PONTO PARA O JOGADOR 2!";
        }else{
            res.innerHTML = "TESOURA CORTAR PAPEL!, PONTO PARA O JOGADOR 1!";
        }
    
    

}