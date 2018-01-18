window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})
  }
})
var weighted_;
var url;
var tab;
chrome.tabs.query({
  active: true,
  currentWindow: true
}, function(tabs) {
  tab = tabs[0];
  url = tab.url;
  var string = url;
  var index = string.search("bvsd.infinitecampus.org");
  if (index > -1) {
    console.log('found!');
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

refresh();
function refresh() {
  chrome.runtime.sendMessage({gpa_unweighted: "hello"}, function(response) {
    gpa = response.gpa;
    console.log(gpa);
  });
  chrome.runtime.sendMessage({gpa: "hello"}, function(response) {
    weighted_gpa = response.gpa;
    console.log(weighted_gpa);
  });
/*if (weighted_gpa == gpa) {
  console.log("unequal (" + gpa + " " + weighted_gpa + ")");
}*/

  window.setTimeout(timeout, 100);
function timeout() {
  displayWeightedButton = true;
  if (weighted_gpa == gpa && !isNaN(gpa)) {
    console.log("gpa and weighted_gpa are equal");
    displayWeightedButton = false;
  }

    if (isNaN(gpa) || isNaN(weighted_gpa)) {
      console.log("gpa is isNaN");
      document.getElementById('donotdisplay').style.display = "none";
      document.getElementById('gpa').innerHTML =
      "To receive a gpa please navigate to the \"grades\" section of Infinite Campus";
      document.getElementById('html').style.minWidth = "100px";
      document.getElementById('checkbox').style.display = "none";
      document.getElementById('sem').style.display = "none";
    //document.html.style.maxWidth = "200px";
    } else {
      if (displayWeightedButton == false) {
        document.getElementById('sem').style.display = "inline-block";
        console.log("this should not be exectuting");
        document.getElementById('donotdisplay').style.display = "none";
        document.getElementById('sem').style.top = "0";
        document.getElementById('label').style.marginTop = "0px";

      } else {
        document.getElementById('donotdisplay').style.display = "inline-block";
        document.getElementById('sem').style.display = "inline-block";

        document.getElementById('checkbox').style.display = "inline-block";
        document.getElementById('sem').style.top = "34";

        document.getElementById('checkbox69').style.marginTop = "35";
      }
      if (weighted_ == false) {
      document.getElementById('gpa').innerHTML = "GPA = " + gpa + "<br>" + "Reload IC to update";
    } else {
      document.getElementById('gpa').innerHTML = "GPA = " + weighted_gpa + "<br>" + "Reload IC to update";
    }
      document.getElementById('gpa').style.marginTop = "4px";
      document.getElementById('html').style.minWidth = "80px";
    }


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

//console.log("functiom buttontoggle has been triggered");
  var checked = document.getElementById('toggle_tomorrow_summary').checked
  if (checked == false) {
  chrome.runtime.sendMessage({buttonstate: false});
  weighted_ = false;
  //console.log("sent state of false");
  } else {
  chrome.runtime.sendMessage({buttonstate: true});
  weighted_ = true;
  //console.log("sent state of true");
  }
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {buttonclick: "hello"}, function(response) {
      //console.log(response.farewell);
    });
  });
  window.setTimeout(refresh, 250);
}
