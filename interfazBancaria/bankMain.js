
let depPopup = document.getElementById ("depPopup")

function openPopupDep() {
    depPopup.classList.add("add-money")

}

function closePopupDep() {
    depPopup.classList.remove("add-money")

}

function addMoney() {
    depPopup.classList.remove("add-money");
    let balance = getBalance();
    let result = balance + Number(document.getElementById("dep-number").value);
    document.getElementById("money").value = result;
}

function getBalance() {
    return Number(document.getElementById("money").value);
}

// Withdraw
let wdPopup = document.getElementById ("wdPopup");

function openPopupWd() {
    wdPopup.classList.add("remove-money");

}

function closePopupWd() {
    wdPopup.classList.remove("remove-money");

}

function removeMoney() {
    wdPopup.classList.remove("remove-money");
    let balance = getBalance();
    let withdraw = Number(document.getElementById("wd-number").value);
    if (withdraw > balance){
        alert("You're poor")
    } else {
        document.getElementById("money").value = balance - withdraw;
        alert("Don't forget your money")
    }

}