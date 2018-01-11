  chrome.runtime.sendMessage({button: "test"}, function(response) {
    if (response.response == true) {
      console.log("checkbox state recieved checking checkbox...");
      document.getElementById("toggle_tomorrow_summary").checked = true;
    }
    if (response.response == false) {
      console.log("unchecked checkbox");
      document.getElementById("toggle_tomorrow_summary").checked = false;
    }
  });

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  var gpa = response.farewell;
  if (isNaN(gpa)) {
    document.getElementById('textbox').style.display = "none";
    document.getElementById('gpa').innerHTML =
    "To receive a gpa please navigate to the \"grades\" section of Infinite Campus";
    document.getElementById('html').style.minWidth = "100px";
  //document.html.style.maxWidth = "200px";
  } else {
    document.getElementById('gpa').innerHTML = "GPA = " + gpa + "<br>" + "Reload IC to update";
    document.getElementById('html').style.minWidth = "80px";
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("toggle_tomorrow_summary").addEventListener("click", buttontoggle);
});

function buttontoggle() {
  var checked = document.getElementById('toggle_tomorrow_summary').checked
  if (checked == false) {
    chrome.runtime.sendMessage({buttonstate: false});
    console.log("sent state of false");
  } else {
    chrome.runtime.sendMessage({buttonstate: true});
    console.log("sent state of true");
  }

}
