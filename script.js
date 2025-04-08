const produtos = [
    {
        titulo: "Notebook Dell Inspiron 15, Intel Core i5, 8GB RAM, 256GB SSD",
        preco: "R$ 3.499,00",
        imagem: "https://images.dell.com/is/image/DellContent//notebook-example.jpg"
    },
    {
        titulo: "Smart TV LG 50' 4K UHD, Inteligência Artificial",
        preco: "R$ 2.799,00",
        imagem: "https://images.lg.com/is/image/LGContent//smart-tv-example.jpg"
    },
    {
        titulo: "Fone de Ouvido Bluetooth JBL Tune 510BT",
        preco: "R$ 299,00",
        imagem: "https://images.jbl.com/is/image/JBLContent//fone-example.jpg"
    }
];
 
// Array para armazenar os produtos adicionados à cesta
const produtosNaCesta = [];
 
// Seleciona o container onde os produtos serão exibidos
const container = document.getElementById('container');
 
// Função para adicionar os produtos dinamicamente ao container
function adicionarProdutosAoContainer() {
    produtos.forEach((produto, index) => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');
        divProduto.innerHTML = `
            <img class="ps4" src="${produto.imagem}" alt="${produto.titulo}">
            <h1 class="ps4titulo">${produto.titulo}</h1>
            <h2 class="preco"><b>${produto.preco}</b></h2>
            <button class="comprar" data-index="${index}">Comprar</button>
        `;
        container.appendChild(divProduto);
    });
 
    // Adiciona evento de clique aos botões "Comprar"
    const botoesComprar = document.querySelectorAll('.comprar');
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            adicionarProdutoNaCesta(index);
        });
    });
}
 
// Função para adicionar um produto à cesta
function adicionarProdutoNaCesta(index) {
    const produto = produtos[index];
    produtosNaCesta.push(produto);
    atualizarListaC();
}
 
// Função para atualizar a exibição da listaC
function atualizarListaC() {
    const listaC = document.querySelector('.listaC');
 
    // Remove os itens antigos (exceto o header)
    const itensExistentes = listaC.querySelectorAll('.item-cesta');
    itensExistentes.forEach(item => item.remove());
 
    // Adiciona cada produto na lista
    produtosNaCesta.forEach((produto, index) => {
        const item = document.createElement('div');
        item.classList.add('item-cesta');
        item.innerHTML = `
            <p><strong>${produto.titulo}</strong></p>
            <p>${produto.preco}</p>
            <button class="remover" data-index="${index}">Remover</button>
        `;
        listaC.appendChild(item);
    });
 
    // Adiciona funcionalidade de remoção
    const botoesRemover = document.querySelectorAll('.remover');
    botoesRemover.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            produtosNaCesta.splice(index, 1); // Remove o produto do array
            atualizarListaC(); // Atualiza a exibição
        });
    });
}
 
// Adiciona os produtos ao carregar a página
adicionarProdutosAoContainer();