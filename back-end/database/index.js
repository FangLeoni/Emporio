const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors')

// const database = path.join(__dirname,'database.json' );
// const content = require('./database.json').products

const mysql = require('mysql');



// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'emporio'
  });

// Connect
db.connect((err)=>{
    if(err){    
        console.log(err);
    }
    console.log('MySql connected...')

})

const app = express();

app.use(express.json());
app.use(cors())

//==========FUNCIONANDO==PEGAR==============//
app.get('/products',(req,res)=>{
    let sql = 'SELECT * FROM products';
    let query = db.query(sql, (err ,results) => {
        if(err) throw err;
        console.log(results);
        // res.send("Ola")
        res.send(results)
    })

    

})


//=======FUNCIONANDO==ADICIONAR============//
app.post('/products/add',(req,res)=>{

    let post = {name: req.body.name, img: req.body.img, price: req.body.price , inCart: 1};
    let sql = 'INSERT INTO products SET ?';
    let query = db.query(sql, post, (err ,result) => {

        if(err) throw err;
        // console.log(result);
        res.send('post 1 added...')
    })
});


//=========DELETAR==FUNCIONANDO========//
app.delete('/products/delete',(req,res)=>{
    
    let sql = `DELETE FROM products WHERE id = ${req.body.id}`;
    let query = db.query(sql, (err ,result) => {
        if(err) throw err;
        // console.log(result);
        res.send('Post deleted...')
    })

});

//=========ATUALIZADO==FUNCIONANDO========//
app.put("/products/update",(req,res)=>{
    let sql1 = `SELECT inCart FROM products WHERE id = ${req.body.id}`;
    let query1 = db.query(sql1, (err ,result) => {
        if(err) throw err;
        else{
            let newInCart = req.body.inCart + result[0].inCart;
            let sql = `UPDATE products SET inCart = ${newInCart} WHERE id = ${req.body.id}`;
            let query = db.query(sql, (err ,result) => {
            if(err) throw err;
            // console.log(result);
            res.send('Post updated...')
            })
        }
        
        
    })
    

    

    // for(let j = 0; j < content.length; j++){
        
    //     if(req.body.name === content[j].name){
    //         req.body.inCart += content[j].inCart
    //         fs.readFile(database,'utf8',(err,data)=>{
    //             if(err) throw err;
    //             else{
    //                 let productsJSON = JSON.parse(data);
    //                 productsJSON.products.splice([j],1)
    //                 productsJSON.products.push(req.body)
    //                 let json2 = JSON.stringify(productsJSON,null, 2);

    //                 fs.writeFile(database,json2,'utf8',(err)=>{
    //                     if(err) throw err
    //                     else{
    //                         console.log('Produto atualizado')
    //                         res.send("Produto Atualizado")
    //                     }
    //                 });
    //             }
    //         });
    //     }
    // }
});


app.listen(5000);