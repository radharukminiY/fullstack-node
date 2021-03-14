var express=require('express');
var app= express();
var port = 9600;
var hotelRouter = require('./src/router/hotelRouter');
var cityRouter =require('./src/router/cityRouter');

app.get('/',(req,res) =>{
  res.send('Node js ')
});

app.use('/hotel',hotelRouter)
app.use('/city',cityRouter)

app.listen(port,function(err){
  if(err) throw err;
  console.log(`server is running on port ${port}`)
})
