import Inventory from "../utils/inventoryClass.js"

export default class Model {
    constructor () {
        this.cowList = new Inventory;
        this.cowList.addCow("8990", "1", "Hereford", "10-10-2001", 8700);
        this.cowList.addCow("9013", "14", "Simmental", "19-05-2005", 7560);
        this.cowList.addCow("1156", "4", "Limousin", "21-09-2006", 8230);
        this.cowList.addCow("6729", "1", "Hereford", "08-11-1998", 8990);
        this.cowList.addCow("9012", "3", "Holstein", "14-04-1996", 6570);
        this.cowList.addCow("4456", "7", "Texas Longhorn", "10-03-1997", 4500);
    }
}