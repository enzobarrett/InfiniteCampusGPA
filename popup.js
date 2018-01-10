var gpa;
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  gpa = response.farewell;
  document.body.innerHTML = gpa;
});
