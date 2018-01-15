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
    if (x == 'A' || x == 'A+' || x == 'A-') {return 4;}
    if (x == 'B' || x == 'B+' || x == 'B-') {return 3;}
    if (x == 'C' || x == 'C+' || x == 'C-') {return 2;}
    if (x == 'D' || x == 'D+' || x == 'D-') {return 1;}
    if (x == 'F' || x == 'F+' || x == 'F-') {return 0;}
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
          var number_grades = 0;
//console.log(classroomgrade);
          for (i = 0; i < classroomgrade.length; i++) {
          //  console.log(classroomgrade.lenght);
            //console.log("went through loop 1");
            gradetop = classroomgrade[i].getBoundingClientRect();
            classtitle = document.querySelectorAll('.gradesLink b');

            for (r = 0; r < classtitle.length; r += 2) {

            classname = classtitle[r].getBoundingClientRect();
            content = classtitle[r].textContent;
            diffrence = gradetop.top - classname.top;

              if (diffrence > 0 && diffrence < 80) {
                number_grades++;
                var letter = toGPA(classroomgrade[i].textContent);
                sum += letter;
              //console.log("found match");
              index = content.search("WT");
              ap = content.search("AP");
              pib = content.search("PIB");

                if (index > -1 || ap > -1 || pib > -1) {
                  //console.log("adding 1");
                  sum += 1;
                }
             }
          }

          //console.log(letter);
          }
          console.log(i);
          gpa = sum/number_grades;
          var rounded = gpa.toFixed(2);
          if (!isNaN(gpa)) {
          chrome.runtime.sendMessage({myVar: rounded});
          console.log(sum);
          console.log(i);
          console.log(gpa);
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
          var number_grades = 0;
          for (i = 0; i < classroomgrade.length; i++) {
  classtitle = document.querySelectorAll('.gradesLink b');
for (r = 0; r < classtitle.length; r += 2) {
  gradetop = classroomgrade[i].getBoundingClientRect();

  classname = classtitle[r].getBoundingClientRect();
  diffrence = gradetop.top - classname.top;
              if (diffrence > 0 && diffrence < 80) {
                number_grades++;
                grade = toGPA(classroomgrade[i].textContent);
                sum += grade;
          }
        }


        }
        gpa = sum / number_grades;
        var rounded = gpa.toFixed(2);
        if (!isNaN(gpa)) {
          chrome.runtime.sendMessage({myVar: rounded});
        }
      }

});
}
