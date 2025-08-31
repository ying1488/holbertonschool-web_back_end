import Building from "./5-building.js";

export default class SkyHighBuilding extends Building {
constructor(sqft, floors){
    if (typeof sqft !== 'number'){
        throw new TypeError('sqft must be a number');
        }
    if (typeof floors !== 'number'){
        throw new TypeError('floors must be a number');
        }
    super(sqft);
    this._floors = floors;
    }
    get floors(){
        return this._floors;
    }

    evacuationWarningMessage(){
        return `Evacuate slowly the ${this._floors} floors`;
    }
};