var gpa;
chrome.runtime.onMessage.addListener(function(message) {
    if (message.myVar) {
        console.log('message received!');
        gpa = message.myVar;
        console.log('gpa is = ' + gpa);
    }
    if (message.gpaplease) {
        console.log('message recieved from popup');
        chrome.runtime.sendMessage({newgpa: gpa}
});
chrome.runtime.sendMessage({gpaplease: "Background page please get me the gpa"}, function(response) {
  gpa = response.newgpa;
     console.log('response recieved');
     console.log(gpa);
      document.getElementsByClassName('gpa').textContent = gpa;
    console.log('inner html set!');
});
