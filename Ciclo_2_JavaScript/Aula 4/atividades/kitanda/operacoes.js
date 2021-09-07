window.onload=function(){

	//produtos
	(()=>{

		let mostrarProdutosCliente=document.querySelector("div#content-produtos > ul#produtos");

		for(let idx in produtos){
			mostrarProdutosCliente.innerHTML+=`<li class="itemProduto" data-preco=${produtos[idx].prodPreco}>
			${produtos[idx].prodDesc}</li>`
		}

	})(produtos)


	//carrinho de compras
	const itemProduto=document.querySelectorAll("ul#produtos > li.itemProduto");
	const cestaDoCliente=document.querySelector("ul#cestaDoCliente");
	const mostraTotalCompra=document.querySelector("input#mostraTotalCompra");

	const armazenaItens=[];

	var totalPedido=0;

	itemProduto.forEach((item)=>{
		item.addEventListener("click",()=>{
			li=document.createElement("li");

			if(armazenaItens.indexOf(item.textContent) == -1){
				armazenaItens.push(item.textContent);
				cestaDoCliente.appendChild(li).textContent=item.textContent;

				totalPedido+=Number(item.dataset.preco);
				mostraTotalCompra.value=totalPedido.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

			}else{
				alert(`Este item ${item.textContent} já está na sua cesta`);
			}

		})
	})

}// fim