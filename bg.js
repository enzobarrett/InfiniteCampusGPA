var gpa;
chrome.runtime.onMessage.addListener(function(message) {
    if (message.myVar) {
        console.log('message received!');
        gpa = message.myVar;
        
        console.log('gpa is = ' + gpa);
        var views = chrome.extension.getViews({
        type: "popup"
        });
        for (var i = 0; i < views.length; i++) {
        views[i].document.getElementsByClassName('gpa').innerHTML = gpa;
      }
    }
});
