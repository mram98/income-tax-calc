// this function will showthe saved data on the top
function clickCounter() {
    document.getElementById("d1").innerHTML = "Your Name is " + sessionStorage.getItem('name2') ;
    document.getElementById("d2").innerHTML = "Your Total Income is " + sessionStorage.getItem('incomeTotal') ;
    document.getElementById("d3").innerHTML = "Your Common Exemptions are " + sessionStorage.getItem('commexem') ;
    document.getElementById("d4").innerHTML = "Your Other Exemptions are " + sessionStorage.getItem('othexem') ;
 }
 // this function will take the user to common exemptions
 function went1(){
    window.location.assign("taxexem/commexem.html");
 }

 // this function will take the user to other exemptions
 function went2(){
    window.location.assign("taxexem/othexem.html");
 }

 //this function will take the user to deductions
 function went3(){
    window.location.assign("taxdedc.html");
    var a = Number(sessionStorage.commexem);
    var b = Number(sessionStorage.othexem);
    var c = a + b ;
    sessionStorage.totexem = c ;
 }

  //this function will skip the process
  function went4(){
   window.location.assign("taxdedc.html");
   sessionStorage.totexem = 0 ;
}