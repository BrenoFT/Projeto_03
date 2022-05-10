window.onload = function(){
    
    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.Latlng(-27.648598,-48.577423),
            scrollWheel:false,
            zoom:12,
            MapType:google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    initialize();

}