function tabuada() {
    let tab = document.getElementById('seltab');
    const num = document.getElementById('num');

    tab.innerHTML = ``;
    for(let c = 0; c <= 10; c++){
        let n = Number(num.value);
        let item = document.createElement('option');
        item.text = `${n} x ${c} = ${n*c}`;
        item.value = `tab${c}`//!serve para facilitar o banco de dados
        tab.appendChild(item);
    
    }
}


