
document.querySelector('button').addEventListener('click',programaPrincipal);

function contador (i,f,c){
    console.log(`Valores: inicio(${i}), fim(${f}), incremento(${c})`);

    if(i < f){
        for(let cont = i; cont <= f; cont += c){
            console.log(`${cont}`);
            if( cont < f){
                console.log(' >> ');
            }
        }
    } else if(i > f){
        for(let cont = i; cont >= f; cont -= c){
            console.log(`${cont}`);
            if( cont > f){
                console.log(' >> ');
            }
        }
    }
    console.log('FIM');
    
}

function programaPrincipal ( ){
    let inicio = Number(prompt('Digite o valor de iníncio:'));
    let fim =Number(prompt('Digite o valor de fim:'));
    let incremento =Number(prompt('Digite o valor de incremento:'));

    if(isNaN(inicio) || isNaN(fim) || isNaN(incremento)){
        alert('ERRRO!, SOMENTE NÚMEROS SÃO PERMITIDOS');
    } else if( inicio === fim ){
        alert('O valor de início tem que ser diferente do valor do fim!');
    } else {
        contador(inicio,fim,incremento);
    }
}

