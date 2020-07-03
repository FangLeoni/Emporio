const express = require('express')
const path = require('path')

const route = express.Router();

route.use('/',express.static(path.join(__dirname,'../','../','front-end')));

route.get('/', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','front-end','index.html'))

})

route.get('/produtos', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','front-end','páginas','pagina_produtos.html'))

})

route.get('/produtos/carrinho', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','front-end','páginas','carrinho.html'))

})

route.get('/contatos', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','front-end','páginas','contacts.html'))

})

route.get('/login', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','front-end','páginas','login.html'))

})

route.get('/cadastro', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','front-end','páginas','login_register.html'))

})

route.get('/secret', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','front-end','páginas','addproduto.html'))

})

module.exports = route;