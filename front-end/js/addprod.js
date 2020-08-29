const deletar = document.querySelector('.fechar');
var $lista = document.querySelector('ul');
var $valor = document.querySelector('#valor');
var $produto = document.querySelector('#produto');
var $botao = document.querySelector('#btn');
deletar.addEventListener('click',()=>{
    popup.style.display="none"
})
  $botao.addEventListener('click', addProduto);
  $botao.addEventListener('click',addValor )
//Add Produto
  function addProduto(){
    var item = '<li>' + $produto.value + '</li>';
      $produto.value = '';
      $produto.focus(); 
       
  }

  $produto.value = "";
  
  //Add Valor
  function addValor(){
    
     console.log(parseFloat(typeof(valor.value)))
     var item = '<li>' + $valor.value + '</li>';
       $valor.value = '';
       $valor.focus();  
  } 
  

 $valor.value = "";
  
  function checkNumber(valor) {
    var regra = /[0-9]/;
    if(valor.value == ""){}
   { if (valor.match(regra)) {
      alert("Produto adicionado");
    }else{
      alert("Permitido somente números positivos!");
    }}

  };