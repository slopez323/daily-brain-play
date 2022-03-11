document.addEventListener("touchstart", function () { }, false);

function isTouchScreendevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
};

$('.getphrazy').click(function () {
    if (!isTouchScreendevice()) {
        window.location = 'https://getphrazy.com/'
    } else {
        $('.getphrazy-play').slideDown();
    }
})

$('.word').click(function () {
    if (!isTouchScreendevice()) {
        window.location = 'https://word.dailybrainplay.com/'
    } else {
        $('.word-play').slideDown();
    }
})

$('.getphrazy-play').click(function () {
    window.location = 'https://getphrazy.com/'
})

$('.word-play').click(function () {
    window.location = 'https://word.dailybrainplay.com/'
})  