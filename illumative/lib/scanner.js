var exec = require('child_process').exec;

exports.scan = function(ipRange, callback){
    var child = exec('arp -a',function(err, stdout, sterr){
        //console.log(err, stdout, sterr );	
        
        if(stdout){
            var regExp = RegExp('(('+ ipRange.split('.')[0] + '.[^)]+))', 'g');
            //console.log(regExp);
            var lines = stdout.split('\n');
            var ips = [];
            for(var i = 0; i < lines.length; i++){
                if(lines[i].match(regExp) && lines[i].indexOf('incomplete') == -1 && lines[i].indexOf(ipRange) == -1){
                    ips.push(lines[i]);
                }
            }
            //var matches = lines.match(regExp);
            callback(err, ips);
        }
    });
}