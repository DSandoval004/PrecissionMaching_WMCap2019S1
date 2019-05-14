// DDOES: Adds an event lustener to run a function when the page is loaded
window.addEventListener('load', loadCartContent);
// DFUNC: The loadCartContent function
function loadCartContent() {
    // DVARS: Gets the information from the URL bar
    var formData = location.search.slice(1);
    formData = formData.replace(/\+/g, " ");
    formData = decodeURIComponent(formData);
    var formFields = formData.split(/[&=]/g);
    // DLOOP: Loops through the storeItems array
    for (var i = 0; i < storeItems.length; i++) {
        // DVARL: Gets the index of each item needed
        var currentItemID = storeItems[i][4],
            itemPriceIndex = formFields.indexOf(`${currentItemID}price`),
            itemQTYIndex = formFields.indexOf(`${currentItemID}qty`),
            itemEngravingIndex = formFields.indexOf(`${currentItemID}eng`);
        // DIFDO: If their is an item ordered then it display the item with its information
        if (formFields[itemQTYIndex + 1] != '0') {
            // DVARL: Creates a bunch of nodes and caculates out the item price
            var itemHTML = document.createElement('div'),
                nameHTML = document.createElement('h3'),
                imageHTML = document.createElement('img'),
                priceHTML = document.createElement('input'),
                qtyHTML = document.createElement('input'),
                engravingHTML = document.createElement('input'),
                itemsPrice = parseFloat(formFields[itemPriceIndex + 1].replace('$', "")) * parseFloat(formFields[itemQTYIndex + 1]);
            // DDOES: Edits the nameHTML and imageHTML to display the correct information
            nameHTML.textContent = storeItems[i][0];
            imageHTML.src = `Images/store/${storeItems[i][0]}/${storeItems[i][1][0]}`;
            // DDOES: Edits the priceHTML node
            priceHTML.type = "text";
            priceHTML.name = `${storeItems[i][4]}price`;
            priceHTML.classList = storeItems[i][4];
            priceHTML.id = "itemPrice";
            priceHTML.value = `$${itemsPrice.toFixed(2)}`;
            priceHTML.readOnly = "readonly";
            // DDOES: Edits the qtyHTML node
            qtyHTML.type = "number";
            qtyHTML.name = `${storeItems[i][4]}qty`;
            qtyHTML.classList = storeItems[i][4];
            qtyHTML.id = "itemQty";
            qtyHTML.min = 0;
            qtyHTML.value = formFields[itemQTYIndex + 1];
            qtyHTML.readOnly = "readonly";
            // DDOES: Edits the engravingHTML node
            engravingHTML.type = "text";
            engravingHTML.name = `${storeItems[i][4]}eng`;
            engravingHTML.id = "itemEngraving";
            engravingHTML.classList = storeItems[i][4];
            engravingHTML.maxLength = 10;
            engravingHTML.value = formFields[itemEngravingIndex + 1];
            engravingHTML.readOnly = "readonly";
            // DDOES: appends the nodes to their respective nodes
            itemHTML.appendChild(nameHTML);
            itemHTML.appendChild(imageHTML);
            itemHTML.appendChild(priceHTML);
            itemHTML.appendChild(qtyHTML);
            itemHTML.appendChild(engravingHTML);
            document.getElementById('cart').appendChild(itemHTML);
        };
    };
    // DVARL: Gets the information out of the formFields array and caculates values need to be applied
    var totalCountIndx = formFields.indexOf('tCount'),
        totalCostIndex = formFields.indexOf('tCost'),
        totalCostAmount = parseFloat(formFields[totalCostIndex + 1].replace('$', "")).toFixed(2),
        submitButton = document.createElement('input'),
        itemCount = document.createElement('input'),
        cost = document.createElement('input');
    // DDOES: Edits the submitButton node
    submitButton.type = "submit";
    submitButton.id = "submitButton";
    submitButton.value = "Checkout";
    submitButton.classList = "button";
    // DDOES: Edits the itemCount node
    itemCount.type = "number";
    itemCount.name = "tCount";
    itemCount.id = "itemCount";
    itemCount.value = formFields[totalCountIndx + 1];
    itemCount.readOnly = "readonly";
    // DDOES: Edits the cost node
    cost.type = "text";
    cost.name = "tCost";
    cost.id = "itemCost";
    cost.value = `$${totalCostAmount}`;
    cost.readOnly = "readonly";
    // DDOES: appends the nodes to their respective nodes
    document.getElementById('cart').appendChild(submitButton);
    document.getElementById('cart').appendChild(itemCount);
    document.getElementById('cart').appendChild(cost);
};