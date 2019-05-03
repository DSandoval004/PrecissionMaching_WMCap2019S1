// DVARG: description
var imageIndex = Math.floor(Math.random() * 11);
// DDOES:
window.addEventListener('load', function () {
    slideShow()
});

// DFUNC: The slideShow function
function slideShow() {
    // DVARL: description
    var slideShowItems = document.getElementById('slideShow').children;
    // DDOES:
    document.getElementById('leftArrowSS').addEventListener('click', function () {
        imageIndex -= 2;
        changeSlide();
    });
    document.getElementById('rightArrowSS').addEventListener('click', changeSlide)
    // DFUNC: The changeSlide function
    function changeSlide() {
        // DVARS: 
        var slideNumber;
        if (imageIndex > 12) {
            slideNumber = '01';
            imageIndex = 1;
        } else if (imageIndex > 9) {
            slideNumber = imageIndex;
        } else if (imageIndex < 1) {
            imageIndex = 12;
            slideNumber = 12;
        } else if (imageIndex <= 9) {
            slideNumber = `0${imageIndex}`;
        }
        console.log(imageIndex, slideNumber)
        slideShowItems[0].src = `Images/slideShowImages/${slideNumber}.JPG`;
        imageIndex++;
    };
    setInterval(changeSlide, 5000)
    changeSlide(imageIndex);
};