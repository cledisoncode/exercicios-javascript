    function inserirIdades() {
        const vetorIdades = [];
        let contador = 0;
        let somaIdades = 0;
        let mediaIdades = 0;
        const posicaoPessoasMais25 = [];
        let maiorIdade = 0;
        const posicaoMaiorIdade = [];
        
            for(let i = 0; i < 8; i++) {
                let idades = Number(prompt(`Insira a idade da pessoa ${contador++}`));
                vetorIdades.push(idades);

                if(vetorIdades[i] > 25){
                    posicaoPessoasMais25.push(i);
                }

                somaIdades += vetorIdades[i];
            }
            mediaIdades = somaIdades/vetorIdades.length;

            maiorIdade = Math.max(...vetorIdades);

            for(let i = 0; i < vetorIdades.length; i++) {
                if(vetorIdades[i] === maiorIdade) {
                    posicaoMaiorIdade.push(i);
                }
            }
            alert(`As idades inseridas foram ${vetorIdades}`);
            alert(`A soma de todas as idades é ${somaIdades}, e a média é ${mediaIdades.toFixed(2)}`);

            let posicaoPessoasMais25_Plural_Ou_Singular = posicaoPessoasMais25.length > 1 ? `As pessoas com mais de 25 anos estão localizadas nos indices` : `A pessoa com mais de 25 anos está localizada no indice`;
            if(posicaoPessoasMais25.length === 0){
                alert(`Nenhuma das idades inseridas tem mais de 25 anos`);
            }else{
                alert(`${posicaoPessoasMais25_Plural_Ou_Singular} (${posicaoPessoasMais25})`);
            }

            alert(`A maior idade digitada foi ${maiorIdade} e ela apareceu ${posicaoMaiorIdade.length}x,localizada nos indices (${posicaoMaiorIdade})`);

            console.log(vetorIdades);
            console.log(`A soma das idades ${somaIdades}`);
            console.log(`A média das idades ${mediaIdades.toFixed(2)}`);
            console.log(`Posicao pessoa com mais de 25 anos (${posicaoPessoasMais25})`);
            console.log(`A maior idade digitada (${maiorIdade})`);
            console.log(`A posicao da pessoa com maior idade (${posicaoMaiorIdade})`);
            
    }