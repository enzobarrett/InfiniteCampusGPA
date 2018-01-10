
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  var gpa = response.farewell;
  document.body.innerHTML = gpa;
});
