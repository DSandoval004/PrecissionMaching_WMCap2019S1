// DDOES:
window.addEventListener('load', loadCartContent);
// DFUNC: The loadCartContent function
function loadCartContent() {
    var formData = location.search.slice(1);
    formData = formData.replace(/\+/g, " ");
    formData = decodeURIComponent(formData);
    var formFields = formData.split(/[&=]/g);
    console.log(formFields)
    // DLOOP: Loops through the array
    for (var i = 0; i < storeItems.length; i++) {
        // DVARL: description
        var currentItemID = storeItems[i][4],
            itemPriceIndex = formFields.indexOf(`${currentItemID}price`),
            itemQTYIndex = formFields.indexOf(`${currentItemID}qty`),
            itemEngravingIndex = formFields.indexOf(`${currentItemID}eng`);
        // DIFDO: description
        if (formFields[itemQTYIndex + 1] != '0') {
            // DVARO: 
            var itemHTML = document.createElement('div'),
                nameHTML = document.createElement('h3'),
                imageHTML = document.createElement('img'),
                priceHTML = document.createElement('input'),
                qtyHTML = document.createElement('input'),
                engravingHTML = document.createElement('input'),
                itemsPrice = parseFloat(formFields[itemPriceIndex + 1].replace('$', "")) * parseFloat(formFields[itemQTYIndex + 1]);
            // DDOES:
            nameHTML.textContent = storeItems[i][0];
            imageHTML.src = `Images/store/${storeItems[i][0]}/${storeItems[i][1][0]}`;
            // DDOES:
            priceHTML.type = "text";
            priceHTML.name = `${storeItems[i][4]}price`;
            priceHTML.classList = storeItems[i][4];
            priceHTML.id = "itemPrice";
            priceHTML.value = `$${itemsPrice.toFixed(2)}`;
            priceHTML.readOnly = "readonly";
            // DDOES:
            qtyHTML.type = "number";
            qtyHTML.name = `${storeItems[i][4]}qty`;
            qtyHTML.classList = storeItems[i][4];
            qtyHTML.id = "itemQty";
            qtyHTML.min = 0;
            qtyHTML.value = formFields[itemQTYIndex + 1];
            qtyHTML.readOnly = "readonly";
            // DDOES:
            engravingHTML.type = "text";
            engravingHTML.name = `${storeItems[i][4]}eng`;
            engravingHTML.id = "itemEngraving";
            engravingHTML.classList = storeItems[i][4];
            engravingHTML.maxLength = 10;
            engravingHTML.value = formFields[itemEngravingIndex + 1];
            engravingHTML.readOnly = "readonly";
            // DDOES:
            itemHTML.appendChild(nameHTML);
            itemHTML.appendChild(imageHTML);
            itemHTML.appendChild(priceHTML);
            itemHTML.appendChild(qtyHTML);
            itemHTML.appendChild(engravingHTML);
            document.getElementById('cart').appendChild(itemHTML);
        };
    };
    // DVARA: description
    var totalCountIndx = formFields.indexOf('tCount'),
        totalCostIndex = formFields.indexOf('tCost'),
        totalCostAmount = parseFloat(formFields[totalCostIndex + 1].replace('$', "")).toFixed(2),
        submitButton = document.createElement('input'),
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
    itemCount.value = formFields[totalCountIndx + 1];
    itemCount.readOnly = "readonly";
    // DDOES:
    cost.type = "text";
    cost.name = "tCost";
    cost.id = "itemCost";
    cost.value = `$${totalCostAmount}`;
    cost.readOnly = "readonly";
    // DDOES:
    document.getElementById('cart').appendChild(submitButton);
    document.getElementById('cart').appendChild(itemCount);
    document.getElementById('cart').appendChild(cost);
};