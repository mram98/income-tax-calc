// this function will showthe saved data on the top
function clickCounter() {
   document.getElementById("d1").innerHTML = "Your Name is " + sessionStorage.getItem('name2') ;
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
   //document.getElementById("oth1stot").innerHTML = subtotal;
    
}

//this function willl return the calculated data of others checkbox
function oth1re(){
    document.getElementById("oth1stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}

//this function willl return the calculated data of salary checkbox
function slry1re(){
    document.getElementById("slry1stot").innerHTML = subtotal;
    //the data stored in this array will be used to find the total of this page
    total.push(subtotal);
}

//this function willl return the calculated data of pension checkbox
function pnsn1re(){
   document.getElementById("pnsn1stot").innerHTML = subtotal;
   //the data stored in this array will be used to find the total of this page
   total.push(subtotal);
}

//this function willl return the calculated data of intrest gain checkbox
function ingain1re(){
   document.getElementById("ingain1stot").innerHTML = subtotal;
   //the data stored in this array will be used to find the total of this page
   total.push(subtotal);
}

//this function willl return the calculated data of dividend checkbox
function dvnd1re(){
   document.getElementById("dvnd1stot").innerHTML = subtotal;
   //the data stored in this array will be used to find the total of this page
   total.push(subtotal);
}

//this function willl return the calculated data of lotery/ betting checkbox
function ltry1re(){
   document.getElementById("ltry1stot").innerHTML = subtotal;
   //the data stored in this array will be used to find the total of this page
   total.push(subtotal);
}

//this function willl return the calculated data of gift checkbox
function gift1re(){
   document.getElementById("gift1stot").innerHTML = subtotal;
   //the data stored in this array will be used to find the total of this page
   total.push(subtotal);
}

//this function willl return the calculated data of rental income checkbox
function rent1re(){
   document.getElementById("rent1stot").innerHTML = subtotal;
   //the data stored in this array will be used to find the total of this page
   total.push(subtotal);
}

//this function willl return the calculated data of capital gain checkbox
function cptl1re(){
   document.getElementById("cptl1stot").innerHTML = subtotal;
   //the data stored in this array will be used to find the total of this page
   total.push(subtotal);
}

//this function willl return the calculated data of business/ proffession checkbox
function frel1re(){
   document.getElementById("frel1stot").innerHTML = subtotal;
   //the data stored in this array will be used to find the total of this page
   total.push(subtotal);
}

//this function will validate the data entered into the incosrc.html page
function chekinfo(){
   //this function will print the sum of array into the p1 paragraph
 
      var y = total.reduce(intotal);
      function intotal(a, b) {
         return a + b;
      }
      sessionStorage.incomeTotal =  y;
}
