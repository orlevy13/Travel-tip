import { locationPreview } from './location-preview.js';
import { storageService } from './storage-service.js';
export const travelService = {
    getAddressData
}
const KEY = 'locations';
var savedLocations = loadLocations();
console.log(savedLocations, 'savedLocations');

// var gLocations = (savedLocations) ? savedLocations : [];
var gLocations = [];


function getAddressData(addressInput) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressInput}&key=AIzaSyC5yiijr1XG8ZhMCf4hH9xw8QQ5rPvcLH8`)
        .then(res => res.data.results)
        .then(res => createLocation(res[0]))
        .then(() => {
            return gLocations.map(loc => loc.getRowHTML()).join('');
        })
}

function createLocation(addressData) {
    var location = new locationPreview.Location(addressData.formatted_address, addressData.geometry.location);
    gLocations.push(location);
    saveLocations();
}

function saveLocations() {
    storageService.saveToStorage(KEY, gLocations);
}

function loadLocations() {
    return storageService.loadFromStorage(KEY);
}

// var home = new locationPreview.Location('eilat', { lat: 29.550360, lng: 34.952270 })