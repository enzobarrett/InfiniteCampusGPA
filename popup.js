var weighted_;
var url;
var tab;
var tabs;

/*first check if the checkboxes should be checked (what state is saved)*/
<<<<<<< HEAD

=======
>>>>>>> 0d908a25326c3d5e454b05bc952464e9ce8e9479
chrome.runtime.sendMessage({recievecheckstate: "test"}, function(response) {
  if (response.response == true) {
    //console.log("checkbox checked");
    document.getElementById("checkbox69").checked = true;
    //weighted_ = true;
  }
  if (response.response == false) {
    //weighted_ = false;
    //console.log("unchecked checkbox");
    document.getElementById("checkbox69").checked = false;
  }
});
chrome.runtime.sendMessage({button: "test"}, function(response) {
  if (response.response == true) {
  //  console.log("checkbox state recieved checking checkbox...");
    document.getElementById("toggle_tomorrow_summary").checked = true;
    weighted_ = true;

  }
  if (response.response == false) {
  //  console.log("unchecked checkbox");

    document.getElementById("toggle_tomorrow_summary").checked = false;
    weighted_ = false;
  }
});
<<<<<<< HEAD




=======
>>>>>>> 0d908a25326c3d5e454b05bc952464e9ce8e9479
refresh();
function refresh() {
  /*recieve the unweighted and weighted gpa*/
  chrome.runtime.sendMessage({gpa_unweighted: "hello"}, function(response) {
    gpa = response.gpa;
    console.log(gpa);
  });
  chrome.runtime.sendMessage({gpa: "hello"}, function(response) {
    weighted_gpa = response.gpa;
    console.log(weighted_gpa);
  });
  window.setTimeout(timeout, 100);
}
function timeout() {
  displayWeightedButton = true;
  if (weighted_gpa == gpa && !isNaN(gpa)) {
    console.log("gpa and weighted_gpa are equal");
    displayWeightedButton = false;
  }

    if (isNaN(gpa)) {
    //  console.log("gpa is isNaN");
      document.getElementById('weightedbutton').style.display = "none";
      document.getElementById('checkbox').style.display = "none";
      document.getElementById('gpa').innerHTML =
      "To receive a gpa please navigate to the \"grades\" section of Infinite Campus";
      document.getElementById('html').style.minWidth = "100px";
    }


}
var gpa;
var weighted_gpa;
var displayWeightedButton;


  chrome.runtime.sendMessage({button: "test"}, function(response) {
    if (response.response == true) {
    //  console.log("checkbox state recieved checking checkbox...");
      document.getElementById("toggle_tomorrow_summary").checked = true;

    }
    if (response.response == false) {
    //  console.log("unchecked checkbox");

      document.getElementById("toggle_tomorrow_summary").checked = false;
    }
  });



document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("checkbox69").addEventListener("click", checkbox);
});

function checkbox() {
  //console.log("Funtion checkbox has been triggered");


  var checked = document.getElementById('checkbox69').checked
  if (checked == false) {
    chrome.runtime.sendMessage({checkboxstate: false});
    //console.log("sent state of false");;

  } else {
    chrome.runtime.sendMessage({checkboxstate: true});
    //console.log("sent state of true");
  }

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {buttonclick: "hello"}, function(response) {
      //console.log(response.farewell);
    });
  });
  window.setTimeout(refresh, 250);

}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("toggle_tomorrow_summary").addEventListener("click", buttontoggle);
});

function buttontoggle() {
  var checked = document.getElementById('toggle_tomorrow_summary').checked
  if (checked == false) {
  chrome.runtime.sendMessage({buttonstate: false});
  weighted_ = false;
  } else {
  chrome.runtime.sendMessage({buttonstate: true});
  weighted_ = true;
  }
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {buttonclick: "hello"}, function(response) {
      //console.log(response.farewell);
    });
  });
  window.setTimeout(refresh, 250);
}
