let carrinho = [];


// ==========================
// KITS VIP - SAIBA MAIS
// ==========================

const kits = {

    ferro: {

        titulo: "🛡 VIP Ferro",

        imagem: "assets/kit-guerreiro.png",

        texto: `
        <b>Kit Ferro exclusivo</b><br><br>

        🛡 Full Ferro - Proteção IV<br>
        🛡 Escudo - Inquebrável III<br>
        ⚔ Ferramentas - Eficiência IV e Afiação IV<br><br>

        🎁 Recompensas:<br>
        4x Totem da Imortalidade<br>
        32x Pérola do End<br>
        64x Filé<br>
        16x Maçã Dourada
        `

    },


    diamante: {

        titulo: "💎 VIP Diamante",

        imagem: "assets/kit-supremo.png",

        texto: `
        <b>Kit Diamante exclusivo</b><br><br>

        💎 Full Diamante - Proteção III<br>
        🛡 Escudo - Inquebrável III<br>
        ⚔ Ferramentas - Eficiência III e Afiação III<br><br>

        🎁 Recompensas:<br>
        12x Maçã Dourada<br>
        32x Pérola do End<br>
        16x Diamantes<br>
        3x Maçã Dourada Encantada<br>
        1x Melhoria de Netherita<br>
        64x Filé
        `

    },


    netherite: {

        titulo: "⚔ VIP Netherite",

        imagem: "assets/kit-rei.png",

        texto: `
        <b>Kit Netherite exclusivo</b><br><br>

        ⚫ Full Netherite - Proteção IV<br>
        🛡 Escudo - Inquebrável III<br>
        ⚔ Ferramentas - Eficiência IV e Afiação IV<br><br>

        🔥 Mace<br>
        ⚔ Lança de Netherite Encantada<br>
        7x Cristal do End<br>
        5x Maçã Dourada Encantada<br>
        20x Maçã Dourada<br>
        64x Pérola do End<br>
        5 Packs de Foguete<br>
        16x Obsidian<br>
        5x Totem da Imortalidade<br>
        1x Élitro
        `

    },


    rei: {

        titulo: "👑 VIP Rei",

        imagem: "assets/kit-deus.png",

        texto: `
        <b>Kit Rei exclusivo</b><br><br>

        👑 Full Netherite - Full Enchant<br>
        🛡 Escudo - Full Enchant<br>
        ⚔ Ferramentas - Eficiência V e Afiação V<br><br>

        🎁 Recompensas:<br>
        32x Maçã Dourada<br>
        10x Maçã Dourada Encantada<br>
        32x Pérola do End<br>
        5 Packs de Foguete<br>
        32x Obsidian<br>
        10x Totem da Imortalidade<br>
        1x Élitro Full Enchant<br>
        Mace Full Enchant<br>
        Lança Full Enchant<br>
        16x Cristal do End
        `

    }

};



// ==========================
// POPUP SAIBA MAIS
// ==========================


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



// ==========================
// CARRINHO (SERVIÇOS)
// ==========================


function adicionarCarrinho(nome, preco, tipo){


    let produto =
    carrinho.find(item => item.nome === nome);



    if(produto){

        produto.quantidade++;

    }

    else {


        carrinho.push({

            nome:nome,

            preco:preco,

            tipo:tipo,

            quantidade:1

        });

    }


    atualizarCarrinho();

}
// ==========================
// ALTERAR QUANTIDADE
// ==========================


function alterarQuantidade(nome, valor){


    let produto =
    carrinho.find(item => item.nome === nome);



    if(!produto) return;



    produto.quantidade += valor;



    if(produto.quantidade <= 0){

        removerCarrinho(nome);

        return;

    }



    atualizarCarrinho();

}






// ==========================
// REMOVER ITEM
// ==========================


function removerCarrinho(nome){


    carrinho =
    carrinho.filter(item => item.nome !== nome);


    atualizarCarrinho();

}







// ==========================
// ATUALIZAR CARRINHO
// ==========================


function atualizarCarrinho(){


    let lista =
    document.getElementById("cart-items");


    let contador =
    document.getElementById("cart-count");


    let total =
    document.getElementById("cart-total");



    if(!lista) return;



    lista.innerHTML = "";



    let valorTotal = 0;

    let quantidade = 0;



    if(carrinho.length === 0){


        lista.innerHTML = `

        <p>
        🗝️ Seu baú está vazio...
        </p>

        `;

    }



    carrinho.forEach(item => {



        valorTotal += item.preco * item.quantidade;


        quantidade += item.quantidade;



        let imagem = "";



        if(item.nome.includes("Home")){

            imagem = "assets/home.png";

        }


        else if(item.nome.includes("desban")){

            imagem = "assets/desban.png";

        }




        lista.innerHTML += `


        <div class="cart-item">


            <img 
            src="${imagem}"
            class="cart-product-img"
            >


            <b>
            ${item.nome}
            </b>


            <br><br>


            Quantidade:
            ${item.quantidade}



            <br><br>


            <button onclick="alterarQuantidade('${item.nome}',-1)">
            ➖
            </button>


            <button onclick="alterarQuantidade('${item.nome}',1)">
            ➕
            </button>


            <br><br>


            💰 R$
            ${(item.preco * item.quantidade)
            .toFixed(2)
            .replace(".",",")}



            <br><br>


            <button onclick="removerCarrinho('${item.nome}')">

            🗑 Remover

            </button>



        </div>


        `;


    });



    if(contador){

        contador.innerHTML = quantidade;

    }



    if(total){

        total.innerHTML =
        "Total: R$ " +
        valorTotal
        .toFixed(2)
        .replace(".",",");

    }


}







// ==========================
// ABRIR / FECHAR CARRINHO
// ==========================


function abrirCarrinho(){


    document.getElementById("cart-panel")
    .style.right = "0px";


    document.getElementById("cart-overlay")
    .style.display = "block";


}



function fecharCarrinho(){


    document.getElementById("cart-panel")
    .style.right = "-450px";


    document.getElementById("cart-overlay")
    .style.display = "none";


}







// ==========================
// FINALIZAR COMPRA
// ==========================


function finalizarCompra(){


    if(carrinho.length === 0){


        alert("Seu baú está vazio!");

        return;

    }


    alert("Os serviços serão processados pela equipe Reis Craft.");

}








// ==========================
// COPIAR IP
// ==========================


function copiarTexto(texto){


    navigator.clipboard.writeText(texto);


    alert("Copiado: " + texto);


}
