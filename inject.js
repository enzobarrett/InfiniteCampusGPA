/*window.setTimeout(all, 200);
stage1();*/
var gradetop;
var classname;
var diffrence;
//variables that help determine if the class is weighted
var content;
var index;
var ap;
var pib;
var classtitle;
var weighted = false;
//variables in the final calulation of the gpa
var sum = 0;
var gpa;
var number_grades = 0;


var classroomgrade;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.buttonclick) {
    //console.log("Reload");
      start();
}
});
//console.log("i go here");
/*function reload() {
  window.setTimeout(all, 200);
  stage1();
}*/
start();

function start() {
  chrome.runtime.sendMessage({recievecheckstate: "hello"}, function(response) {
    var checkstate = response.response;
    if (checkstate == true) {
      console.log("sem 1");
      classroomgrade = document.querySelectorAll('.finalGrade b');
      window.setTimeout(delay, 100);
    }
    if (checkstate == false) {
      console.log("semester 2");
      classroomgrade = document.querySelectorAll('.inProgressGrade b');
      window.setTimeout(delay, 100);
    }
  });
}
function letter_to_number(x) {
  if (x == 'A' || x == 'A+' || x == 'A-') {return 4;}
  if (x == 'B' || x == 'B+' || x == 'B-') {return 3;}
  if (x == 'C' || x == 'C+' || x == 'C-') {return 2;}
  if (x == 'D' || x == 'D+' || x == 'D-') {return 1;}
  if (x == 'F' || x == 'F+' || x == 'F-') {return 0;}
};

function check_if_weighted(x) {
  index = x.search("WT");
  ap = x.search("AP");
  pib = x.search("PIB");
  if (index > -1 || ap > -1 || pib > -1) {
    sum += 1;
  }
}

function delay() {

      //variables with height calculation

weighted = false;
  for (f = 0;  f < 2; f++){
    if (f == 1) {
      weighted = true;
      console.log("weighted = true");
    }
      for (i = 0; i < classroomgrade.length; i++) {

        gradetop = classroomgrade[i].getBoundingClientRect();
        classtitle = document.querySelectorAll('.gradesLink b');

        for (r = 0; r < classtitle.length; r += 2) {
          classname = classtitle[r].getBoundingClientRect();
          diffrence = gradetop.top - classname.top;

          if (diffrence > 0 && diffrence < 80) {
            content = classtitle[r].textContent;
            number_grades++;
            var letter = letter_to_number(classroomgrade[i].textContent);
            sum += letter;
            if (weighted) {
              check_if_weighted(content);
            }
          }
        }
      }

      gpa = sum/number_grades;
      var rounded = gpa.toFixed(2);
      if (!isNaN(gpa)) {
        if (weighted == false) {
          chrome.runtime.sendMessage({not_weighted: rounded});
          console.log("sent unweighted");
          console.log(gpa);
        } else {
          chrome.runtime.sendMessage({weighted: rounded});
          console.log("sent weighted");
          console.log(gpa);
        }

     }
     sum = 0;
     rounded = 0;
     number_grades = 0;
   }
}
