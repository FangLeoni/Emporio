const tipos = document.querySelector(".tipos");
const prods = document.querySelectorAll(".prod-container");

tipos.addEventListener('click', () =>{
    for(let i = 0; i < prods.length; i++){
        const [geral, unico] = prods[i].className.split(" ")

        if( geral == tipos.value || unico == tipos.value)
        {
            prods[i].classList.toggle("hidden")
        }
    }

})