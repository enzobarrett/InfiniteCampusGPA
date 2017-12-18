var gpa;
chrome.runtime.onMessage.addListener(function(message) {
    if (message.myVar) {
        gpa = message.myVar;
        console.log(gpa);
        var views = chrome.extension.getViews({
        type: "popup"
        });
        for (var i = 0; i < views.length; i++) {
        views[i].document.getElementsByClassName('gpa').innerHTML = gpa;
      }
    }
});
