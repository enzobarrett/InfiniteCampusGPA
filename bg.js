var gpa;
var gpa_unweighted;
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
            console.log("sending false because of null");
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
  if (request.not_weighted) {gpa_unweighted = request.not_weighted}
  if (request.weighted) {gpa = request.weighted}
  if (request.gpa_unweighted) {sendResponse({gpa: gpa_unweighted})}
  if (request.gpa) {sendResponse({gpa: gpa})}
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
