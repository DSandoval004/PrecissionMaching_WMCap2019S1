// DVARG: Decides what image to start on
var imageIndex = Math.floor(Math.random() * 11);
// DDOES: Adds an event listener to run the slideShow function
window.addEventListener('load', function () {
    slideShow()
});
// DFUNC: The slideShow function
function slideShow() {
    // DVARL: Gets all of the items in the slide show
    var slideShowItems = document.getElementById('slideShow').children;
    // DDOES: Applies an event listener that runs the changeSlide function when clicked on
    document.getElementById('leftArrowSS').addEventListener('click', function () {
        imageIndex -= 2;
        changeSlide();
    });
    document.getElementById('rightArrowSS').addEventListener('click', changeSlide)
    // DFUNC: The changeSlide function
    function changeSlide() {
        // DVARS: sets up the slideNumber variable
        var slideNumber;
        // DIFDO: calculates out what the slide number should be based on the imageIndex
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
        // DDOES: Applies the slidenumber to the slide show image to change it
        slideShowItems[0].src = `Images/slideShowImages/${slideNumber}.JPG`;
        // DDOES: Increases the imageIndex
        imageIndex++;
    };
    // DDOES: Start the change slide function then runs the changeSlide function every 5 seconds
    setInterval(changeSlide, 5000)
    changeSlide(imageIndex);
};