var express = require('express');
var solr = require('solr-client');
var client = solr.createClient({
  host:'192.168.7.162',
  port:8080,
  path:'/solr/custom'
});
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  /*var query = 'q=suggest:*l*&fl=hanzi&start=0&rows=10&sort='+"hanzi_weight+desc";
  client.get('query', query, function(err, obj){
    console.log("*********************************************************");
    if(err){
      console.log(err);
    }else{
      console.log(obj);
    }
  });*/
  res.render('index', { title: 'Express' });
});

module.exports = router;
