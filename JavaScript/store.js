// DVARG: description
var runningCart = [];
window.addEventListener('load', function () {
    loadContent();
});
// DFUNC: The loadContent function
function loadContent() {
    // DLOOP: Loops through the storeItems
    for (var i = 0; i < storeItems.length; i++) {
        // DVARO: 
        var itemHTML = document.createElement('div'),
            nameHTML = document.createElement('h3'),
            imageHTML = document.createElement('img'),
            priceHTML = document.createElement('input'),
            qtyHTML = document.createElement('input'),
            engravingHTML = document.createElement('input'),
            runningCount = document.createElement('input'),
            purchaseButtonHTML = document.createElement('a'),
            descriptionHTML = document.createElement('p');
        // DDOES:
        nameHTML.textContent = storeItems[i][0];
        imageHTML.src = `Images/store/${storeItems[i][0]}/${storeItems[i][1][0]}`;
        // DDOES:
        priceHTML.type = "text";
        priceHTML.name = `${storeItems[i][4]}price`;
        priceHTML.classList = storeItems[i][4];
        priceHTML.id = "itemPrice";
        priceHTML.value = `$${storeItems[i][2]}`;
        priceHTML.readOnly = "readonly"
        // DDOES:
        qtyHTML.type = "number";
        qtyHTML.name = `${storeItems[i][4]}qty`;
        qtyHTML.classList = storeItems[i][4];
        qtyHTML.id = "itemQty";
        qtyHTML.min = 0;
        qtyHTML.value = 0;
        // DDOES:
        runningCount.type = "number";
        runningCount.name = `${storeItems[i][4]}rCount`;
        runningCount.classList = storeItems[i][4];
        runningCount.id = "rCount";
        runningCount.style.display = "none";
        runningCount.value = 0;
        // DDOES:
        engravingHTML.type = "text";
        engravingHTML.name = `${storeItems[i][4]}eng`;
        engravingHTML.id = "itemEngraving";
        engravingHTML.classList = storeItems[i][4];
        engravingHTML.maxLength = 10;
        engravingHTML.placeholder = "Engraving"
        // DDOES:
        purchaseButtonHTML.addEventListener('click', function (e) {
            // DVARL: description
            var targetedItemID = e.target.id,
                itemInformation = document.getElementsByClassName(targetedItemID),
                currentCount = parseFloat(document.getElementById('itemCount').value),
                currentCost = parseFloat(document.getElementById('itemCost').value.replace('$', "")),
                selectedItemCost = parseFloat(itemInformation[0].value.replace('$', "")),
                selectedItemCount = parseFloat(itemInformation[1].value),
                runCount = parseFloat(itemInformation[3].value);
            if (selectedItemCount != 0 && selectedItemCount != runCount) {
                document.getElementById('itemCount').value = currentCount + selectedItemCount - runCount;
                document.getElementById('itemCost').value = `$${currentCost + (selectedItemCost * selectedItemCount) - (selectedItemCost * runCount)}`;
                itemInformation[3].value = selectedItemCount;
            }
            console.log(e, targetedItemID, itemInformation, currentCount, currentCost, runCount);
        });
        purchaseButtonHTML.innerHTML = "Update";
        purchaseButtonHTML.className = "button";
        purchaseButtonHTML.id = storeItems[i][4]
        descriptionHTML.textContent = storeItems[i][3];
        // DDOES:
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
    // DVARO: description
    var submitButton = document.createElement('input'),
        itemCount = document.createElement('input'),
        cost = document.createElement('input');
    // DDOES:
    submitButton.type = "submit";
    submitButton.id = "submitButton";
    submitButton.value = "Checkout";
    submitButton.classList = "button";
    // DDOES:
    itemCount.type = "number";
    itemCount.name = "tCount";
    itemCount.id = "itemCount";
    itemCount.value = 0;
    itemCount.readOnly = "readonly";
    // DDOES:
    cost.type = "text";
    cost.name = "tCost";
    cost.id = "itemCost";
    cost.value = "$0.00";
    cost.readOnly = "readonly";
    // DDOES:
    document.getElementById('storeItems').appendChild(submitButton);
    document.getElementById('storeItems').appendChild(itemCount);
    document.getElementById('storeItems').appendChild(cost);
};