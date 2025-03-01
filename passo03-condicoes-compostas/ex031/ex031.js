function jogar(){
    var opcao_player1 =  document.getElementsByName("option1");
    var opcao_player2 = document.getElementsByName("option2");
    var res = document.querySelector("p#res");

    //!EMPATE
    if(opcao_player1[0].checked && opcao_player2[0].checked){
        res.innerHTML = `EMPATE!`;

    }else if(opcao_player1[1]. checked && opcao_player2[1].checked){
        res.innerHTML = `EMPATE!`

    }else if(opcao_player1[2]. checked && opcao_player2[2].checked){
        res.innerHTML = `EMPATE!`

        //!pedra
    }else if(opcao_player1[0]. checked && opcao_player2[1].checked){
        res.innerHTML = `<strong>Papel Embrulha Pedra!</strong>. <strong>PONTO PARA O JOGADOR 2</strong>!`

    }else if(opcao_player1[0]. checked && opcao_player2[2].checked){
        res.innerHTML = `<strong>Pedra quebra Tesoura!</strong> <strong>PONTO PARA O JOGADOR 1</strong>!`;

        //!Papel
    }else if(opcao_player1[1]. checked && opcao_player2[0].checked){
        res.innerHTML = `<strong>Papel Embrulha Pedra!</strong>. <strong>PONTO PARA O JOGADOR 1</strong>!`;
        
    }else if(opcao_player1[1]. checked && opcao_player2[2].checked){
        res.innerHTML = `<strong>Tesoura corta Papel!</strong>. <strong>PONTO PARA O JOGADOR 2</strong>! `;
        
        //!Tesoura
    }else if(opcao_player1[2]. checked && opcao_player2[0].checked){
        res.innerHTML = `<strong>Pedra quebra Tesoura!</strong>. <strong>PONTO PARA O JOGADOR 2</strong>!`;
        
    }else if(opcao_player1[2]. checked && opcao_player2[1].checked){
        res.innerHTML = `<strong>Tesoura corta papel!</strong>. <strong>PONTO PARA O JOGADOR 1</strong>!`;
        
    }
}