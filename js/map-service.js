var gMap;
export const mapService = {
    initMap,
    getLoctionUser,
    // gMap
}

function initMap(elMap, pos = { lat: 29.550360, lng: 34.952278 }) {

    gMap = new google.maps.Map(elMap, {
        center: pos,
        zoom: 8
    });

    var marker = new google.maps.Marker({
        position: gMap.center,
        map: gMap,
    });
}

function getLoctionUser(elMap) {

    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        }
        initMap(elMap, pos);
    });
}

