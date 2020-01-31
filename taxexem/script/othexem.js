// this function will showthe saved data on the top
function clickCounter() {
    document.getElementById("d1").innerHTML = "Your Name is " + sessionStorage.getItem('name2') ;
    sessionStorage.othexem =  0;
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
  
//this function will return the calculated data of Section 10(10bb) checkbox
function ten_10bbre(){
    document.getElementById("ten_10bbstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(10bc) checkbox
function ten_10bcre(){
    document.getElementById("ten_10bcstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(10c) checkbox
function ten_10cre(){
    document.getElementById("ten_10cstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(10cc) checkbox
function ten_10ccre(){
    document.getElementById("ten_10ccstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(11a) checkbox
function ten_11are(){
    document.getElementById("ten_11astot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(12b) checkbox
function ten_12bre(){
    document.getElementById("ten_12bstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(18) checkbox
function ten_18re(){
    document.getElementById("ten_18stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(23d) checkbox
function ten_23dre(){
    document.getElementById("ten_23dstot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(25) checkbox
function ten_25re(){
    document.getElementById("ten_25stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}
//this function will return the calculated data of Section 10(32) checkbox
function ten_32re(){
    document.getElementById("ten_32stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}


 //this function will validate the data entered into the taxexem/commexem.html page
 function chekinfo(){
    //this function will print the sum of array into the p1 paragraph
       var y = 0;
  
       y = total.reduce(intotal);
       function intotal(a, b) {
          return a + b;
       }
       sessionStorage.othexem =  y;
 }
 