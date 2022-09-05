export default class Cow {
    constructor(registrationNumber, stallNumber, breed, birthday, lastYearProd) {
        this.registrationNumber = registrationNumber;
        this.stallNumber = stallNumber;
        this.breed = breed;
        this.birthday = birthday;
        this.lastYearProd = lastYearProd;
    }

    getRegistrationNumber() {
        return this.registrationNumber;
    }

    getStallNumber() {
        return this.stallNumber;
    }

    getBreed() {
        return this.breed;
    }

    getBirthday() {
        return this.birthday;
    }

    getLastYearProd() {
        return this.lastYearProd;
    }
}