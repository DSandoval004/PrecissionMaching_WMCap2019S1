// DDOES:
window.addEventListener('load', function () {
    slideShow()
})

// DFUNC: The slideShow function
function slideShow() {
    // DVARL: description
    var slideShowItems = document.getElementById('slideShow').children,
        imageIndex = Math.floor(Math.random() * 11);
    // DFUNC: The changeSlide function
    function changeSlide(imageIndex) {
        // DVARS: 
        imageIndex++;
        var slideNumber;
        if (imageIndex <= 9) {
            slideNumber = `0${imageIndex}`;
        }
        if (imageIndex > 9) {
            slideNumber = imageIndex;
        }
        if (imageIndex >= 12) {
            imageIndex = 0
        }
        console.log(imageIndex)
        slideShowItems[0].src = `Images/slideShowImages/${slideNumber}.JPG`
        setTimeout(changeSlide, 5000, imageIndex)
    };
    changeSlide(imageIndex);
};