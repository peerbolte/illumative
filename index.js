var illumative = require('./illumative');

illumative.scan('10.0.0.1', function(err, ip){
	console.log(err, ip);
});

//connect to enttec controller 
illumative.controller.connect('10.7.125.152');

//welcome blink 
illumative.controller.setAllWhite();
setTimeout(illumative.controller.setAllBlack, 200);
setTimeout(illumative.controller.setAllWhite, 400);
setTimeout(illumative.controller.setAllBlack, 600);

//set single light to RGBW 
//illumative.controller.setLight(0, [255,0,0,1]);

var webInterface = illumative.web(illumative.controller, 3000);
webInterface.start();