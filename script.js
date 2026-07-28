function copiarTexto(texto) {

    navigator.clipboard.writeText(texto);

    alert("Copiado com sucesso!");

}



const kits = {

    deus: {

        titulo: "👑 VIP Deus",

        imagem: "assets/kit-deus.png",

        texto: `
        Kit completo do maior rank do ReisCraft.
        <br><br>
        Equipamentos e recursos exclusivos para dominar o reino.
        `

    },


    rei: {

        titulo: "🏰 VIP Rei",

        imagem: "assets/kit-rei.png",

        texto: `
        Um kit poderoso para evoluir dentro do servidor.
        <br><br>
        Vantagens e equipamentos especiais.
        `

    },


    supremo: {

        titulo: "⚔ VIP Supremo",

        imagem: "assets/kit-supremo.png",

        texto: `
        Um dos maiores níveis de poder do ReisCraft.
        <br><br>
        Equipamentos avançados e recursos especiais.
        `

    },


    guerreiro: {

        titulo: "🛡 VIP Guerreiro",

        imagem: "assets/kit-guerreiro.png",

        texto: `
        O começo da sua jornada no reino.
        <br><br>
        Recursos essenciais para sobreviver e evoluir.
        `

    }

};





function abrirInfo(vip) {


    let titulo = document.getElementById("tituloVip");

    let texto = document.getElementById("textoVip");

    let popup = document.getElementById("popup");



    titulo.innerHTML = kits[vip].titulo;



    texto.innerHTML = `

    <img src="${kits[vip].imagem}" class="kit-img">

    <br><br>

    ${kits[vip].texto}

    `;



    popup.style.display = "flex";


}






function fecharInfo() {

    document.getElementById("popup").style.display = "none";

}
