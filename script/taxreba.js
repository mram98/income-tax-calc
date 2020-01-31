// this function will showthe saved data on the top
function clickCounter() {
    document.getElementById("d1").innerHTML = "Your Name is " + sessionStorage.getItem('name2') ;
    document.getElementById("d2").innerHTML = "Your Total Income is " + sessionStorage.getItem('incomeTotal') ;
    document.getElementById("d3").innerHTML = "Your Total Exemption is " + sessionStorage.getItem('totexem') ;
    document.getElementById("d4").innerHTML = "Your Total Deductions are " + sessionStorage.getItem('totdedc') ;
 }
 // this function will take the user to common deductions
 function went1(){
    
//taking data from sessions
var x = Number(sessionStorage.incomeTotal);
    if (x <= 350000){
      document.getElementById("d5").innerHTML = "Your Applied Rebate is 12,000.00 " ;
      sessionStorage.totreba = 12000 ;
    }
    else{
      document.getElementById("d5").innerHTML = "You cannot avail the feature of Rebate " ;
      sessionStorage.totreba = 0 ;
    }
 }

 // this function will take the user to other deductions
 function went2(){
    window.location.assign("taxdedc.html");
 }

 
 //this function will skip the process
 function went3(){
  window.location.assign("taxreba.html");
  sessionStorage.totreba = 0 ;
  
}
