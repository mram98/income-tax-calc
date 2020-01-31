// this function will showthe saved data on the top
function clickCounter() {
    document.getElementById("d1").innerHTML = "Your Name is " + sessionStorage.getItem('name2') ;
    document.getElementById("d2").innerHTML = "Your Total Income is " + sessionStorage.getItem('incomeTotal') ;
    document.getElementById("d3").innerHTML = "Your Total Exemption is " + sessionStorage.getItem('totexem') ;
    document.getElementById("d4").innerHTML = "Your Total Deductions are " + sessionStorage.getItem('totdedc') ;
    document.getElementById("d5").innerHTML = "Your Rebate/ Relief are " + sessionStorage.getItem('totreba') ;
    document.getElementById("d6").innerHTML = "Your Total tax is: " + sessionStorage.getItem('totaltax1') ;
 }
 // this function will take the user to Respective Slabs
 function went1(){
   //taking data from sessions
   var x = Number(sessionStorage.age2);
   var y = Number(sessionStorage.user2);

   //aopslab verification
      if (y == 2 || y == 3)
   {
    window.location.assign("taxslab/aopslab.html");
   }
   //authslab verification
   if (y == 5)
   {
    window.location.assign("taxslab/authslab.html");
   }
   //coopslab verification
   if (y == 9)
   {
    window.location.assign("taxslab/coopslab.html");
   }
   //decslab verification
   if (y == 6)
   {
    window.location.assign("taxslab/decslab.html");
   }
   //forcslab verification
   if (y == 7)
   {
    window.location.assign("taxslab/forcslab.html");
   }
   //hufslab verification
   if (y == 1 && x == 18)
   {
    window.location.assign("taxslab/hufslab.html");
   }
   //llpslab verification
   if (y == 4)
   {
    window.location.assign("taxslab/llpslab.html");
   }
   //noneslab verification
   if (y == 0 && x == 10)
   {
    window.location.assign("taxslab/noneslab.html");
   }
   //senior slab verification
   if (y == 1 && x == 60)
   {
    window.location.assign("taxslab/seniorslab.html");
   }
   //supsenior slab verification
   if (y == 1 && x == 80)
   {
    window.location.assign("taxslab/supseniorslab.html");
   }

}

 // this function will take the user to other exemptions
 function went2(){
    window.location.assign("taxfinal.html");
 }
