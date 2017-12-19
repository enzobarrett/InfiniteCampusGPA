console.log('popup.js running');
var gpa;
console.log('sending message...');
chrome.runtime.sendMessage({gpaplease: "Background page please get me the gpa"}, function(response) {
  gpa = response.newgpa;
  console.log('gpa is = ' + gpa);
     console.log('response recieved');
      //document.getElementsByClassName('gpa').textContent = gpa;
    //console.log('inner html set!');
});
