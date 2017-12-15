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
  //  var a;
  //  var sum = 0;
  var letters = document.querySelectorAll('.inProgressGrade b');
  //for (i = 0; i < letters.length; i++) {
  var i = 0;
  console.log(letters[i].textContent);
  //  }
  //  console.log(sum);
  /*function toGPA(x) {
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
  };
  var x = toGPA("A");
  console.log(x);
  //var sum = 0;
  var letters = document.querySelectorAll('.gradesBody .inProgressGrade b').textContent;
  console.log(letters[0].textContent);

  for (i = 0; i < letters.length; i++) {
    var number = letters[i].textContent;
    console.log(number);
  }

  //chrome.runtime.sendMessage({myVar: gpa});
  */
}