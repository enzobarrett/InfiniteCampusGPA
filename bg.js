var gpa;
chrome.runtime.onMessage.addListener(function(message) {
    if (message.myVar) {
        gpa = message.myVar;
        var views = chrome.extension.getViews({
        type: "popup"
        });
        for (var i = 0; i < views.length; i++) {
        views[i].document.getElementById('x').innerHTML = gpa;
      }
    }
});
