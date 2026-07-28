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


        texto.innerHTML = `

        <b>Kit Deus exclusivo:</b>
        <br><br>

        ⚔ Full Netherite<br>
        🛡 Proteção IV<br>
        🔨 Inquebrável III<br>
        🪽 Elytra<br>
        🟪 64 Obsidians<br>
        💀 10 Tokens Imortalidade<br>
        🚀 5x 64 Foguetes<br>
        👁 80 Ender Pearls<br>
        🍎 32 Maçãs Douradas Encantadas<br>
        🍏 15 Maçãs Douradas<br>
        💎 64 Cristais do Fim

        `;


    }




    if (vip === "rei") {


        titulo.innerHTML = "🏰 VIP Rei";


        texto.innerHTML = `

        <b>Kit Rei:</b>
        <br><br>

        💎 Full Diamante<br>
        🛡 Escudo<br>
        🛡 Proteção IV<br>
        🔨 Inquebrável III<br>
        👁 32 Ender Pearls<br>
        🍎 2 Maçãs Douradas Encantadas<br>
        🍏 12 Maçãs Douradas<br>
        🥩 64 Bifes

        `;


    }





    if (vip === "supremo") {


        titulo.innerHTML = "⚔ VIP Supremo";


        texto.innerHTML = `

        <b>Kit Supremo:</b>
        <br><br>

        ⚔ Full Netherite<br>
        🛡 Proteção IV<br>
        🔨 Inquebrável III<br>
        🛡 Escudo<br>
        👁 64 Ender Pearls<br>
        🥩 64 Bifes<br>
        🍏 48 Maçãs Douradas<br>
        🍎 2 Maçãs Douradas Encantadas<br>
        💀 2 Tokens Imortalidade

        `;


    }





    if (vip === "guerreiro") {


        titulo.innerHTML = "🛡 VIP Guerreiro";


        texto.innerHTML = `

        <b>Kit Guerreiro:</b>
        <br><br>

        ⚔ Full Ferro<br>
        🛡 Escudo<br>
        🛡 Proteção IV<br>
        🔨 Inquebrável III<br>
        👁 32 Ender Pearls<br>
        🥩 64 Bifes<br>
        🍏 16 Maçãs Douradas

        `;


    }



    popup.style.display = "flex";


}





function fecharInfo() {

    document.getElementById("popup").style.display = "none";

}
