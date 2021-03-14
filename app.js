var express=require('express');
var app= express();
var port = 9600;

app.get('/',(req,res) =>{
  res.send('Node js ')
})



app.listen(port,function(err){
  if(err) throw err;
  console.log(`server is running on port ${port}`)
})
