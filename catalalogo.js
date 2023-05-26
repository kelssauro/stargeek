
const cards = document.querySelector(".cards");

carregarCatalogo();

function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    divcard.setAttribute("class", "card")
    if (dados == null){
        divcard.innerHTML = "<p> Nenhum item encontrado </p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        let divcard = document.createElement("div");
        divcard.setAttribute("class", "card")
        divcard.innerHTML = `
        <img src ="img/${elemento.foto}">
        <div class="icone">
        <img src="imagens/Bin.png" alt="" onclick="excluir(${indice})">
        <img src="imagens/Draw.png" alt="" onclick="editar(${indice})">
        </div>
        <p> ${elemento.nome}</p>
    
        `;
        cards.appendChild(divcard);

    });
}

function excluir(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    window.location.reload();

}

function editar(indice){
    var url ="cadastroitem.html?peditar=true&indice="+
    encodeURIComponent(indice);
    window.location.href = url;
    
}