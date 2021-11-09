var listaProdutos = [[0, 'Camiseta Azul', 'camiseta_azul.png', false], [1, 'Camiseta Branca', 'camiseta_branca.png', false], [2, 'Blusa Marrom', 'blusa_marrom.png', false], [3, 'Moletom Branco', 'moletom_branco.png', false],  [4, 'Moletom Rosa', 'moletom_rosa.png', false], [5, 'Vestido Preto', 'vestido_preto.png', false]];

var carrinho = [];

window.onload = function(){
    montarCardProdutos();
}

function montarCardProdutos(){

    document.getElementById("divProdutos").innerHTML = "";


    for(var i = 0; i < listaProdutos.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="div-card" >';
        conteudo += '<div class="div-card-img">';
        conteudo += '<img src="../img/' + listaProdutos[i][2] + '" />';
        conteudo += '</div>';
        conteudo += '<div class="div-card-descricao">';
        conteudo += listaProdutos[i][1];
        conteudo += '</div>';

        if(listaProdutos[i][3] == false)
        {
            conteudo += '<div class="div-card-comprar"  onclick="comprar(' + listaProdutos[i][0] + ')"  >';
            conteudo += 'Comprar';
            conteudo += '</div>';
        }
        else
        {
            conteudo += '<div class="div-card-comprar div-card-comprado"   >';
            conteudo += 'Comprado';
            conteudo += '</div>';
        }
        


        conteudo += '</div>';
        
        document.getElementById("divProdutos").innerHTML += conteudo;
    }
}

function comprar(id){

    listaProdutos[id][3] = true;
    
    carrinho.push(listaProdutos[id]);

    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));

    montarCardProdutos();

}

function mudaLogin() {
    window.location.href = "login.html";
}

function mudaCarrinho() {
    window.location.href = "carrinho.html";
}