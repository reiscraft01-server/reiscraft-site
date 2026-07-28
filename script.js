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


        lista.innerHTML =

        `
        <p>
        🗝️ Seu baú está vazio...
        </p>
        `;


    }



    carrinho.forEach(item => {



        valorTotal += item.preco * item.quantidade;


        quantidade += item.quantidade;



        let imagem = "";



        if(item.nome.includes("VIP Deus")){

            imagem = "assets/vip-deus.png";

        }

        else if(item.nome.includes("VIP Rei")){

            imagem = "assets/vip-rei.png";

        }

        else if(item.nome.includes("VIP Supremo")){

            imagem = "assets/vip-supremo.png";

        }

        else if(item.nome.includes("VIP Guerreiro")){

            imagem = "assets/vip-guerreiro.png";

        }

        else if(item.nome.includes("Home")){

            imagem = "assets/home.png";

        }

        else if(item.nome.includes("desban")){

            imagem = "assets/desban.png";

        }



        lista.innerHTML +=


        `

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
