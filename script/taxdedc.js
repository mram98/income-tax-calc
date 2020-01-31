// this function will showthe saved data on the top
function clickCounter() {
    document.getElementById("d1").innerHTML = "Your Name is " + sessionStorage.getItem('name2') ;
    document.getElementById("d2").innerHTML = "Your Total Income is " + sessionStorage.getItem('incomeTotal') ;
    document.getElementById("d3").innerHTML = "Your Total Exemption is " + sessionStorage.getItem('totexem') ;
    document.getElementById("d4").innerHTML = "Your Common Deductions are " + sessionStorage.getItem('commdedc') ;
    document.getElementById("d5").innerHTML = "Your Other Deductions are " + sessionStorage.getItem('othdedc') ;
    document.getElementById("d6").innerHTML = "Your Rebate/ Relief are " + sessionStorage.getItem('totreba') ;
 }
 // this function will take the user to common deductions
 function went1(){
    window.location.assign("taxdedc/commdedc.html");
 }

 // this function will take the user to other deductions
 function went2(){
    window.location.assign("taxdedc/othdedc.html");
 }

 //this function will take the user to Tax Slab
 function went3(){
    //please write the script for the rebate's
    window.location.assign("taxreba.html");
 }

 // this function will take the user to Tax Slab
 function went4(){
   window.location.assign("taxslab.html");
   var a = Number(sessionStorage.commdedc);
    var b = Number(sessionStorage.othdedc);
    var c = a + b ;
    sessionStorage.totdedc = c ;
}

 //this function will skip the process
 function went5(){
   window.location.assign("taxslab.html");
   sessionStorage.totdedc = 0 ;
   sessionStorage.totreba = 0 ;
}