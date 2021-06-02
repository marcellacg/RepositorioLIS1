
function MyList(valor, texto) {
    for (i = 1; i < valor+1; i++){
        var itemLista = document.createElement("li");
        var textinho = document.createTextNode(texto + " " + i);
        itemLista.appendChild(textinho);
        document.getElementById("MyList").appendChild(itemLista);
    }
}

MyList(5, "Item");