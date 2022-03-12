document.addEventListener("touchstart", function () { }, false);

function isTouchScreendevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
};

$('.getphrazy-container').click(function () {
    // if (!isTouchScreendevice()) {
        window.location = 'https://getphrazy.com/'
    // } else if (window.width <= 540) {
    //     $('.getphrazy-play').slideDown();
    // } else {
    //     $('.getphrazy-play').show();
    // }
})

$('.word-container').click(function () {
    // if (!isTouchScreendevice()) {
        window.location = 'https://word.dailybrainplay.com/'
    // } else if (window.width <= 540) {
    //     $('.word-play').slideDown();
    // } else {
    //     $('.word-play').show();
    // }
})

// $('.getphrazy-play').click(function () {
//     window.location = 'https://getphrazy.com/'
// })

// $('.word-play').click(function () {
//     window.location = 'https://word.dailybrainplay.com/'
// })  