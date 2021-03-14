var express=require('express');
var hotelRouter = express.Router();


var hotel=[{
      "_id": "4",
      "name": "The Ashtan Sarovar Portico",
      "city_name": "New Delhi",
      "city": "1",
      "locality": "Greenpark, New Delhi",
      "thumb": "https://i.ibb.co/TbVsznT/sarovar.jpg",
      "cost": 8399,
      "address": "C2, Green park Extension, Green Park Extn, Behind Gurudwara, Nr Greenpark Metro Station, New Delhi",
      "type": [
        {
          "roomtype": "3",
          "name": "Budget Room"
        },
        {
          "roomtype": "4",
          "name": "Semi Deluxe Room"
        },
        {
          "roomtype": "1",
          "name": "Deluxe Room"
        }]
      }
      ]

hotelRouter.route('/')
.get((req,res) =>{
  res.send(hotel)
})
hotelRouter.route('/details')
.get((req,res) =>{
  res.send('hotel details')
})

  module.exports= hotelRouter
