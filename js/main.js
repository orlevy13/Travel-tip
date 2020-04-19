
import {travelService} from './travel-service.js';
import {mapService} from './map-service.js';
    
const EL_MAP = document.querySelector('.map-container');
const EL_INPUT_ADDRESS = document.querySelector('[name="gotoLocation"]');

window.addEventListener('load',onInit)

function onInit(){
    
    mapService.initMap(EL_MAP);
    bindEvents()
}


function bindEvents(){
    
    document.querySelector('.my-location-btn')
    .addEventListener('click',()=>{
        mapService.getLoctionUser(EL_MAP)
    });

    document.querySelector('.go-btn').
    addEventListener('click',()=>{
        mapService.getAddressData(EL_INPUT_ADDRESS.value)});
    
}


