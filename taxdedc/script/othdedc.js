// this function will showthe saved data on the top
function clickCounter() {
    document.getElementById("d1").innerHTML = "Your Name is " + sessionStorage.getItem('name2') ;
    sessionStorage.othdedc =  0;
 }
 // this function shows the interval for respective checkbox
 function clicked(checkBox, text) {
     if (checkBox.checked == true){
       text.style.display = "block";
     } else {
        text.style.display = "none";
     }
   }
 
 // code below will calculate the yearly data initiated by the button click 
 var subtotal = "";
 var total = [];  
 function anualize( amount1,  interval1){
    var amount = amount1.value;
    var interval = interval1.value;
    subtotal = amount*interval;
 }
  
//this function will return the calculated data of Section 80( ccg) checkbox
function eghty_ccgre(){
    document.getElementById("eghty_ccgstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
} 
//this function will return the calculated data of Section 80(d ) checkbox
function eghty_dre(){
    document.getElementById("eghty_dstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
} 
//this function will return the calculated data of Section 80(dd ) checkbox
function eghty_ddre(){
    document.getElementById("eghty_ddstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
} 
//this function will return the calculated data of Section 80(ddb ) checkbox
function eghty_ddbre(){
    document.getElementById("eghty_ddbstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
} 
//this function will return the calculated data of Section 80(e ) checkbox
function eghty_ere(){
    document.getElementById("eghty_estot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
} 
//this function will return the calculated data of Section 80(ee ) checkbox
function eghty_eere(){
    document.getElementById("eghty_eestot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
} 
//this function will return the calculated data of Section 80(gg ) checkbox
function eghty_ggre(){
    document.getElementById("eghty_ggstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
} 
//this function will return the calculated data of Section 80(ggb ) checkbox
function eghty_ggbre(){
    document.getElementById("eghty_ggbstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
} 
//this function will return the calculated data of Section 80(rrb ) checkbox
function eghty_rrbre(){
    document.getElementById("eghty_rrbstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
} 
//this function will return the calculated data of Section 80(tta ) checkbox
function eghty_ttare(){
    document.getElementById("eghty_ttastot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
} 
//this function will return the calculated data of Section 80(ttb ) checkbox
function eghty_ttbre(){
    document.getElementById("eghty_ttbstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
} 
//this function will return the calculated data of Section 80(u ) checkbox
function eghty_ure(){
    document.getElementById("eghty_ustot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}


 //this function will validate the data entered into the taxdedc/commdedc.html page
 function chekinfo(){
    //this function will print the sum of array into the p1 paragraph
  
       var y = total.reduce(intotal);
       function intotal(a, b) {
          return a + b;
       }
       sessionStorage.othdedc =  y;
 }
 