var express = require('express');
var hotelRouter = express.Router()
var mongodb = require('mongodb').MongoClient;
var url = 'mongodb+srv://adminradha:rukku558@cluster0.g5sih.mongodb.net/hoteldata?retryWrites=true&w=majority';
var DATABASE_NAME = "hoteldata";

function router(menu){
    hotelRouter.route('/')
    .get(function(req,res){
        mongodb.connect(url,function(err,connection){
           useNewUrlParser: true;
          if(err){
            res.status(501).send('Error while connecting')
          }else{
            const dbo = connection.db('nodefullsatack');
            dbo.collection('hoteldata').find({}).toArray(function(err,data){
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

    hotelRouter.route('/details')
        .get(function(req,res){
            res.send('Hotel Details')
    });

    return hotelRouter
}


module.exports = router;
