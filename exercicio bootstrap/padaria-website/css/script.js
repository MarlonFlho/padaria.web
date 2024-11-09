// Dados dos produtos da padaria com nome, preço e imagem
const produtos = [
    { id: 1, nome: "Pão de Queijo", preco: 3.00, imagem: "https://th.bing.com/th?id=OIP.rqHPHYFkzWaQ0PNcRk5FoQHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { id: 2, nome: "Coxinha", preco: 5.50, imagem: "https://th.bing.com/th?id=OIP.vXaYxakkYjiANp4Hwic3UwHaFd&w=290&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { id: 3, nome: "Empada", preco: 4.00, imagem: "https://th.bing.com/th/id/OIP.Ze4j_3a8li6z_JpZ-fAFLAHaD4?w=323&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 4, nome: "Donuts", preco: 6.00, imagem: "https://th.bing.com/th/id/OIP.AYOV9ZhIo2A2_lGyW1qqtgHaE8?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 5, nome: "Pães", preco: 0.50, imagem: "https://th.bing.com/th/id/OIP.m6dG_ByWEtBClxStVRBMkQHaE8?w=305&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7" }

];
  
  // Variável para armazenar o pedido
  let pedido = [];
  
  // Função para exibir os produtos no cardápio
  function exibirProdutos() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
  
    produtos.forEach(produto => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" class="product-image">
        <span>${produto.nome} - R$ ${produto.preco.toFixed(2)}</span>
        <button onclick="adicionarAoPedido(${produto.id})">Adicionar</button>
      `;
      productList.appendChild(productDiv);
    });
  }
  
  // Função para adicionar um produto ao pedido
  function adicionarAoPedido(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    pedido.push(produto);
    atualizarPedido();
  }
  
  // Função para atualizar a exibição do pedido
  function atualizarPedido() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
  
    let total = 0;
    pedido.forEach(item => {
      total += item.preco;
  
      const orderItem = document.createElement('div');
      orderItem.classList.add('order-item');
      orderItem.innerHTML = `
        <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
        <button onclick="removerDoPedido(${item.id})">Remover</button>
      `;
      orderList.appendChild(orderItem);
    });
  
    document.getElementById('total-price').innerText = `Total: R$ ${total.toFixed(2)}`;
  }
  
  // Função para remover um item do pedido
  function removerDoPedido(produtoId) {
    const index = pedido.findIndex(item => item.id === produtoId);
    if (index !== -1) {
      pedido.splice(index, 1);
    }
    atualizarPedido();
  }
  
  // Função para finalizar o pedido (simulação)
  function finalizeOrder() {
    if (pedido.length === 0) {
      alert('Seu pedido está vazio.');
    } else {
      alert('Pedido finalizado com sucesso!');
      pedido = [];
      atualizarPedido();
    }
  }
  
  // Inicializa a exibição dos produtos ao carregar a página
  document.addEventListener('DOMContentLoaded', exibirProdutos);
  