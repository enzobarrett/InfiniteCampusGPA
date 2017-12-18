var gpa;
chrome.runtime.onMessage.addListener(function(message) {
    if (message.myVar) {
        console.log('message received!');
        gpa = message.myVar;
        console.log('gpa is = ' + gpa);
    }
    if (message.gpaplease) {
        console.log('message recieved from popup');
        chrome.runtime.sendMessage({newgpa: gpa})
    }
                                   
});

