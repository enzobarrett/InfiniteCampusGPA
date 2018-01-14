var gpa;
var buttonstate;
var checkboxstate;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.checkboxstate == true) {
    checkboxstate = true;
    //console.log("checkboxstate = true");
  }
  if (request.checkboxstate == false) {
    //console.log("checkboxstate = false");
    checkboxstate = false;
  }
  if (request.recievecheckstate) {
    if (checkboxstate == null) {
      sendResponse({response: false});
            //console.log("sending false");
    }
    if (checkboxstate == true) {
      //console.log("sending true");
      sendResponse({response: true});
    }
    if (checkboxstate == false) {
      sendResponse({response: false});
            //console.log("sending false");
    }
  }
  if (request.myVar) {gpa = request.myVar;}
  if (request.buttonstate == false) {
    buttonstate = false;
    //console.log("changed buttonstate to false");
  }
  if (request.buttonstate == true) {
    buttonstate = true;
    //console.log("changed buttonstate to true");
  }
  if (request.button) {
    //console.log("recieved message from popup");
    if (buttonstate == null) {
      sendResponse({response: false});
    }
    if (buttonstate == true) {
      //console.log("request for buttonstate recieved sending to popup");
      sendResponse({response: true});
    }
    if (buttonstate == false) {
      sendResponse({response: false});
    }
  } else {
    sendResponse({farewell: gpa});
  }
});
