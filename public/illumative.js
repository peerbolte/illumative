var illumativeController = function (server) {
    
    server = server || 'http://localhost:3000'
    
    function get(url){
        
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.send();
    
    }
    
    function setLight(num, r, g, b, w) {

        r = r || 0;
        g = g || 0;
        b = b || 0;
        w = w || 0;
       
        get(server + '/api/setlight?r=' + r + '&g=' + g + '&b=' + b + '&w=' + w + '&light=' + num);

    }
    
    function setAllWhite(){
        get(server + '/api/setAllWhite');
    }
    
    function setAllBlack(){
        get(server + '/api/setAllBlack');
    }

    return {
        setAllBlack: setAllBlack,
        setAllWhite: setAllWhite,
        setLight: setLight
    }
}

