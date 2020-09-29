function myFunction (){
var txt = "";
if(document.getElementById("id1"). validity.rangeOverflow){
txt = "value too large";
} else{
txt = "input is OK ";
}
document.getElementById("demo"). innerHTML = txt;
}

