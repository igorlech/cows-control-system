export default class Controller {
    initialize(model, view) {
        this.model = model;
        this.view = view;
    }

    buildTemplate(cow) {
        return `<div class="customerrow">
        <h1 class="cardheading">${cow.getRegistrationNumber()}</h1>
        <p class="cardelement">Stall number: ${cow.getStallNumber()}</p>
        <p class="cardelement">Breed: ${cow.getBreed()}</p>
        <p class="cardelement">Birth date:${cow.getBirthday()}</p>
        <p class="cardelement">Last year milk prod.: ${cow.getLastYearProd()}</p>
        <div><button type="button" id="${cow.getRegistrationNumber}">Delete</button></div>
        </div>`
    }

    rnSearch(registrationNumber) {
        const cow = this.model.cowList.getCow(registrationNumber);
        let template = "";

        if (cow !== null) {
            template = this.buildTemplate(cow);
        } else {
            template = `
            <tr class="customerrow">
            <td colspan="7">Nothing to show</td>
            </tr>`
        }
        this.view.message(template);
    }

    search(searchCow) {
        console.log(searchCow.lastYearProd)
        const cow = this.model.cowList.search(searchCow);
        let template = "";

        if (cow !== null) {
            template = this.buildTemplate(cow);
        } else {
            template = `
            <tr class="customerrow">
            <td colspan="7">Nothing to show</td>
            </tr>`
        }
        this.view.message(template);
    }

    showAllCows() {
        let template = "";
        for (const cow of this.model.cowList.allCows()) {
            template += this.buildTemplate(cow);
        }
        this.view.message(template);
    }

    newCow(cow) {
        const doesCowAlreadyExist = this.model.cowList.getCow(cow.registrationNumber);

        if (doesCowAlreadyExist === null) {
            this.model.cowList.addCow(cow.registrationNumber, cow.stallNumber, cow.breed, cow.birthday, cow.lastYearProd);
            this.view.snackbar("The cow was saved!");
            this.showAllCows();
        } else {
            this.view.snackbar("The cow is already in the system!");
        }
    }

    deleteCow(rn) {
        this.model.cowList.deleteCow(rn);
        this.view.snackbar("The cow was deleted!");
    }
}