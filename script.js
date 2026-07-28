let carrinho = [];



const kits = {

    deus: {
        titulo: "👑 VIP Deus",
        imagem: "assets/kit-deus.png",
        texto: `
        Kit Deus exclusivo<br><br>
        Full Netherite<br>
        Proteção IV<br>
        Inquebrável III<br>
        Elytra<br>
        64 Obsidians<br>
        10 Tokens Imortalidade<br>
        5x 64 Foguetes<br>
        80 Ender Pearls<br>
        32 Maçãs Douradas Encantadas<br>
        15 Maçãs Douradas<br>
        64 Cristais do Fim
        `
    },


    rei: {
        titulo: "🏰 VIP Rei",
        imagem: "assets/kit-rei.png",
        texto: `
        Kit Rei exclusivo<br><br>
        Full Diamante<br>
        Escudo<br>
        Proteção IV<br>
        Inquebrável III<br>
        32 Ender Pearls<br>
        2 Maçãs Douradas Encantadas<br>
        12 Maçãs Douradas<br>
        64 Bifes
        `
    },


    supremo: {
        titulo: "⚔ VIP Supremo",
        imagem: "assets/kit-supremo.png",
        texto: `
        Kit Supremo exclusivo<br><br>
        Full Netherite<br>
        Proteção IV<br>
        Inquebrável III<br>
        Escudo<br>
        64 Ender Pearls<br>
        64 Bifes<br>
        48 Maçãs Douradas<br>
        2 Maçãs Douradas Encantadas<br>
        2 Tokens Imortalidade
        `
    },


    guerreiro: {
        titulo: "🛡 VIP Guerreiro",
        imagem: "assets/kit-guerreiro.png",
        texto: `
        Kit Guerreiro exclusivo<br><br>
        Full Ferro<br>
        Escudo<br>
        Proteção IV<br>
        Inquebrável III<br>
        32 Ender Pearls<br>
        64 Bifes<br>
        16 Maçãs Douradas
        `
    }

};





function abrirInfo(vip){

    document.getElementById("popup").style.display = "flex";

    document.getElementById("tituloVip").innerHTML =
    kits[vip].titulo;

    document.getElementById("textoVip").innerHTML =
    kits[vip].texto;

    document.getElementById("imagemKit").src =
    kits[vip].imagem;

}



function fecharInfo(){

    document.getElementById("popup").style.display = "none";

}





function adicionarCarrinho(nome, preco, tipo){


    if(tipo === "vip"){

        carrinho = carrinho.filter(item => item.tipo !== "vip");


        carrinho.push({

            nome:nome,
            preco:preco,
            tipo:"vip",
            quantidade:1

        });


    } else {


        let item = carrinho.find(produto => produto.nome === nome);


        if(item){

            item.quantidade++;

        } else {


            carrinho.push({

                nome:nome,
                preco:preco,
                tipo:"servico",
                quantidade:1

            });

        }

    }


    atualizarCarrinho();

}





function removerCarrinho(nome){

    carrinho =
    carrinho.filter(item => item.nome !== nome);

    atualizarCarrinho();

}






function atualizarCarrinho(){


    let lista = document.getElementById("cart-items");

    let contador = document.getElementById("cart-count");

    let total = document.getElementById("cart-total");


    if(!lista) return;


    lista.innerHTML = "";


    let valor = 0;

    let quantidade = 0;



    if(carrinho.length === 0){

        lista.innerHTML =
        "<p>Seu carrinho está vazio.</p>";

    }



    carrinho.forEach(item => {


        valor += item.preco * item.quantidade;

        quantidade += item.quantidade;



        lista.innerHTML += `

        <div class="cart-item">

        <b>${item.nome}</b>

        <br>

        Quantidade: ${item.quantidade}

        <br>

        R$ ${(item.preco * item.quantidade)
        .toFixed(2)
        .replace(".",",")}

        <button onclick="removerCarrinho('${item.nome}')">
        ❌
        </button>

        </div>

        `;


    });



    contador.innerHTML = quantidade;


    total.innerHTML =
    "Total: R$ " + valor.toFixed(2).replace(".",",");


}







function abrirCarrinho(){

    const painel = document.getElementById("cart-panel");

    const fundo = document.getElementById("cart-overlay");


    painel.style.right = "0px";

    fundo.style.display = "block";

}





function fecharCarrinho(){

    const painel = document.getElementById("cart-panel");

    const fundo = document.getElementById("cart-overlay");


    painel.style.right = "-450px";

    fundo.style.display = "none";

}





function finalizarCompra(){

    alert("Checkout será conectado em breve!");

}





function copiarTexto(texto){

    navigator.clipboard.writeText(texto);

    alert("Copiado: " + texto);

}
