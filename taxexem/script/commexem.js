// this function will showthe saved data on the top
function clickCounter() {
    document.getElementById("d1").innerHTML = "Your Name is " + sessionStorage.getItem('name2') ;
    sessionStorage.commexem =  0;
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
 
 //this function will return the calculated data of Section 10(1) checkbox
 function ten_1re(){
     document.getElementById("ten_1stot").innerHTML = subtotal;
     //the data stored in this array will be used to find the total of this page
     total.push(subtotal);
 }
 //this function will return the calculated data of Section 10(2) checkbox
 function ten_2re(){
    document.getElementById("ten_2stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(2a) checkbox
function ten_2are(){
    document.getElementById("ten_2astot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(4) checkbox
function ten_4re(){
    document.getElementById("ten_4stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(4b) checkbox
function ten_4bre(){
    document.getElementById("ten_4bstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(5) checkbox
function ten_5re(){
    document.getElementById("ten_5stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(10d) checkbox
function ten_10dre(){
    document.getElementById("ten_10dstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(13) checkbox
function ten_13re(){
    document.getElementById("ten_13stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(14) checkbox
function ten_14re(){
    document.getElementById("ten_14stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}

 //this function will validate the data entered into the taxexem/commexem.html page
 function chekinfo(){
    //this function will print the sum of array into the p1 paragraph
  
       var y = total.reduce(intotal);
       function intotal(a, b) {
          return a + b;
       }
       sessionStorage.commexem =  y;
 }
 