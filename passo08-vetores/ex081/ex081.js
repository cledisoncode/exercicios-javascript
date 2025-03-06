    function inserirIdades() {
        let vetorIdades = [];
        let contador = 0;
        let somaIdades = 0;
        let mediaIdades = 0;
        let posicaoPessoasMais25 = [];
        let maiorIdade = [];
        let posicaoMaiorIdade = [];
        
            for(let i = 0; i < 3; i++) {
                let idades = Number(prompt(`Insira a idade da pessoa ${contador++}`));
                vetorIdades.push(idades);

                if(vetorIdades[i] > 25){
                    posicaoPessoasMais25.push(i);
                }

                somaIdades += vetorIdades[i];
            }
            mediaIdades = somaIdades/vetorIdades.length;

            for(let i = 0; i < 3; i++){
                if(vetorIdades[i] > maiorIdade) {
                    maiorIdade = vetorIdades[i];
                }
               // posicaoMaiorIdade.push(i)
            }
            alert(`A soma de todas as idades é ${somaIdades}, e a média é ${mediaIdades.toFixed(2)}`);
            alert(`As pessoas com mais  de 25 anos estao localizada(s) no(s) indice(s) (${posicaoPessoasMais25})`);
            alert(`A maior idade digitada foi ${maiorIdade}`);
            //alert(`A posicao da maior idade é ${posicaoMaiorIdade}`)

            console.log(vetorIdades);
            console.log(somaIdades);
            console.log(mediaIdades.toFixed(2));
            console.log(posicaoPessoasMais25);
            console.log(maiorIdade);
            console.log(posicaoMaiorIdade);
            
    }