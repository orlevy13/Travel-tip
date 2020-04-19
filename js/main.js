import { travelService } from './travel-service.js';
import { mapService } from './map-service.js';
import { locationPreview } from './location-preview.js';

const EL_MAP = document.querySelector('.map-container');
const EL_INPUT_ADDRESS = document.querySelector('[name="gotoLocation"]');

window.addEventListener('load', onInit)

function onInit() {

    mapService.initMap(EL_MAP);
    bindEvents()
}


function bindEvents() {

    document.querySelector('.my-location-btn')
        .addEventListener('click', () => {
            mapService.getLoctionUser(EL_MAP);
        });

    document.querySelector('.go-btn').
        addEventListener('click', () => {
            travelService.getAddressData(EL_INPUT_ADDRESS.value)
                .then(locationInfo => renderLocation(locationInfo))
        });

}


function renderLocation(locationData){
    renderTable(locationData.strHTMLs);
    mapService.initMap(EL_MAP ,locationData.position);
    document.querySelector('.curr-location-data').innerText = 'Location: ' + locationData.address;
}


function renderTable(strHTML) {
    document.querySelector('.locations-table').innerHTML = strHTML
}


