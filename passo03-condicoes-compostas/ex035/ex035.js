/* - Carros populares (aluguel de R$90 por dia)
- Até 100Km percorridos: R$0,20 por Km
- Acima de 100Km percorridos: R$0,10 por Km
- Carros de luxo (aluguel de R$150 por dia)
- Até 200Km percorridos: R$0,30 por Km
- Acima de 200Km percorridos: R$0,25 por Km
*/
function calcular(){
    var tipos_carro = document.getElementsByName("carros");
    var txtd = document.getElementsByTagName("input")[2];
    var txtkm = document.getElementById("km_percorridos");
    var res = document.querySelector("p#res");
    var img =  document.getElementById("foto");

    var dias_alugado = Number(txtd.value);
    var km_percorridos = Number(txtkm.value);

    //?CARRO POPULAR
    if(tipos_carro[0].checked){
        res.innerHTML = `Tipo do Carro: <strong>Carro Popular</strong>`
        var preco_dias_alugado = dias_alugado * 90;
        
        if(km_percorridos <= 100){
            var preco_km_percorridos = km_percorridos * 0.20;
            var preco_total = preco_dias_alugado + preco_km_percorridos;

            res.innerHTML += ` <p> Você alugou o veículo  por ${dias_alugado} dia(s) e percorreu com ele ${km_percorridos}km.Você irá pagar pelo aluguel do carro R$ ${preco_dias_alugado.toFixed(2)}, e pelos quilômetros percorridos R$ ${preco_km_percorridos.toFixed(2)}.Somando os dois, você irá pagar R$ ${preco_total.toFixed(2)}</p>`;

        }else if(km_percorridos > 100) {
            var preco_km_percorridos = 100 * 0.20 + (km_percorridos - 100) * 0.10;
            var preco_total = preco_dias_alugado + preco_km_percorridos;

            res.innerHTML += ` <p> Você alugou o veículo  por ${dias_alugado} dia(s) e percorreu com ele ${km_percorridos}km.Você irá pagar pelo aluguel do carro R$ ${preco_dias_alugado.toFixed(2)}, e pelos quilômetros percorridos R$ ${preco_km_percorridos.toFixed(2)}.Somando os dois, você irá pagar R$ ${preco_total.toFixed(2)}</p>`;
        }
        img.src = "imagens/carro-popular.jpg";

        //! CARRO LUXUOSO
    }else if(tipos_carro[1].checked){
        res.innerHTML = `Tipo do Carro: <strong>Carro de Luxo</strong>`
        var preco_dias_alugado = dias_alugado * 150;

        if(km_percorridos <= 200){
            var preco_km_percorridos = km_percorridos * 0.30;
            var preco_total = preco_dias_alugado + preco_km_percorridos;

            res.innerHTML += ` <p> Você alugou o veículo  por ${dias_alugado} dia(s) e percorreu com ele ${km_percorridos}km.Você irá pagar pelo aluguel do carro R$ ${preco_dias_alugado.toFixed(2)}, e pelos quilômetros percorridos R$ ${preco_km_percorridos.toFixed(2)}.Somando os dois, você irá pagar R$ ${preco_total.toFixed(2)}</p>`;

        }else if(km_percorridos > 200){
            var preco_km_percorridos = 200 * 0.30 + (km_percorridos - 200) * 0.25;
            var preco_total = preco_dias_alugado + preco_km_percorridos;

            res.innerHTML += ` <p> Você alugou o veículo  por ${dias_alugado} dia(s) e percorreu com ele ${km_percorridos}km.Você irá pagar pelo aluguel do carro R$ ${preco_dias_alugado.toFixed(2)}, e pelos quilômetros percorridos R$ ${preco_km_percorridos.toFixed(2)}.Somando os dois, você irá pagar R$ ${preco_total.toFixed(2)}</p>`;
        }
        img.src = "imagens/carro-luxuoso.jpg";
    }
}