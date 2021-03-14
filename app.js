var express=require('express');
var app= express();
var port = 9600;
var hotelRouter = require('./src/router/hotelRouter');
var cityRouter =require('./src/router/cityRouter');

app.use(express.static(__dirname+'/public'))
app.set('views','./views');
app.set('view  engine','ejs');

app.get('/',(req,res) =>{
  res.render('index.ejs')
});

app.use('/hotel',hotelRouter)
app.use('/city',cityRouter)

app.listen(port,function(err){
  if(err) throw err;
  console.log(`server is running on port ${port}`)
})
