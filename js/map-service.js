export const mapService  = {
    initMap,
    getLoctionUser,
}

function initMap(elMap , pos={ lat: 29.550360, lng: 34.952278 }){

    var map = new google.maps.Map(elMap, {
        center: pos,
        zoom: 8
    });

    var marker = new google.maps.Marker({
        position: map.center,
        map: map,
    });

}

function getLoctionUser(elMap) {
   
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
            lat : position.coords.latitude,
            lng : position.coords.longitude,
        }
        initMap(elMap , pos);
    });
}

