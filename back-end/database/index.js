const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors')

const database = path.join(__dirname,'database.json' );
const content = require('./database.json').products

const app = express();

app.use(express.json());
app.use(cors())

//==========FUNCIONANDO==PEGAR==============//
app.get('/products',(req,res)=>{
    
    res.send(content)
    console.log(content)
})


//=======FUNCIONANDO==ADICIONAR============//
app.post('/products/add',(req,res)=>{


    fs.readFile(database,'utf8',(err,data)=>{
        if(err) throw err;
        else{
            let productsJSON = JSON.parse(data);
            productsJSON.products.push(req.body);
            let json = JSON.stringify(productsJSON,null, 2);
            fs.writeFile(database,json,'utf8',(err)=>{
                if(err) throw err
                else{
                    console.log('Arquivo atualizado')
                }
            });
        }
        
    });
    console.log("Foi")
    res.send(req.body);
});


//=========DELETAR==FUNCIONANDO========//
app.delete('/products/delete',(req,res)=>{
    for(let j = 0; j < content.length; j++){
        
        if(req.body.name === content[j].name){

            fs.readFile(database,'utf8',(err,data)=>{
                if(err) throw err;
                else{
                    let productsJSON = JSON.parse(data);
                    productsJSON.products.splice([j],1)
                    let json2 = JSON.stringify(productsJSON,null, 2);
                    fs.writeFile(database,json2,'utf8',(err)=>{
                        if(err) throw err
                        else{
                            console.log('Produto deletado')
                            res.send("Deletado")
                        }
                    });
                }
            });
        }
    }
});

app.put("/products/update",(req,res)=>{
    for(let j = 0; j < content.length; j++){
        
        if(req.body.name === content[j].name){
            req.body.inCart += content[j].inCart
            fs.readFile(database,'utf8',(err,data)=>{
                if(err) throw err;
                else{
                    let productsJSON = JSON.parse(data);
                    productsJSON.products.splice([j],1)
                    productsJSON.products.push(req.body)
                    let json2 = JSON.stringify(productsJSON,null, 2);

                    fs.writeFile(database,json2,'utf8',(err)=>{
                        if(err) throw err
                        else{
                            console.log('Produto atualizado')
                            res.send("Produto Atualizado")
                        }
                    });
                }
            });
        }
    }
});


app.listen(5000);