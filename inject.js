window.setTimeout(all, 200);
stage1();
var classroomgrade;
//console.log("running");
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.buttonclick) {
    //console.log("Reload");
       reload();
}
  });
//console.log("i go here");
function reload() {
  window.setTimeout(all, 200);
  stage1();
}

  function stage1() {
    //console.log("not here yet..");
    chrome.runtime.sendMessage({recievecheckstate: "hello"}, function(response) {
      var checkstate = response.response;
      if (checkstate == true) {
        //console.log("sem 1");
        classroomgrade = document.querySelectorAll('.finalGrade b');
      }
      if (checkstate == false) {
        //console.log("semester 2");
        classroomgrade = document.querySelectorAll('.inProgressGrade b');
      }
    });
  };

  function toGPA(x) {
    if (x == 'A') {return 4;}
    if (x == 'B') {return 3;}
    if (x == 'C') {return 2;}
    if (x == 'D') {return 1;}
    if (x == 'F') {return 0;}
  };

    function all() {
      chrome.runtime.sendMessage({button: "test"}, function(response) {

      //weighted section
        //console.log(response.response);
        if (response.response == true) {
          var gradetop;
          var r;
          var content;
          var index;
          var ap;
          var pib;
          var sum = 0;
          var classname;
          var diffrence;
          var classtitle;
          var gpa;

          for (i = 0; i < classroomgrade.length; i++) {

            gradetop = classroomgrade[i].getBoundingClientRect();
            classtitle = document.querySelectorAll('.gradesLink b');

            for (r = 0; r < classtitle.length; r += 2) {

            classname = classtitle[r].getBoundingClientRect();
            content = classtitle[r].textContent;
            diffrence = gradetop.top - classname.top;

              if (diffrence > 0 && diffrence < 80) {
              //console.log("diffrence is less than 100");
              index = content.search("WT");
              ap = content.search("AP");
              pib = content.search("PIB");

                if (index > -1 || ap > -1 || pib > -1) {
                  //console.log("Is a weighted class");
                  sum += 1;
                }
             }
          }
          var letter = toGPA(classroomgrade[i].textContent);
          sum += letter;
          }

          gpa = sum/i;
          var rounded = gpa.toFixed(2);
          if (!isNaN(gpa)) {
          chrome.runtime.sendMessage({myVar: rounded});
          }
        }

  //unweighted

        if (response.response == false) {

        /*  function toGPA(x) {
            if (x == 'A') {return 4;}
            if (x == 'B') {return 3;}
            if (x == 'C') {return 2;}
            if (x == 'D') {return 1;}
            if (x == 'F') {return 0;}
          };*/
          var element = document.getElementsByClassName("bodyBorder title").innerHTML;
          //var letters = document.querySelectorAll(classroomgrade);
          var sum = 0;
          var grade;
          var gpa;
          for (i = 0; i < classroomgrade.length; i++) {
            grade = toGPA(classroomgrade[i].textContent);
            sum += grade;
          }
          gpa = sum / i;
          var rounded = gpa.toFixed(2);
          if (!isNaN(gpa)) {
            chrome.runtime.sendMessage({myVar: rounded});
          }

        }
        });
      }
