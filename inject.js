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
  
    var finalvar = "";
  var arr = document.getElementsByClassName('title');
  for (i=0; i<arr.length; i++) {
         finalval = finalval + arr[i].value;
  }
  console.log(finalval);
  /*
  var element = document.getElementsByClassName("bodyBorder title").innerHTML;
  console.log(element);
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
  } else {
    console.log('Please Navigate to "Grades"');
    console.log(element);
  //chrome.runtime.sendMessage({myVar: gpa});
}
*/
}
