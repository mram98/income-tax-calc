//initializing initial data from sessions to variables
var totin = Number(sessionStorage.incomeTotal);
var totex = Number(sessionStorage.totexem);
var totde = Number(sessionStorage.totdedc);
var totre = Number(sessionStorage.totreba);
var totct;
var groin;
//flag variables
var flag1, flag2, flag3, flag4, flag5, flag6, flag7, flag8;
// slab values
var a1, a2, a3, a4;
var p1, p2, p2, p4;
//filling slab values


s2 = 10000000;

//fill data button
function act1(){
    if (totin == NaN){
        alert("SORRY, You had not declared your income properly.");
    }
    else{
        document.getElementById("totalincome").innerHTML = totin; 
    }
    if (totex == NaN){
        alert("SORRY, You had not declared your exemptions properly.");
    }
    else{
        document.getElementById("exempt").innerHTML = totex; 
    }
    if (totde == NaN){
        alert("SORRY, You had not declared your deductions properly.");
    }
    else{
        document.getElementById("deduct").innerHTML = totde;
    }
    totct = totex + totde;     //adding up the cut-off's
    if (totct == NaN){
        alert("SORRY, You had not declared your some data properly.");
    }
    else{
        document.getElementById("totalcutoff").innerHTML = totct;
    }
    //comparison of income and cuttoff
    if (totin > totct){
        groin = totin - totct;
    }
    else {
        alert("SORRY, Your Cut-off's are greater than your Income.");
    }
    //filling the data of gross income    
    document.getElementById("grossincome").innerHTML = groin;
}

//process slab button
function act2(){
    //slab 1 data
    flag1 = groin/100*20;
    document.getElementById("slab1").innerHTML = flag1;

    // total of all slabs
    flag4 = flag1;
    document.getElementById("totalslab").innerHTML = flag4;   
    
    //surcharge calculations
    if (groin < s2){
        flag5 = 0;
        document.getElementById("sur").innerHTML = flag5;
    }
    if (groin > s2){
        flag5 = (flag4/100)*12;
        document.getElementById("sur").innerHTML = flag5;
    }

    //Educational cess calculations
    flag6 = (flag4 + flag5)/100*4;
    document.getElementById("educess").innerHTML = flag6;


    //final Net tax payable
    flag7 = flag6 + flag5 + flag4;
    document.getElementById("totaltax").innerHTML = flag7;

    
   //end of function
}

//save data button
function act3(){
    

}
