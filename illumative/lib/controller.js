var artnet = require('artnet');

function connect(ip){
    artnet.connect(ip); 
}

function setAllWhite(){
	allWhite = [];
	for(var i = 0; i < (24*4); i++){
		allWhite.push(255);
	}
	setLights(allWhite);
}

function setAllBlack(){
	allBlack = [];
	for(var i = 0; i < (24*4); i++){
		allBlack.push(0);
	}
	setLights(allBlack);
}

function setLights(arr){
	artnet.set(1, arr, function () {
		//console.log("hoi")
	    //artnet.close();
	});
}

function setLight(num, arr){
	artnet.set(1+((num)*4), arr, function(){

	})
}

exports = module.exports = {
    connect: connect,
    setAllBlack: setAllBlack,
    setAllWhite: setAllWhite,
    setLight: setLight,
    setLights: setLights
}