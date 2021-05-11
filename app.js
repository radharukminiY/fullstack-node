var express = require('express');
var app = express();
var port = process.env.PORT || 9002;
var morgan = require('morgan');
var chalk = require('chalk');
var menu = [
	{name:'Home', link:'/'},
	{name:'Hotels', link:'/hotels'},
	{name:'City', link:'/city'}
]

var hotelRouter = require('./src/routes/hotelRouter')(menu);
var cityRouter = require('./src/routes/cityRouter')(menu);

//logging
app.use(morgan('tiny'));

//Static File path
app.use(express.static(__dirname+'/public'))
//HTML
app.set('views', './src/views')
//View Engine
app.set('view engine', 'ejs');

app.get('/health',function(req,res){
    res.status(200).send('Health Check')
});

app.get('/',function(req,res){
    res.render('index',{menu})
});

app.use('/hotels',hotelRouter);
app.use('/city',cityRouter)


app.listen(port,function(err){
    if(err) throw err;
    else{
        console.log(chalk.blue('Server is running on port '+port));
    }
})
