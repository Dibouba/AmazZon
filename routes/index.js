var express = require('express');
var router = express.Router();

var Products = [
  {
    name: "Apple watch",
    price: 300,
    image: "/images/apple-watch.png",

  }, {
    name: "Porte document",
    price: 76,
    image: "/images/porte-doc.png",

  }, {
    name: "DJI mavic air",
    price: 989,
    image: "/images/dji-mavic-air.png",

  }, {
    name: "Oculus",
    price: 342,
    image: "/images/oculus.png",

  }, {
    name: "Bose QC35",
    price: 155,
    image: "/images/bose-qc35.png",

  }, {
    name: "Xiaomi-m365",
    price: 674,
    image: "/images/xiaomi-m365.png",

  }, {
    name: "BRIG Eagle 380",
    price: 15500,
    image: "/images/BRIG-Eagle-380.png",

  }, {
    name: "Linda Razer",
    price: 897,
    image: "/images/linda.png",

  }, {
    name: "Fort 500",
    price: 67,
    image: "/images/fort-500.png",

  }, {
    name: "OnePlus 6",
    price: 540,
    image: "/images/one-plus6.png",

  }
]



router.get('/', function(req, res, next) {
  if(req.session.productCard==undefined){
    req.session.productCard=[];
  }

  res.render('index', {Products,productCard:req.session.productCard});
});
router.post('/form-post', function(req, res, next) {
  req.session.productCard.push(
    Products[req.body.postion],

  )
  res.render('index', {Products,productCard:req.session.productCard});
});

router.get('/basket', function(req, res, next) {

  res.render('basket',{productCard:req.session.productCard});
});
router.get('/delete', function(req, res, next) {
if(req.session.productCard!=''){
  req.session.productCard.splice(req.query.position,1)

}

  res.render('basket',{productCard:req.session.productCard});
});

module.exports = router;
