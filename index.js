const express = require('express');
const app = express();
app.get('/contact', function(req,res){
    res.send("Hello nodejs")
})
app.listen(3001, function(){
    console.log("Example app listening on port 3001 !")
})