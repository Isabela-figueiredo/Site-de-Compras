import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
import verificarListaVazia from "./verificarListaVazia.js";

//Exporta a constante 'inputItem' para que ela possa ser usada em outros
export const inputItem = document.getElementById("input-item");
let contador = 0

const listaDeCompras = document.getElementById("lista-de-compras");

export function CriarItemDaLista() {
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const nomeItem = document.createElement("p");

    const inputCheckBox = document.createElement("input")
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
    containerItemDaLista.appendChild(inputCheckBox);

    inputCheckBox.addEventListener("click", function() {
        if (inputCheckBox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else{
            nomeItem.style.textDecoration = "none";
        }
    });

    nomeItem.innerText = inputItem.value;

    const botao = document.createElement("button")
    botao.classList.add= "botao-excluir";
    
    const iconeExcluir = document.createElement("i")
    iconeExcluir.className = "bi bi-trash3-fill"

    botao.style.cursor = "pointer";
    containerItemDaLista.appendChild(botao)
    botao.appendChild(iconeExcluir)

    botao.addEventListener("click", function(){
        const confirmacao = confirm("Deseja realmente deletar este item?");
        if (confirmacao) {
            itemDaLista.remove();
            alert("Item deletado");
            verificarListaVazia(listaDeCompras)
        }
    })

    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana();
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");

    itemDaLista.appendChild(itemData);

    return itemDaLista
}