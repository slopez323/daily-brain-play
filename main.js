const analytics = {
    PHRAZY: "clicked_getphrazy",
    WORD: "clicked_word"
};

$(document).ready(setHandlers);
$(window).resize(setHandlers);

function setHandlers() {
    $('.flip-container').show();
    $('.back').hide();
    $('.playnow').hide();
    $('.show').addClass('down');

    $('#getphrazy-button').off();
    $('#word-button').off();

    if ($(window).width() > 767) {
        $('#getphrazy-button').click(function () {
            $('#getphrazy-desc').slideToggle();
            $('.getphrazy-play').slideToggle();
            $('.word-container').slideToggle();
            $('#getphrazy-button .show').toggleClass('down');
        });
        $('#word-button').click(function () {
            $('#word-desc').slideToggle();
            $('.word-play').slideToggle();
            $('.getphrazy-container').slideToggle();
            $('#word-button .show').toggleClass('down');
        });
    } else {
        $('#getphrazy-button').click(function () {
            $('#getphrazy-desc').slideToggle();
            $('.getphrazy-play').slideToggle();
            $('#getphrazy-button .show').toggleClass('down');
        });
        $('#word-button').click(function () {
            $('#word-desc').slideToggle();
            $('.word-play').slideToggle();
            $('#word-button .show').toggleClass('down');
        });
    };
    $('#getphrazy-desc').click(function () {
        sendEvent(analytics.PHRAZY);
        window.location = 'https://getphrazy.dailybrainplay.com/'
    });
    $('.getphrazy-play').click(function () {
        sendEvent(analytics.PHRAZY);
        window.location = 'https://getphrazy.dailybrainplay.com/'
    });
    $('#word-desc').click(function () {
        sendEvent(analytics.WORD);
        window.location = 'https://word.dailybrainplay.com/'
    });
    $('.word-play').click(function () {
        sendEvent(analytics.WORD);
        window.location = 'https://word.dailybrainplay.com/'
    });
};

function sendEvent(action, values) {
    if (window.gtag) {
        gtag("event", action, { data: JSON.stringify(values) });
    };
};