

function inserirNotas (){
    let vetorNotas = [ ];
    let contador = 0;
    let somaNotas = 0;
    let mediaNotas = 0;
    let alunosMediaAcima = 0;
    let maiorNota = 0;
    let maiorNotaPosicao = [];
    let alunos = [];

    for(let i = 0; i < 10; i++){
        let notas = Number(prompt(`Insira a nota do aluno ${contador++}:`));
        vetorNotas.push(notas);
        somaNotas += vetorNotas[i];
    }
    mediaNotas = somaNotas/vetorNotas.length;
    maiorNota = Math.max(...vetorNotas);
    
    for(let i = 0; i < vetorNotas.length; i++){
        if(vetorNotas[i] > mediaNotas){
            alunosMediaAcima += 1;
        }
        if(vetorNotas[i] === maiorNota) {
            maiorNotaPosicao.push(i);
            alunos.push(i);   
        }
    }

    let maiorNotaPosicaoTexto = maiorNotaPosicao.length > 1? `A maior Nota aparece ${maiorNotaPosicao.length} vezes, nos índices [${maiorNotaPosicao}]` : `A maior nota aparece ${maiorNotaPosicao.length} vez, no índice [${maiorNotaPosicao}]`

    alert(`As notas inseridas foram: [${vetorNotas}]`);
    alert(`A soma de todas as notas: ${somaNotas}`);
    alert(`A media das notas é: ${mediaNotas.toFixed(2)}`);
    alert(`A quantidade de alunos acima da média é: ${alunosMediaAcima}`);
    alert(`A maior nota inserida foi [${maiorNota.toFixed(1)}]`);
    alert(`${maiorNotaPosicaoTexto}`);

    let palavraAlunoPlural_Ou_Singular = alunos.length > 1? `A maior nota inserida foi a dos alunos${alunos},que foram respectivamente as notas: [${maiorNota}]` : `  A maior nota inserida foi a nota do aluno${alunos},que foi a nota [${maiorNota}]`;

    console.log(` notas inseridas: [${vetorNotas}]`);
    console.log(`soma das notas: ${somaNotas} `);
    console.log(`media das notas: ${mediaNotas.toFixed(2)}`);
    console.log(`alunos acima da média: ${alunosMediaAcima}`);
    console.log(`${palavraAlunoPlural_Ou_Singular}`);
    console.log(`A maior nota aparece ${maiorNotaPosicao.length}x, nos índices ${maiorNotaPosicao}`);
    
    


    
}