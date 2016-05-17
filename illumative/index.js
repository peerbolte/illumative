var controller = require('./lib/controller');
var scanner = require('./lib/scanner');
var web = require('./lib/web-interface');

exports = module.exports = (function(){
    return {
		controller: controller,
		scan: scanner.scan,
		web: web
    }
})()