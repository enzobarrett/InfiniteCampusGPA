var gpa;
chrome.runtime.onMessage.addListener(function(message) {
    if (message.myVar) {
        gpa = message.myVar;
    }
});
