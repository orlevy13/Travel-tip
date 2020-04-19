
import {travelService} from './travel-service.js';
import {mapService} from './map-service.js';
    
const EL_MAP = document.querySelector('.map-container')

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
    
}


