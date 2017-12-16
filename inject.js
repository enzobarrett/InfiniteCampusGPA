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
  
window.onload = function() {
  var element = document.getElementsByClassName("title").innerHTML;
  var letters = document.querySelectorAll('.inProgressGrade b');
  var sum = 0;
  var grade;
  var gpa;
  
  if (element == 'Grades') {
  for (i = 0; i < letters.length; i++) {
    grade = toGPA(letters[i].textContent);
    sum += grade;  
  }
  gpa = sum/i;
  console.log('Gpa is = ' + gpa)
  } 
  //chrome.runtime.sendMessage({myVar: gpa});
}
