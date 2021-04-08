const express= require('express');
const app = express();
const fs= require('fs');

app.get('/', function(req, res){
res.send("Its working");
})

app.listen(3000, function(){
    console.log('server is started');
})