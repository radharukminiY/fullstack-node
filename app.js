var express=require('express');
var app= express();
var port = 9600;
var menu=[
  {link:'/',name:'Home'}
  {link:'/hotel',name:'Hotels'}
  {link:'/city',name:'City'}
]
var hotelRouter = require('./controller/routes/hotelRouter');
var cityRouter =require('./controller/routes/cityRouter');

app.use(express.static(__dirname+'/public'))
app.set('views','./views');
app.set('view  engine','ejs');

app.get('/',(req,res) =>{
  res.render('index.ejs',{title:'Home Page',menu})
});

app.use('/hotel',hotelRouter)
app.use('/city',cityRouter)

app.listen(port,function(err){
  if(err) throw err;
  console.log(`server is running on port ${port}`)
});
