var carrinho = JSON.parse(window.localStorage.getItem("carrinho"));

window.onload = function(){
    montarCardProdutos();
}

function montarCardProdutos(){

    document.getElementById("divCarrinho").innerHTML = "";


    for(var i = 0; i < carrinho.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="div-card" >';
        conteudo += '<div class="div-card-img">';
        conteudo += '<img src="../img/' + carrinho[i][2] + '" />';
        conteudo += '</div>';
        conteudo += '<div class="div-card-descricao">';
        conteudo += carrinho[i][1];
        conteudo += '</div>';

        conteudo += '<div class="div-card-comprar div-card-comprado"   >';
        conteudo += 'Comprado';
        conteudo += '</div>';

        conteudo += '</div>';
        
        document.getElementById("divCarrinho").innerHTML += conteudo;
    }
}

function mudaLogin() {
    window.location.href = "login.html";
}