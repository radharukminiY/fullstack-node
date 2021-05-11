var express = require('express');
var hotelRouter = express.Router()
var mongodb = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';


function router(menu){
    hotelRouter.route('/')
    .get(function(req,res){
        mongodb.connect(url,{ useUnifiedTopology: true },function(err,connection){
          if(err){
            res.status(501).send('Error while connecting')
          }else{
            const dbo = connection.db('node');
            dbo.collection('hotels').find({}).toArray(function(err,data){
              if(err){
                res.status(501).send('Error while Fetching')
              }else{
                res.render('hotels',{title:'Hotel Page',hoteldata:data,menu:menu})
              }
            })
          }
        })
        //res.send(hotels)

    });

    hotelRouter.route('/details/:id')
        .get(function(req,res){
          	var id = req.params.id
          //  res.send('Hotel Details')
          console.log(id)
        			mongodb.connect(url,function(err,dc){
        				if(err){
        					res.status(501).send('Error Conneting DB')
        				}else{
        					const dbo = dc.db('node');
        					dbo.collection('restaurant').findOne({id:parseInt(id)},function(err,data){
        						if(err){
        							res.status(501).send('Unable to fetch Record')
        						}else{
        							//res.send(data)
        							res.render('restdetails',{title:'Restaurant Details Page',hotels:data, menu:menu})
        						}
        					})
        				}
        			})
              });

    return hotelRouter
}


module.exports = router;
