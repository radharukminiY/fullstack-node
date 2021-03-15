var express=require('express');
var cityRouter =express.Router();

var city=[{
      "_id": 1,
      "city_name": "Delhi",
      "city": 1,
      "country_name": "India"
    },
    {
      "_id": 3,
      "city_name": "Pune",
      "city": 3,
      "country_name": "India"
    },
    {
      "_id": 2,
      "city_name": "Mumbai",
      "city": 2,
      "country_name": "India"
    }]


    cityRouter.route('/')
    .get((req,res) =>{
      //res.send(city)
      res.render('city',{title:'City Page'})
    })
    cityRouter.route('/details')
    .get((req,res) =>{
      res.send('city details')
    })

    module.exports= cityRouter
