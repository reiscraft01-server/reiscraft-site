let carrinho = [];


// ==========================
// KITS VIP
// ==========================

const kits = {


    ferro: {

        titulo: "🛡 VIP Ferro",

        imagem: "assets/kit-guerreiro.png",

        texto: `
        Kit Ferro exclusivo<br><br>

        Full Ferro<br>
        Escudo<br>
        Proteção IV<br>
        Inquebrável III<br>
        32 Ender Pearls<br>
        64 Bifes<br>
        16 Maçãs Douradas
        `

    },



    diamante: {

        titulo: "💎 VIP Diamante",

        imagem: "assets/kit-supremo.png",

        texto: `
        Kit Diamante exclusivo<br><br>

        Full Diamante<br>
        Proteção IV<br>
        Inquebrável III<br>
        Escudo<br>
        32 Ender Pearls<br>
        64 Bifes<br>
        12 Maçãs Douradas<br>
        1 Maçã Dourada Encantada
        `

    },



    netherite: {

        titulo: "⚔ VIP Netherite",

        imagem: "assets/kit-rei.png",

        texto: `
        Kit Netherite exclusivo<br><br>

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



    rei: {

        titulo: "👑 VIP Rei",

        imagem: "assets/kit-deus.png",

        texto: `
        Kit Rei exclusivo<br><br>

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
// ADICIONAR AO CARRINHO
// ==========================


function adicionarCarrinho(nome, preco, tipo){


    let ehVip =
    tipo === "vip" ||
    nome.toLowerCase().includes("vip");



    // ==================
    // VIP
    // ==================

    if(ehVip){


        // remove qualquer VIP anterior

        carrinho = carrinho.filter(item => item.tipo !== "vip");



        carrinho.push({

            nome:nome,

            preco:preco,

            tipo:"vip",

            quantidade:1

        });


    }



    // ==================
    // SERVIÇOS
    // ==================

    else {


        let produto =
        carrinho.find(item => item.nome === nome);



        if(produto){


            produto.quantidade++;


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







// ==========================
// ALTERAR QUANTIDADE
// ==========================


function alterarQuantidade(nome, valor){


    let produto =
    carrinho.find(item => item.nome === nome);



    if(!produto) return;



    if(produto.tipo === "vip"){

        return;

    }



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


    carrinho = carrinho.filter(item => item.nome !== nome);


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



        if(item.nome.includes("VIP Rei")){

            imagem = "assets/vip-deus.png";

        }

        else if(item.nome.includes("VIP Netherite")){

            imagem = "assets/vip-rei.png";

        }

        else if(item.nome.includes("VIP Diamante")){

            imagem = "assets/vip-supremo.png";

        }

        else if(item.nome.includes("VIP Ferro")){

            imagem = "assets/vip-guerreiro.png";

        }

        else if(item.nome.includes("Home")){

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



            ${
            item.tipo === "servico"

            ?

            `

            <button onclick="alterarQuantidade('${item.nome}',-1)">
            ➖
            </button>


            <button onclick="alterarQuantidade('${item.nome}',1)">
            ➕
            </button>


            `

            :

            ""

            }



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



    contador.innerHTML = quantidade;



    total.innerHTML =

    "Total: R$ " +

    valorTotal
    .toFixed(2)
    .replace(".",",");



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



    alert("Checkout será conectado em breve!");

}








// ==========================
// COPIAR IP
// ==========================


function copiarTexto(texto){


    navigator.clipboard.writeText(texto);


    alert("Copiado: " + texto);


}
