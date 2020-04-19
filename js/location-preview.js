import { utils } from './utils.js';
import { mapService } from './map-service.js';

class Location {
    constructor(name, pos) {
        this.id = utils.makeId();
        this.name = name;
        this.pos = pos;
        this.weather = null;
        this.marker = new google.maps.Marker({
            position: pos,
            map: mapService.gMap,
            visible: true//TODO: on delete toggle visibillity
        });
    }
    toString() {
        return `Location: ${this.name}`;
    }
    setName(name) {//this is only neccessary thanks to the name validation(?)
        if (!name) return;
        this.name = name;
    }
    getRowHTML() {
        return `<tr>
        <td>${this.id}</td>
        <td>${this.name}</td>
        <td>HOT</td>
        <td><button>Delete</button>
            <button>Update</button>
        </td>
        </tr>`;
    }
}
export const locationPreview = { Location }