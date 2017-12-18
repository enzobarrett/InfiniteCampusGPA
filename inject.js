  function toGPA(x) {
    if (x == 'A') {
      return 4;
    }
    if (x == 'B') {
      return 3;
    }
    if (x == 'C') {
      return 2;
    }
    if (x == 'D') {
      return 1;
    }
    if (x == 'F') {
      return 0;
    }
  }
  document.getElementsByClassName("inProgressGrade").onload = function() {
    main()
  }

  function main() {
    var letters = document.querySelectorAll('.inProgressGrade b');
    var sum = 0;
    var grade;
    var gpa;

    for (var i = 0; i < letters.length; i++) {
      grade = toGPA(letters[i].textContent);
      sum += grade;
      console.log(sum);
    }
    gpa = sum / i;
    console.log(gpa);
    if (!isNaN(gpa)) {
      console.log('Gpa is = ' + gpa);
      chrome.runtime.sendMessage({
        myVar: gpa
      });
      console.log('GPA has been sent to background page');
    }
  }