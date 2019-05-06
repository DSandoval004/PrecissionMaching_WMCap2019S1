window.addEventListener('load', function () {
    loadContent();
});
// DFUNC: The loadContent function
function loadContent() {
    // DVARO: 
    var storeItemsHTML = document.createElement('div');
    // DLOOP: Loops through the storeItems
    for (var i = 0; i < storeItems.length; i++) {
        // DVARO: 
        var itemHTML = document.createElement('div'),
            nameHTML = document.createElement('h3'),
            imageHTML = document.createElement('img'),
            priceHTML = document.createElement('input'),
            descriptionHTML = document.createElement('p');
    };
};