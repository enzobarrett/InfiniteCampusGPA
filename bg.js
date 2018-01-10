var gpa;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.myVar) {
    gpa = request.myVar;
  }
  else {
    sendResponse({farewell: gpa});
  }
});
