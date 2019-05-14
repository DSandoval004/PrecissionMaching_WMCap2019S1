// DDOES:  Adds an event lustener to run a function when the page is loaded
window.addEventListener('load', function () {
    loadContent();
});
// DFUNC: The loadContent function
function loadContent() {
    // DLOOP: Loops through the storeItems
    for (var i = 0; i < storeItems.length; i++) {
        // DVARO: Creates a bunch of nodes to be added to the page
        var itemHTML = document.createElement('div'),
            nameHTML = document.createElement('h3'),
            imageHTML = document.createElement('img'),
            priceHTML = document.createElement('input'),
            qtyHTML = document.createElement('input'),
            engravingHTML = document.createElement('input'),
            runningCount = document.createElement('input'),
            purchaseButtonHTML = document.createElement('a'),
            descriptionHTML = document.createElement('p');
        // DDOES: Edits the nameHTML and imageHTML to display the correct information
        nameHTML.textContent = storeItems[i][0];
        imageHTML.src = `Images/store/${storeItems[i][0]}/${storeItems[i][1][0]}`;
        // DDOES: Edits the priceHTML node
        priceHTML.type = "text";
        priceHTML.name = `${storeItems[i][4]}price`;
        priceHTML.classList = storeItems[i][4];
        priceHTML.id = "itemPrice";
        priceHTML.value = `$${storeItems[i][2]}`;
        priceHTML.readOnly = "readonly";
        // DDOES: Edits the qtyHTML node
        qtyHTML.type = "number";
        qtyHTML.name = `${storeItems[i][4]}qty`;
        qtyHTML.classList = storeItems[i][4];
        qtyHTML.id = "itemQty";
        qtyHTML.min = 0;
        qtyHTML.value = 0;
        qtyHTML.addEventListener('click', updateTotal)
        // DDOES: Edits the runningCount node
        runningCount.type = "number";
        runningCount.name = `${storeItems[i][4]}rCount`;
        runningCount.classList = storeItems[i][4];
        runningCount.id = "rCount";
        runningCount.style.display = "none";
        runningCount.value = 0;
        // DDOES: Edits the engravingHTML node
        engravingHTML.type = "text";
        engravingHTML.name = `${storeItems[i][4]}eng`;
        engravingHTML.id = "itemEngraving";
        engravingHTML.classList = storeItems[i][4];
        engravingHTML.maxLength = 10;
        engravingHTML.placeholder = "Engraving";
        // DDOES: Edits the purchaseButtonHTML node
        purchaseButtonHTML.addEventListener('click', updateTotal);
        purchaseButtonHTML.innerHTML = "Update";
        purchaseButtonHTML.className = storeItems[i][4];
        purchaseButtonHTML.id = "button";
        descriptionHTML.textContent = storeItems[i][3];
        // DDOES: appends the nodes to their respective nodes
        itemHTML.appendChild(nameHTML);
        itemHTML.appendChild(imageHTML);
        itemHTML.appendChild(priceHTML);
        itemHTML.appendChild(qtyHTML);
        itemHTML.appendChild(engravingHTML);
        itemHTML.appendChild(runningCount)
        itemHTML.appendChild(purchaseButtonHTML);
        itemHTML.appendChild(descriptionHTML);
        document.getElementById('storeItems').appendChild(itemHTML);
    };
    // DVARO: Creates nodes to submit, hold the cost and how many items being purchased
    var submitButton = document.createElement('input'),
        itemCount = document.createElement('input'),
        cost = document.createElement('input');
    // DDOES: Edits the submitButton node
    submitButton.type = "submit";
    submitButton.id = "submitButton";
    submitButton.value = "To Cart";
    submitButton.classList = "button";
    // DDOES: Edits the itemCount node
    itemCount.type = "number";
    itemCount.name = "tCount";
    itemCount.id = "itemCount";
    itemCount.value = 0;
    itemCount.readOnly = "readonly";
    // DDOES: Edits the cost node
    cost.type = "text";
    cost.name = "tCost";
    cost.id = "itemCost";
    cost.value = "$0.00";
    cost.readOnly = "readonly";
    // DDOES: appends the nodes to their respective nodes
    document.getElementById('storeItems').appendChild(submitButton);
    document.getElementById('storeItems').appendChild(itemCount);
    document.getElementById('storeItems').appendChild(cost);
};
// DFUNC: The updateTotal function
function updateTotal(e) {
    // DVARL: gets the values needed and calculated
    var targetedItemID = e.target.className,
        itemInformation = document.getElementsByClassName(targetedItemID),
        currentCount = parseFloat(document.getElementById('itemCount').value),
        currentCost = parseFloat(document.getElementById('itemCost').value.replace('$', "")),
        selectedItemCost = parseFloat(itemInformation[0].value.replace('$', "")),
        selectedItemCount = parseFloat(itemInformation[1].value),
        runCount = parseFloat(itemInformation[3].value),
        itemCostValue = currentCost + (selectedItemCost * selectedItemCount) - (selectedItemCost * runCount);
    // DDOES: Applies the values to their respective input element
    document.getElementById('itemCount').value = currentCount + selectedItemCount - runCount;
    document.getElementById('itemCost').value = `$${itemCostValue.toFixed(2)}`
    itemInformation[3].value = selectedItemCount;
};