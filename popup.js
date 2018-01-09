console.log('popup.js running');
var gpa;
console.log('sending message...');
chrome.runtime.sendMessage({
  greeting: "hello"
}, function(response) {
  gpa = response.farewell;
});

console.log('gpa is = ' + gpa);
console.log('response recieved');
//document.getElementsByClassName('gpa').textContent = gpa;
//console.log('inner html set!');