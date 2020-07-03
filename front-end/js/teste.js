// let carts = document.querySelectorAll(".add-cart");
	

// for (let i = 0; i < carts.length; i++){
// 	carts[i].addEventListener("click", () => {
// 		cartNumbers(products[i]);
// 		totalCoast(products[i]);
// 	})
	
// }

// function cartNumbers(product){
	
// 	let productNumbers = localStorage.getItem('cartNumbers');
	
// 	productNumbers = parseInt(productNumbers);
	
// 	if( productNumbers ){
// 		localStorage.setItem("cartNumbers", productNumbers + 1);
		
// 	}
// 	else{
// 		localStorage.setItem("cartNumbers", 1);                   
		
// 	}
	
// 	setItems(product);	
// }

// function setItems(product){
	
	// let cartItems = localStorage.getItem("productsInCart");
	// cartItems = JSON.parse(cartItems);
	
	// if(cartItems != null) {
	// 	if(cartItems[product.tag] == undefined){
	// 		cartItems = {
	// 			...cartItems,
	// 			[product.tag]: product
	// 		}
	// 	}
	// 	cartItems[product.tag].inCart += 1;
	// }else{
	// 	product.inCart = 1;
	// 	cartItems = {
	// 		[product.tag]: product
	// 	}
	// }
	// localStorage.setItem("productsInCart", JSON.stringify(cartItems));
	
// }

// function totalCoast(product){
	
	
// 	let cartCost = localStorage.getItem("totalCost");
	
	
// 	if(cartCost != null){
// 		cartCost = parseInt(cartCost);
// 		localStorage.setItem("totalCost", cartCost + product.price);
// 	}else{
// 		localStorage.setItem("totalCost", product.price);
// 	}
	
	
// }

// function displayCart(){
// 	let cartItems = localStorage.getItem("productsInCart");
	
	
// 	cartItems = JSON.parse(cartItems);
// 	let productContainer = document.querySelector(".product-container");
// 	let contGeral = document.querySelector(".cont-geral")
// 	let cartCost = localStorage.getItem("totalCost");
	
	
// 	if(cartItems && productContainer){
// 		productContainer.innerHTML = "";
// 		Object.values(cartItems).map(item => {
// 			productContainer.innerHTML += `
// 			<div class="prod-container">
// 			<div class="label">
// 			<img class="produto" src="../produtos/${item.tag}.jpg">
// 			<h5 class="itemName">${item.name}</h5>
// 			<span class="line"></span>
// 			<h5>${item.price}.00</h5>
// 			<div class="quantity">
// 				<span>${item.inCart}</span>
			
// 			<div>
// 			<div class="total">
// 				${item.inCart * item.price}.00
// 			</div>
// 			</div>
// 			</div
// 			`
// 			contGeral.innerHTML += `
// 			<div class="TotalContainer">
// 				<h4 class="TotalTitle">
// 					Total a pagar
// 				</h4>
				
// 				<h4 class="Total">
// 					${cartCost}.00
// 				</h4>
// 			</div>
// 		`
// 		});
		
		
		
		
		
// 	}

// }

// displayCart();
// onLoadCartNumbers();			












