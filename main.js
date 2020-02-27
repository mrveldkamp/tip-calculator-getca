document.getElementById("calc-btn").addEventListener("click", calcTip);

function calcTip() {
    // Input
    let billAmt = document.getElementById("bill-amt").value;
    let percent = document.getElementById("tip-percent").value;
    let numPeople = document.getElementById("num-people").value;

    // Process
    let tipPerPerson = billAmt * (percent / 100) / numPeople;

    // Output
    document.getElementById("result").innerHTML = tipPerPerson.toFixed(2);
}