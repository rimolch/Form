function myFunction() {
  var txt = "";
  if (document.getElementById("id1").validity.rangeUnderflow) {
    txt = "Value too less";
  } else {
    txt = "Value too large";
  } 
  document.getElementById("demo").innerHTML = txt;
}
