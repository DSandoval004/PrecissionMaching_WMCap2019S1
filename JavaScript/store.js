window.addEventListener('load', function () {
    loadContent();
});
// DFUNC: The loadContent function
function loadContent() {
    // DVARO: 
    // DLOOP: Loops through the storeItems
    for (var i = 0; i < storeItems.length; i++) {
        // DVARO: 
        var itemHTML = document.createElement('div'),
            nameHTML = document.createElement('h3'),
            imageHTML = document.createElement('img'),
            purchaseButtonHTML = document.createElement('button'),
            descriptionHTML = document.createElement('p');
        nameHTML.textContent = storeItems[i][0]
        imageHTML.src = `Images/store/${storeItems[i][0]}/${storeItems[i][1][0]}`
        purchaseButtonHTML.addEventListener('click', function () {
            console.log('hi')
        });
        purchaseButtonHTML.textContent = 'Add to cart'
        descriptionHTML.textContent = storeItems[i][3]
        itemHTML.appendChild(nameHTML)
        itemHTML.appendChild(imageHTML)
        itemHTML.appendChild(purchaseButtonHTML)
        itemHTML.appendChild(descriptionHTML)
        document.getElementById('storeItems').appendChild(itemHTML)
    };
};