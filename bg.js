var gpa;
chrome.runtime.onMessage.addListener(function(message) {
    if (message.myVar) {
        console.log('message received!');
        gpa = message.myVar;
        
        console.log('gpa is = ' + gpa);
        chrome.runtime.sendMessage({gpa: gpa});
    }
});
