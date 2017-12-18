var gpa;
chrome.runtime.onMessage.addListener(function(message) {
  if (message.gpa) {
    console.log('message received!');
    gpa = message.gpa;
    console.log('gpa is = ' + gpa);
    document.getElementsByClassName('gpa').innerHTML = gpa;
    console.log('inner html set!');
    }
});
