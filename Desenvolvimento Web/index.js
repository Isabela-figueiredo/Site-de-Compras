import {CriarItemDaLista} from "./Scripts/CriarItemDaLista.js";

import verificarListaVazia from "./Scripts/verificarListaVazia.js";

// salva o elemento input dentro da variável inputItem
const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
// Adiciona um evento fofoqueiro que ficará "escutando" quando um evento de clique no "botaoAdicionar" for acionado
botaoAdicionar.addEventListener("click", (evento) => {
    //Evita qua a página atualize e todos os dados sejam perdidos
    evento.preventDefault();
    // Chama uma função que vai criar o item na lista
    const itemDaLista = CriarItemDaLista();
    //Adiciona esse item criado dentro da lista de compras
    listaDeCompras.appendChild(itemDaLista);
    //Chama a função que vai verificar sea lista está ou não vazia
    verificarListaVazia(listaDeCompras);
    inputItem.value = "";}) //Limpa o campo input aon clicar no botão

verificarListaVazia(listaDeCompras);