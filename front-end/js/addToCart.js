const product = document.querySelectorAll(".produto")
const name = document.querySelectorAll(".prod-name")
const price = document.querySelectorAll(".precoProduto")
const addCart = document.querySelectorAll(".add-cart")

async function deleteFromCart(nome){
	
	let data = {
        "name":nome
    }
    options = {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
	}
	console.log(nome)
	await fetch("http://localhost:5000/products/delete",options)
}

async function addToCart(link,nome,preco){
	// if(num >= 1){

	// 	let data = {
	// 		"name":nome,
	// 		"img":link,
	// 		"price":preco,
	// 		"inCart":num
	// 	}
	// 	options = {
	// 		method: 'PUT',
	// 		body: JSON.stringify(data),
	// 		headers:{
	// 			'Content-Type': 'application/json'
	// 		}
	// 	}
		
	// 	await fetch("http://localhost:5000/products/update",options)
	// 	console.log(nome, num)


	// }
	// else{
    let data = {
        "name":nome,
        "img":link,
        "price":preco
        // "inCart":num
    }
    options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }
    
    await fetch("http://localhost:5000/products/add",options)
	console.log(nome)
	}
// }

// async function getCart(i){
// 	let cartItems = await fetch("http://localhost:5000/products").then((data) => data.json())
	
// 	let num = cartItems[i].inCart;
// 	num++;
// 	console.log(num)
	
// 	// else{
// 	// console.log("NÂO")
// 	// // addToCart(product[i].getAttribute("src"),name[i].innerText,price[i].innerText,num)
// 	// }
// 	let cartItems = localStorage.getItem("productsInCart");
// 	cartItems = JSON.parse(cartItems);
	
// 	if(cartItems != null) {
// 		if(cartItems[product.tag] == undefined){
// 			cartItems = {
// 				...cartItems,
// 				[product.tag]: product
// 			}
// 		}
// 		cartItems[product.tag].inCart += 1;
// 	}else{
// 		product.inCart = 1;
// 		cartItems = {
// 			[product.tag]: product
// 		}
// 	}
// 	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
// }

for (let i = 0; i < addCart.length; i++){
	
	let num = 0;
	addCart[i].addEventListener("click", () => {
		// getCart(i)
		num++;
		
		addToCart(product[i].getAttribute("src"),name[i].innerText,price[i].innerText)
		// console.log(i, product[i].getAttribute("src"),name[i].innerText,price[i].innerText);

	})
	addCart[i].addEventListener("mousedown",()=>{
		addCart[i].classList.add("add-cart-click")
		addCart[i].addEventListener("mouseup",()=>{
			addCart[i].classList.remove("add-cart-click")
		})
	})
	
}

function removeElement(el,nome) {
    if (confirm('Tem certeza que deseja deletar?')){
		el.parentNode.remove()
		
		deleteFromCart(nome);
    }
}

async function displayCart(){
	let cartItems = await fetch("http://localhost:5000/products").then((data) => data.json())
	
	let productContainer = document.querySelector(".product-container");
	
	if(productContainer){
		productContainer.innerHTML = "";
		Object.values(cartItems).map(item => {

			const div1 = document.createElement('div');
			const div2 = document.createElement('div');
			const span1 = document.createElement('span');
			const div4 = document.createElement('div');
			const div5 = document.createElement('div');
			const img = document.createElement('img');
			const h51 = document.createElement('h5');
			const h52 = document.createElement('h5');
			const span2 = document.createElement('span');
			const div6 = document.createElement('h5');
			const div7 = document.createElement('h5');

			div1.classList.add("prod-container");
			div2.classList.add("label");
			span1.classList.add("deleteTest");
			span1.innerText = "X";
			img.classList.add("produto");
			img.src =item.img;
			h51.classList.add("itemName");
			h51.innerHTML = item.name
			span2.classList.add("line")
			h52.innerHTML= item.price;
			div4.classList.add("quantity");
			div5.innerHTML = item.inCart;
			div6.classList.add("total");
			div7.innerHTML = item.inCart * item.price;
			productContainer.appendChild(div1);
			div1.appendChild(div2);
			div2.appendChild(span1);
			div2.appendChild(img);
			div2.appendChild(h51);
			div2.appendChild(span2);
			div2.appendChild(h52);
			div2.appendChild(div4);
			div4.appendChild(div5)
			div2.appendChild(div6);
			div6.appendChild(div7);

			span1.onclick = ()=> removeElement(span1,h51.innerText)

			
		});	
	}
}



displayCart();

// productContainer.innerHTML += `
			// <div class="prod-container">
            // <div class="label">
            // <span class="deleteTest" onclick="teste()" >X</span> 
			// <img class="produto" src="${item.img}">
			// <h5 class="itemName">${item.name}</h5>
			// <span class="line"></span>
            // <h5>${item.price}</h5>
            // <div class="quantity">
            //     <div>${item.inCart}</div>
            // </div>
            // <div class="total">
            //     <div>${item.inCart * item.price}</div>
            // </div>  
            // </div>
			// </div>
			// `
			// contGeral.innerHTML += `
			// <div class="TotalContainer">
			// 	<h4 class="TotalTitle">
			// 		Total a pagar
			// 	</h4>
				
			// 	<h4 class="Total">
			// 		${cartCost}
			// 	</h4>
			// </div>
		    // `