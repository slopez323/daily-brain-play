const analytics = {
    PHRAZY: "clicked_getphrazy",
    WORD: "clicked_word"
  };
  
  $('.getphrazy-container').click(function () {
    sendEvent(analytics.PHRAZY);
    window.open('https://getphrazy.dailybrainplay.com/','_system');
  });
  $('.word-container').click(function () {
    sendEvent(analytics.WORD);
    window.open('https://word.dailybrainplay.com/','_system');
  });
  
  function sendEvent(action, values) {
    if (window.gtag) {
        gtag("event", action, { data: JSON.stringify(values) });
    };
  };