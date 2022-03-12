document.addEventListener("touchstart", function () { }, false);

function isTouchScreendevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
};

if (isTouchScreendevice()) {
    $('.back').hide()
    $('.playnow').hide()
    $('.up').hide()

    $('#getphrazy-button').click(function () {
        $('#getphrazy-desc').slideToggle();
        $('.getphrazy-play').slideToggle();
        $('.word-container').slideToggle();
        $('.show').toggle();
    })
    $('#word-button').click(function () {
        $('#word-desc').slideToggle();
        $('.word-play').slideToggle();
        $('.getphrazy-container').slideToggle();
        $('.show').toggle();
    })

    $('#getphrazy-desc').click(function () {
        window.location = 'https://getphrazy.com/'
    })
    $('.getphrazy-play').click(function () {
        window.location = 'https://getphrazy.com/'
    })
    $('#word-desc').click(function () {
        window.location = 'https://word.dailybrainplay.com/'
    })
    $('.word-play').click(function () {
        window.location = 'https://word.dailybrainplay.com/'
    })
} else {
    $('.getphrazy-container').click(function () {
        window.location = 'https://getphrazy.com/'
    })

    $('.word-container').click(function () {
        window.location = 'https://word.dailybrainplay.com/'
    })
}