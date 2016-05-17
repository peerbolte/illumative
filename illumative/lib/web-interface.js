var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var controller;
var port;

function start(){
    
    //allow CORS
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });
    
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    app.use(express.static('public'));
    
    app.listen(port, function () {
        console.log('listening on port ' + port);
    });
}

app.get('/api/setallwhite', function(req, res){
   controller.setAllWhite();
   res.json({}); 
});

app.get('/api/setallblack', function(req, res){
   controller.setAllBlack();
   res.json({}); 
});

app.get('/api/setlight', function(req, res){
   if(!req.query.light) return req.json({err:'no light specified'});
   var light = req.query.light;
   var r = req.query.r || 0;
   var g = req.query.g || 0;
   var b = req.query.b || 0;
   var w = req.query.w || 0;

   controller.setLight(light, [r,g,b,w] );  
   
   res.json({}); 
});

exports = module.exports = function(_controller, _port){
    controller  = _controller;
    port = _port || 3000;
    return {
        start: start
    }
}