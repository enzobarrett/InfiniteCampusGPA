var gpa;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (message.myVar) {
        console.log('message received!');
        gpa = message.myVar;
        console.log('gpa is = ' + gpa);
    }
    if (message.gpaplease) {
        console.log('message recieved from popup');
        sendResponse({newgpa: gpa});
    }
                                   
});

