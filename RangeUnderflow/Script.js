function myFunction() {
  var txt = "";
  if (document.getElementById("id1").validity.rangeUnderflow) {
    txt = "Value too less";
  } else {
    txt = "Input OK";
  } 
  document.getElementById("demo").innerHTML = txt;
}
