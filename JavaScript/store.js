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
            purchaseButtonHTML = document.createElement('a'),
            descriptionHTML = document.createElement('p');
        // DDOES:
        nameHTML.textContent = storeItems[i][0];
        imageHTML.src = `Images/store/${storeItems[i][0]}/${storeItems[i][1][0]}`;
        // DDOES:
        priceHTML.type = "number";
        priceHTML.name = `${storeItems[i][4]}price`;
        priceHTML.id = "itemPrice";
        priceHTML.value = storeItems[i][2];
        priceHTML.readOnly = "readonly"
        // DDOES:
        qtyHTML.type = "number";
        qtyHTML.name = `${storeItems[i][4]}qty`;
        qtyHTML.id = "itemQty";
        qtyHTML.min = 0;
        qtyHTML.value = 0;
        // DDOES:
        engravingHTML.type = "text";
        engravingHTML.name = `${storeItems[i][4]}eng`;
        engravingHTML.id = "itemEngraving";
        engravingHTML.maxLength = 10;
        engravingHTML.placeholder = "Engraving"
        // DDOES:
        purchaseButtonHTML.addEventListener('click', function (e) {
            console.log('hi')
        });
        purchaseButtonHTML.innerHTML = "Add to cart";
        purchaseButtonHTML.className = "button";
        descriptionHTML.textContent = storeItems[i][3];
        // DDOES:
        itemHTML.appendChild(nameHTML);
        itemHTML.appendChild(imageHTML);
        itemHTML.appendChild(priceHTML);
        itemHTML.appendChild(qtyHTML);
        itemHTML.appendChild(engravingHTML);
        itemHTML.appendChild(purchaseButtonHTML);
        itemHTML.appendChild(descriptionHTML);
        document.getElementById('storeItems').appendChild(itemHTML);
    };
    // DVARO: description
    var submitButton = document.createElement('input');
    submitButton.id = "submitButton";
    submitButton.type = "submit";
    submitButton.value = "Checkout";
    submitButton.classList = "button";
    document.getElementById('storeItems').appendChild(submitButton);
};