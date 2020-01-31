// this function will showthe saved data on the top
function clickCounter() {
    document.getElementById("d1").innerHTML = "Your Name is " + sessionStorage.getItem('name2') ;
    sessionStorage.commdedc =  0;
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


 //this function will return the calculated data of Section 80C(1 ) checkbox
 function eghyc_1re(){
    document.getElementById("eghyc_1stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C(2 ) checkbox
function eghyc_2re(){
    document.getElementById("eghyc_2stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C( 3) checkbox
function eghyc_3re(){
    document.getElementById("eghyc_3stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C(4 ) checkbox
function eghyc_4re(){
    document.getElementById("eghyc_4stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C(5 ) checkbox
function eghyc_5re(){
    document.getElementById("eghyc_5stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C(6 ) checkbox
function eghyc_6re(){
    document.getElementById("eghyc_6stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C( 7) checkbox
function eghyc_7re(){
    document.getElementById("eghyc_7stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C(8 ) checkbox
function eghyc_8re(){
    document.getElementById("eghyc_8stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C(9 ) checkbox
function eghyc_9re(){
    document.getElementById("eghyc_9stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C(10 ) checkbox
function eghyc_10re(){
    document.getElementById("eghyc_10stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C( 11) checkbox
function eghyc_11re(){
    document.getElementById("eghyc_11stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C(12 ) checkbox
function eghyc_12re(){
    document.getElementById("eghyc_12stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C(13 ) checkbox
function eghyc_13re(){
    document.getElementById("eghyc_13stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C(14 ) checkbox
function eghyc_14re(){
    document.getElementById("eghyc_14stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C(15 ) checkbox
function eghyc_15re(){
    document.getElementById("eghyc_15stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C(16 ) checkbox
function eghyc_16re(){
    document.getElementById("eghyc_16stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 80C(17 ) checkbox
function eghyc_17re(){
    document.getElementById("eghyc_17stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
 //this function will return the calculated data of Section 80C(18 ) checkbox
 function eghyc_18re(){
     document.getElementById("eghyc_18stot").innerHTML = subtotal;
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
       sessionStorage.commdedc =  y;
 }
 