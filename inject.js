var classroomgrade;
chrome.runtime.sendMessage({recievecheckstate: "hello"}, function(response) {
  var checkstate = response.response;
  if (checkstate == true) {
    classroomgrade = '.finalGrade b';
  }
  if (checkstate == false) {
    classroomgrade = '.inProgressGrade b';
  }
});
all();
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.buttonclick == "hello") {
    console.log("Reload");
      //location = location;
      console.log("am i being executed?");
      all();
    }
    if (request.checkboxstate == "hello") {

    }

  });
  function all() {
    chrome.runtime.sendMessage({button: "test"}, function(response) {
      if (response.response == true) {
        function toGPA(x) {
          if (x == 'A') {return 4;}
          if (x == 'B') {return 3;}
          if (x == 'C') {return 2;}
          if (x == 'D') {return 1;}
          if (x == 'F') {return 0;}
        };

      //  console.log("pagerunning");
        var gradetop;
        var r;
        var grade;
        var content;
        var index;
        var ap;
        var pib;
        var letter;
        var sum = 0;
        var classname;
        var diffrence;
        var classtitle;
        var gpa;
        //grade = document.querySelectorAll('.inProgressGrade b');
        //classtitle = document.querySelectorAll('.gradesLink b');
        grade = document.querySelectorAll();
        for (i = 0; i < grade.length; i++) {
          //console.log("entered first loop");
          grade = document.querySelectorAll(classroomgrade);
          gradetop = grade[i].getBoundingClientRect();
          var classtitle = document.querySelectorAll('.gradesLink b');

          //loop two
          for (r = 0; r < classtitle.length; r += 2) {
            //console.log("entered second loop");

        //    classname = classtitle[r].getBoundingClientRect();
            //classtitle = document.querySelectorAll('.gradesLink b');
          classname = classtitle[r].getBoundingClientRect();


          content = classtitle[r].textContent;
        //  console.log(content);
        //console.log(gradetop.top);
            diffrence = gradetop.top - classname.top;

          //  console.log(diffrence);


            if (diffrence > 0 && diffrence < 80) {
            console.log("diffrence is less than 100");
            index = content.search("WT");
            ap = content.search("AP");
            pib = content.search("PIB");
              if (index > -1 || ap > -1 || pib > -1) {
                console.log("Is a weighted class");
                sum += 1;
                //console.log(sum);
              }
           }
        }
        letter = toGPA(grade[i].textContent);
        sum += letter;

        }
      //  console.log(sum);
        gpa = sum/i;
        var rounded = gpa.toFixed(2);
    //    console.log(gpa);
        if (!isNaN(gpa)) {
        chrome.runtime.sendMessage({
          myVar: rounded
        });
        }
      }
      if (response.response == false) {
        function toGPA(x) {
          if (x == 'A') {return 4;}
          if (x == 'B') {return 3;}
          if (x == 'C') {return 2;}
          if (x == 'D') {return 1;}
          if (x == 'F') {return 0;}
        };
        var element = document.getElementsByClassName("bodyBorder title").innerHTML;
        var letters = document.querySelectorAll(classroomgrade);
        var sum = 0;
        var grade;
        var gpa;
        for (i = 0; i < letters.length; i++) {
          grade = toGPA(letters[i].textContent);
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
