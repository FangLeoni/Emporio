const express = require('express');
const path = require('path');
const fs = require('fs');

const database = path.join(__dirname,'database.json' );
const content = require('./database.json').users

const app = express();

app.use(express.json());


//==========FUNCIONANDO==PEGAR==============//
app.get('/users',(req,res)=>{
    res.json(content);
})


//=======FUNCIONANDO==ADICIONAR============//
app.post('/users/add',(req,res)=>{

    fs.readFile(database,'utf8',(err,data)=>{
        if(err) throw err;
        else{
            let usersJSON = JSON.parse(data);
            usersJSON.users.push(req.body);
            let json = JSON.stringify(usersJSON,null, 2);
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
app.delete('/users/delete',(req,res)=>{
    for(let j = 0; j < content.length; j++){
        
        if(req.body.cpf === content[j].cpf){

            fs.readFile(database,'utf8',(err,data)=>{
                if(err) throw err;
                else{
                    let usersJSON = JSON.parse(data);
                    usersJSON.users.splice([j],1)
                    let json2 = JSON.stringify(usersJSON,null, 2);
                    fs.writeFile(database,json2,'utf8',(err)=>{
                        if(err) throw err
                        else{
                            console.log('Usuario deletado')
                            res.send("Deletado")
                        }
                    });
                }
            });
        }
    }
});

app.listen(5000);