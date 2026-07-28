function copiarTexto(texto) {

    navigator.clipboard.writeText(texto);

    alert("Copiado com sucesso!");

}




function abrirInfo(vip) {


    let titulo = document.getElementById("tituloVip");
    let texto = document.getElementById("textoVip");
    let popup = document.getElementById("popup");



    if (vip === "deus") {

        titulo.innerHTML = "👑 VIP Deus";

        texto.innerHTML =
        `
        ✔ Kit Deus exclusivo<br>
        ✔ Equipamentos especiais<br>
        ✔ Tag VIP no servidor<br>
        ✔ Benefícios máximos do reino
        `;

    }



    if (vip === "rei") {

        titulo.innerHTML = "🏰 VIP Rei";

        texto.innerHTML =
        `
        ✔ Kit Rei<br>
        ✔ Vantagens dentro do servidor<br>
        ✔ Mais recursos para evolução<br>
        ✔ Benefícios exclusivos
        `;

    }




    if (vip === "supremo") {

        titulo.innerHTML = "⚔ VIP Supremo";

        texto.innerHTML =
        `
        ✔ Kit Supremo<br>
        ✔ Equipamentos avançados<br>
        ✔ Recursos especiais<br>
        ✔ Grande vantagem na jornada
        `;

    }





    if (vip === "guerreiro") {

        titulo.innerHTML = "🛡 VIP Guerreiro";

        texto.innerHTML =
        `
        ✔ Kit Guerreiro<br>
        ✔ Ajuda no início da aventura<br>
        ✔ Recursos extras<br>
        ✔ Primeiro passo no reino
        `;

    }



    popup.style.display = "flex";

}





function fecharInfo() {

    document.getElementById("popup").style.display = "none";

}
