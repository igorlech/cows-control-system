import Cow from "../utils/cowClass.js";
export default class View {
    constructor(controller) {
        const self = this;
        const rnSearchForm = document.getElementById("rnSearchForm");
        const rnField = document.getElementById("rnField");
        const panelText = document.getElementById("panelText");
        const closeCross = document.getElementById("closeCross");
        const searchForm = document.getElementById("searchForm");
        const stallNumber = document.getElementById("stallNumber");
        const breed = document.getElementById("breed");
        const lastYearProd = document.getElementById("lastYearProd");
        const showAllCowsButton = document.getElementById("showAllCowsButton");
        const cowDialogForm = document.getElementById("cowDialogForm");
        const addCowButton = document.getElementById("addCowButton");
        const cowDialog = document.getElementById("cowDialog");
        const cancelButton = document.getElementById("cancelButton");
        const searchResult = document.getElementById("searchResult");
        const hiddenSnField = document.getElementById("hiddenSnField");
        const confirmDialog = document.getElementById("confirmDialog");
        const confirmDialogForm = document.getElementById("confirmDialogForm");
        const cancelConfirmBtn = document.getElementById("cancelConfirmBtn");

        self.controller = controller;

        showAllCowsButton.onclick = function() {
            self.controller.showAllCows();
        }

        rnSearchForm.onsubmit = function (e) {
            e.preventDefault();
            self.controller.rnSearch(rnField.value);
        }

        searchForm.onsubmit = function (e) {
            e.preventDefault();
            const optimalCow = new Cow ("", stallNumber.value, breed.value, "", lastYearProd.value);
            self.controller.search(optimalCow);
            searchPanel.classList.remove("searchPanelAnim");
        }

        panelText.onclick = function () {
            searchPanel.classList.add("searchPanelAnim");
        }

        closeCross.onclick = function () {
            searchPanel.classList.remove("searchPanelAnim");
        }

        // Dialog event handler
        addCowButton.onclick = function () {
            cowDialogForm.reset();
            cowDialog.showModal();
        }

        cancelButton.onclick = function () {
            cowDialog.close();
        }

        cowDialogForm.onsubmit = function (e) {
            e.preventDefault();
            console.log(lastyearprodfield.value)
            self.controller.newCow({
                registrationNumber: document.getElementById("rnfield").value,
                stallNumber: document.getElementById("stallfield").value,
                breed: document.getElementById("breedfield").value,
                birthday: document.getElementById("birthdayfield").value,
                lastYearProd: parseFloat(document.getElementById("lastyearprodfield").value)
            })
        }

        searchResult.onclick = function (e) {
            if (e.target.nodeName === "BUTTON") {
                hiddenSnField.value = e.target.id;
                confirmDialog.showModal();
            }
        }

        cancelConfirmBtn.onclick = function () {
            confirmDialog.close();
        }

        confirmDialogForm.onsubmit = function() {
            self.controller.deleteCow(hiddenSnField.value);
            self.controller.showAllCows();
        }
    }

    message(template) {
        const element = document.getElementById("searchResult");
        element.innerHTML = "";
        element.insertAdjacentHTML("beforeend", template);
    }

    snackbar(snackmessage) {
        const snackbar = document.getElementById("snackbar");
        snackbar.innerHTML = snackmessage;
        snackbar.className = "show";
        setTimeout(function () {
            snackbar.className = snackbar.className.replace("show", "")
        }, 3000);
    }
}