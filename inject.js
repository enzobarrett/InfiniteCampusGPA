function toGPA(x) {
  if (x == 'A') {return 4;}
  if (x == 'B') {return 3;}
  if (x == 'C') {return 2;}
  if (x == 'D') {return 1;}
  if (x == 'F') {return 0;}
};
var gradetop;
var r;
var grade;
var rect;
var content;
var index;
var class = document.querySelectorAll('.gradesLink b');
var grade = document.querySelectorAll('.inProgressGrade b');

var rect = grade.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);

for (i = 0; i < grade.length; i++) {
  var rect = grade[i].getBoundingClientRect();
  gradetop = rect.top;
  for (r = 1; r < class.length; r += 2) {
    content = class[r].textContent;
    index = content.search("wt");
    ap = content.search("ap");
    pib = content.search("pib");
    if (index > -1 || ap > -1 || pib > -1) {
      //Is a weighted class
      sum += 1;
      
    }
  }
console.log(gradetop);
console.log(i);
r++;
}
/*gpa = sum / i;
if (!isNaN(gpa)) {
  chrome.runtime.sendMessage({myVar: gpa});
}
*/
