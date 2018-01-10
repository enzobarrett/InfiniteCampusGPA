chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  var gpa = response.farewell;
  if (isNaN(gpa)) {

    document.getElementById('gpa').innerHTML =
    "To receive a gpa please navigate to the \"grades\" section of Infinite Campus";
    document.getElementById('html').style.minWidth = "100px";
  //document.html.style.maxWidth = "200px";
  } else {
    document.getElementById('gpa').innerHTML = "GPA = " + gpa + "<br>" + "Reload IC to update";
    document.getElementById('html').style.minWidth = "80px";

  }
});
