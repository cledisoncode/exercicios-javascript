const res = document.getElementById('res');
res.style.padding = '5px';

function limparLista(){
    res.innerHTML = '';
}

function listagem () {
    let nome = '';
    let sexo = '';
    let salario = 0;
    const vetorNomesFuncionario = [];
    const vetorSexoFuncionario = [];
    const vetorSalarioFuncionario = [];

    //!questionario
    for ( let i = 0; i < 5; i++){
        nome = prompt(`Digite o nome do funcionario`);
        vetorNomesFuncionario.push(nome);

        do {
            sexo = prompt(`Digite o sexo de ${nome} ('F' || 'M')`).toLowerCase();
            if (sexo !== 'f' && sexo !== 'm') {
                alert('Entrada inválida! Por favor, insira apenas "F" ou "M".');
            }
        } while (sexo !== 'f' && sexo !== 'm');
        vetorSexoFuncionario.push(sexo);

        do {
            salario = Number(prompt(`Digite o salário de ${nome} R$`));
            if (isNaN(salario) || salario <= 0) {
                alert('Por favor, insira um valor numérico maior que zero.');
            }
        } while (isNaN(salario) || salario <= 0);
        vetorSalarioFuncionario.push(salario);
    }
    console.log(vetorNomesFuncionario);
    console.log(vetorSalarioFuncionario);
    console.log(vetorSexoFuncionario);

    //!Separacao dos funcionarios entre homens e mulheres;
    const vetorMulheres = [];
    const vetorHomens = [];
    for(let i = 0; i < vetorNomesFuncionario.length; i++) {
        if(vetorSexoFuncionario[i] === 'f'){
            vetorMulheres.push(vetorNomesFuncionario[i]);
        } else {
            vetorHomens.push(vetorNomesFuncionario[i]);
        }
    }
    console.log(`Foram cadastradas ${vetorMulheres.length} funcionarias`);
    console.log(`Foram cadastrados ${vetorHomens.length} funcionarios`);

    if (vetorMulheres.length === 0) {
        res.innerHTML += `<p>Não foram cadastradas mulheres.</p>`;
    } else {
        //!filtragem  salario acima de 5000 das mulheres
        const vetorMulheresNomes_Salario_5000_Acima = [];
        const vetorMulheresSalario_5000_Acima = [];

        for (let i = 0; i < vetorNomesFuncionario.length; i++) {
            if ((vetorSexoFuncionario[i] === 'f') && (vetorSalarioFuncionario[i] > 5000)) {
                vetorMulheresNomes_Salario_5000_Acima.push(vetorNomesFuncionario[i]);
                vetorMulheresSalario_5000_Acima.push(vetorSalarioFuncionario[i]);
            }
        }

        if (vetorMulheresNomes_Salario_5000_Acima.length === 0) {
            res.innerHTML += `<p>Nenhuma mulher ganha mais de R$5000.00</p>`;
        } else {
            res.innerHTML += `<p>Lista de Mulheres que ganham mais de R$5000.00</p>`;
            res.innerHTML += `<p>------------------------</p>`
            for(let i = 0; i < vetorMulheresSalario_5000_Acima.length; i++) {
                res.innerHTML += `<p>${vetorMulheresNomes_Salario_5000_Acima[i]} -- R$${vetorMulheresSalario_5000_Acima[i].toFixed(2)}</p>`
            }
            res.innerHTML += `<p>------------------------</p>`
        }
    }
}