window.onload = function() {
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
  

  
  var letters = document.querySelectorAll('.inProgressGrade b');
  var sum = 0;
  var grade;
  for (i = 0; i < letters.length; i++) {
    grade = toGPA(letters[i].textContent);
    sum += grade;
  }
  console.log(sum);
    //chrome.runtime.sendMessage({myVar: gpa});
}
