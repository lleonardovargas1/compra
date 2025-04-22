const preco = {
    griezmann: 499.00,
    neyma: 1.00,
    messi: 299.00,
    cristianoRonaldo: 299.00,
    noronha: 99.00
};
 
const produtos = [
    {
        titulo: "griezmann",
        preco: preco.griezmann,
        imagem: "https://jpimg.com.br/uploads/2017/04/1897829755-griezmann-havia-afirmado-que-atletico-de-madrid-brigaria-contra-o-rebaixamento-na-temporada.jpg"
    },
    {
        titulo: "oneyma",
        preco: preco.neyma,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8jvT9aAJUPeexGgc4WTOpdc4Jld5qaW3FA&s"
    },
    {
        titulo: "messi",
        preco: preco.messi,
        imagem: "https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2025/04/messi-inter-miami-scaled-aspect-ratio-512-320.jpg"
    },
    {
        titulo: "cristiano",
        preco: preco.cristianoRonaldo, 
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhHe79aHGHO5SfYZ01rniGOn7--_yPBXC4HIlynkunrmLLU3rli-La4uyaHQq76-ywBUL6RDQ_qzZ4FxW39LM4ERCN9balNn4FJwRUQ"
    },
    {
        titulo: "noronha",
        preco: preco.noronha,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhHe79aHGHO5SfYZ01rniGOn7--_yPBXC4HIlynkunrmLLU3rli-La4uyaHQq76-ywBUL6RDQ_qzZ4FxW39LM4ERCN9balNn4FJwRUQ"
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
            <h2 class="preco"><b>R$ ${produto.preco.toFixed(2)}</b></h2>
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

adicionarProdutosAoContainer();



