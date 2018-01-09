var gpa;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.myVar) {
    console.log('message received!');
    gpa = request.myVar;
    console.log('gpa is = ' + gpa);
  }
    chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
});
