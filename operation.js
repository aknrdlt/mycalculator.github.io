var clean = document.getElementById("element1");
var sign = document.getElementById("element2");
var mod = document.getElementById("element3");
var div = document.getElementById("element4");
var seven = document.getElementById("element5");
var eight = document.getElementById("element6");
var nine = document.getElementById("element7");
var mult = document.getElementById("element8");
var four = document.getElementById("element9");
var five = document.getElementById("element10");
var six = document.getElementById("element11");
var sub = document.getElementById("element12");
var one = document.getElementById("element13");
var two = document.getElementById("element14");
var three = document.getElementById("element15");
var plus = document.getElementById("element16");
var zero = document.getElementById("element17");
var dot = document.getElementById("element18");
var equal = document.getElementById("element19");


var now;
var nOne = 0;
var operationType = '';

clean.onclick = function(){
  document.getElementById("number").value = "";
}
seven.onclick = function(){
  now = document.getElementById("number").value;
  document.getElementById("number").value = now + "7";
}
eight.onclick = function(){
  now = document.getElementById("number").value;
  document.getElementById("number").value = now + "8";
}
nine.onclick = function(){
  now = document.getElementById("number").value;
  document.getElementById("number").value = now + "9";
}
four.onclick = function(){
  now = document.getElementById("number").value;
  document.getElementById("number").value = now + "4";
}
five.onclick = function(){
  now = document.getElementById("number").value;
  document.getElementById("number").value = now + "5";
}
six.onclick = function(){
  now = document.getElementById("number").value;
  document.getElementById("number").value = now + "6";
}
one.onclick = function(){
  now = document.getElementById("number").value;
  document.getElementById("number").value = now + "1";
}
two.onclick = function(){
  now = document.getElementById("number").value;
  document.getElementById("number").value = now + "2";
}
three.onclick = function(){
  now = document.getElementById("number").value;
  document.getElementById("number").value = now + "3";
}
zero.onclick = function(){
  now = document.getElementById("number").value;
  document.getElementById("number").value = now + "0";
}
sign.onclick = function(){
  now = document.getElementById("number").value;
  document.getElementById("number").value = now + "-";
}
dot.onclick = function(){
  now = document.getElementById("number").value;
  document.getElementById("number").value = now + ".";
}
mod.onclick = function(){
  now = document.getElementById("number").value;
  operationType = '%';
  nOne = now;
  document.getElementById("number").value = "";
}
div.onclick = function(){
  now = document.getElementById("number").value;
  operationType = '/';
  nOne = now;
  document.getElementById("number").value = "";
}
mult.onclick = function(){
  now = document.getElementById("number").value;
  operationType = '*';
  nOne = now;
  document.getElementById("number").value = "";}
sub.onclick = function(){
  now = document.getElementById("number").value;
  operationType = '-';
  nOne = now;
  document.getElementById("number").value = "";}
plus.onclick = function(){
  now = document.getElementById("number").value;
  operationType = '+';
  nOne = now;
  document.getElementById("number").value = "";
}
equal.onclick = function(){
  now = document.getElementById("number").value;
  switch(operationType){
    case '+':document.getElementById("number").value = nOne+now;break;
    case '-':document.getElementById("number").value = nOne-now;break;
    case '/':document.getElementById("number").value = nOne/now;
    break;
    case '*':document.getElementById("number").value = nOne*now;break;
    case '%':document.getElementById("number").value = nOne%now;break;
  }
}