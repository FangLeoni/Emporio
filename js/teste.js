let carts = document.querySelectorAll(".add-cart");
let nome = document.querySelector(".prod-name");
let img = document.querySelectorAll(".produto");
let precoProduto = document.querySelectorAll(".precoProduto")
// .getAttribute("src")
let adicionador = document.querySelectorAll('.addItem');
	
	

let products = [
	{
		name: 'Bolinho Chinês',
		tag: 'bolinho-chines',
		price: 15,
		inCart: 0
	},
	{
		name: 'Macarronada',
		tag: 'Macarronada',
		price: 20,
		inCart: 0
	},
	{
		name: 'Donuts',
		tag: 'donuts',
		price: 10,
		inCart: 0
	},
	{
		name: 'Espinafre',
		tag: 'espinafre',
		price: 25,
		inCart: 0
	},
	{
		name: 'Cenoura',
		tag: 'cenoura',
		price: 15,
		inCart: 0
	},
	{
		name: 'UBE',
		tag: 'bolo-lars',
		price: 15,
		inCart: 0
	},
	{
		name: 'Banana',
		tag: 'banana',
		price: 15,
		inCart: 0
	},
	{
		name: 'Onion Rings',
		tag: 'onion-rings',
		price: 15,
		inCart: 0
	},
	{
		name: 'Ramen',
		tag: 'ramen',
		price: 15,
		inCart: 0
	},
	{
		name: 'Biscoitos Scooby',
		tag: 'biscoitos-scooby',
		price: 15,
		inCart: 0
	},
	{
		name: 'Lego de gelatina',
		tag: 'bolinho-chines',
		price: 15,
		inCart: 0
	},
	{
		name: 'Lasanha',
		tag: 'lasanha',
		price: 15,
		inCart: 0
	},
	{
		name: 'Hamburguer de Siri',
		tag: 'hamburuger-siri',
		price: 15,
		inCart: 0
	},
	{
		name: 'Pizza',
		tag: 'pizza',
		price: 15,
		inCart: 0
	},
	{
		name: 'Melancia',
		tag: 'melancia',
		price: 15,
		inCart: 0
	},
	{
		name: 'Mel',
		tag: 'mel',
		price: 15,
		inCart: 0
	},
	{
		name: 'Rattatoullie',
		tag: 'ratatoullie',
		price: 15,
		inCart: 0
	},
	{
		name: 'Chocolates Wonka',
		tag: 'choco-wonka',
		price: 15,
		inCart: 0
	},
	{
		name: 'Feijôes de todos os sabores',
		tag: 'feijoes',
		price: 15,
		inCart: 0
	},
	{
		name: 'Calzones',
		tag: 'calzone',
		price: 15,
		inCart: 0
	}
];

for (let i = 0; i < carts.length; i++){
	carts[i].addEventListener("click", () => {
		cartNumbers(products[i]);
		totalCoast(products[i]);
	})
	
}



// function onLoadCartNumbers(){
	// let productNumbers = localStorage.getItem('cartNumbers');
	
	// if(productNumbers){
		// document.querySelector('.cart span').textContent = productNumbers;
	
	// }
// }

function cartNumbers(product){
	
	let productNumbers = localStorage.getItem('cartNumbers');
	
	productNumbers = parseInt(productNumbers);
	
	if( productNumbers ){
		localStorage.setItem("cartNumbers", productNumbers + 1);
		// document.querySelector('.cart span').textContent = productNumbers + 1;
	}
	else{
		localStorage.setItem("cartNumbers", 1);                   
		// document.querySelector('.cart span').textContent = 1;
	}
	
	setItems(product);	
}

function setItems(product){
	
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	
	if(cartItems != null) {
		if(cartItems[product.tag] == undefined){
			cartItems = {
				...cartItems,
				[product.tag]: product
			}
		}
		cartItems[product.tag].inCart += 1;
	}else{
		product.inCart = 1;
		cartItems = {
			[product.tag]: product
		}
	}
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
	
}

function totalCoast(product){
	
	
	let cartCost = localStorage.getItem("totalCost");
	
	
	if(cartCost != null){
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	}else{
		localStorage.setItem("totalCost", product.price);
	}
	
	
}

function displayCart(){
	let cartItems = localStorage.getItem("productsInCart");
	
	
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector(".product-container");
	let contGeral = document.querySelector(".cont-geral")
	let cartCost = localStorage.getItem("totalCost");
	
	
	if(cartItems && productContainer){
		productContainer.innerHTML = "";
		Object.values(cartItems).map(item => {
			productContainer.innerHTML += `
			<div class="prod-container">
			<div class="label">
			<img class="produto" src="../produtos/${item.tag}.jpg">
			<h5 class="itemName">${item.name}</h5>
			<span class="line"></span>
			<h5>${item.price}.00</h5>
			<div class="quantity">
				<span>${item.inCart}</span>
			
			<div>
			<div class="total">
				${item.inCart * item.price}.00
			</div>
			</div>
			</div
			`
		});
		
		contGeral.innerHTML += `
			<div class="TotalContainer">
				<h4 class="TotalTitle">
					Total a pagar
				</h4>
				
				<h4 class="Total">
					${cartCost}.00
				</h4>
			</div>
		`
		
		
		
	}

}

displayCart();
// onLoadCartNumbers();			
















