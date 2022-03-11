document.addEventListener("touchstart", function () { }, false);

function isTouchScreendevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;      
};

$('.getphrazy').click(function () {
    if(!isTouchScreendevice()) {
        window.location = 'https://getphrazy.com/'
    } else {

    }
})

$('.word').click(function () {
    if(!isTouchScreendevice()) {
        window.location = 'https://word.dailybrainplay.com/'
    } else {

    }
})