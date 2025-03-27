function calculateTotal() {
    let kiloPrice = parseFloat(document.getElementById("kiloprice").value);
    let totalWeight = parseFloat(document.getElementById("totalweight").value);
    
    if (isNaN(kiloPrice) || isNaN(totalWeight)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    let totalCost = kiloPrice * totalWeight;
    document.getElementById("result").innerText = "Total Cost: " + totalCost.toFixed(2) + " BDT";
}

function clearInputs() {
    document.getElementById("kiloprice").value = "";
    document.getElementById("totalweight").value = "";
    document.getElementById("result").innerText = "";
}
