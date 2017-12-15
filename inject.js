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
  var a;
  var sum = 0;
  var letters = document.querySelectorAll('.inProgressGrade b');
  for (i = 0; i < letters.length; i++) {
    a = toGPA(letters[i].textContent);
    sum = sum + a;
  }
  console.log('Calculated GPA is = ' + sum / i + " SOLID!!!");
  var gpa = sum/i;

  chrome.runtime.sendMessage({myVar: gpa});
