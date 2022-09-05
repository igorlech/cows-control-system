import Cow from "./cowClass.js";

export default class Inventory {
    constructor() {
        this.cows = [];
    }

    addCow(registrationNumber, stallNumber, breed, birthday, lastYearProd) {
        const newCow = new Cow(registrationNumber, stallNumber, breed, birthday, lastYearProd);
        this.cows.push(newCow);
    }

    getCow(registrationNumber) {
        for (const cow of this.cows) {
            if (registrationNumber === cow.registrationNumber) {
                return cow;
            }
        }

        // The value null represents the intentional absence of the object value
        return null;
    }

    search(idealCow) {
        // Destructuring
        const {registrationNumber, stallNumber, breed, birthday, lastYearProd} = idealCow;
        console.log(stallNumber, breed, lastYearProd)
        console.log(idealCow)
        for (const cow of this.cows) {
            if (cow.stallNumber === stallNumber && cow.breed === breed && cow.lastYearProd <= lastYearProd) {
                return cow;
            }
        }

        return null;
    }

    allCows() {
        return this.cows;
    }

    deleteCow(rn) {
        const index = this.cows.map(cow => cow.registrationNumber).indexOf(rn);
        this.cows.splice(index, 1); // Removes guitar from guitar object list
    }
}