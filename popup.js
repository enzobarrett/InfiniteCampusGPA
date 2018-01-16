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
      document.getElementById('textbox').style.display = "none";
      document.getElementById('gpa').innerHTML =
      "To receive a gpa please navigate to the \"grades\" section of Infinite Campus";
      document.getElementById('html').style.minWidth = "100px";
    //document.html.style.maxWidth = "200px";
    } else {
      if (displayWeightedButton == true) {
        console.log("this should not be exectuting");
        document.getElementById('donotdisplay').innerHTML = '<p class=\"weight\" id=\"question\">Weighted Grade?</p>' +
        		'<div class=\"item\">' +

        			'<input type=\"checkbox\" id=\"toggle_tomorrow_summary\" name=\"\" value=\"\">' +
        			'<div class=\"toggle\">' +
        				'<label for=\"toggle_tomorrow_summary\"><i></i></label>' +
        			'</div>'+
        		'</div>'
      }
      document.getElementById('gpa').innerHTML = "GPA = " + gpa + "<br>" + "Reload IC to update";
      document.getElementById('gpa').style.marginTop = "4px";
      document.getElementById('html').style.minWidth = "80px";
    }


}
}

var gpa;
var weighted_gpa;
var displayWeightedButton;
chrome.tabs.query({
  active: true,
  currentWindow: true
}, function(tabs) {
  var tab = tabs[0];
  var url = tab.url;
  console.log(url);
});
/*
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
  */
  chrome.runtime.sendMessage({recievecheckstate: "test"}, function(response) {
    if (response.response == true) {
      //console.log("checkbox checked");
      document.getElementById("checkbox69").checked = true;
    }
    if (response.response == false) {
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

/*document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("toggle_tomorrow_summary").addEventListener("click", buttontoggle);
});*/

function buttontoggle() {

//console.log("functiom buttontoggle has been triggered");
  var checked = document.getElementById('toggle_tomorrow_summary').checked
  if (checked == false) {
  chrome.runtime.sendMessage({buttonstate: false});
  //console.log("sent state of false");
  } else {
  chrome.runtime.sendMessage({buttonstate: true});
  //console.log("sent state of true");
  }
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {buttonclick: "hello"}, function(response) {
      //console.log(response.farewell);
    });
  });
  window.setTimeout(refresh, 250);
}
