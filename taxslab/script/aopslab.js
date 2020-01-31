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
a1 =   250000;
a2 =   500000;
a3 =  1000000;
s1 =  5000000;
s2 = 10000000;
p1 = 5;
p2 = 20;
p3 = 30;
//fill data button
function act1(){
    if (typeof(totin) == "undefined"){
        alert("SORRY, You had not declared your income properly.");
    }
    else{
        document.getElementById("totalincome").innerHTML = totin; 
    }
    if (typeof(totex) == "undefined"){
        alert("SORRY, You had not declared your exemptions properly.");
    }
    else{
        document.getElementById("exempt").innerHTML = totex; 
    }
    if (totde == null){
        alert("SORRY, You had not declared your deductions properly.");
    }
    else{
        document.getElementById("deduct").innerHTML = totde;
    }
    totct = totex + totde;     //adding up the cut-off's
    if (totct == null){
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
    document.getElementById("slab1").innerHTML = 0;

    // slab 2 data
    if(groin < a1){
        alert("SORRY, The Slab is smaller than your Income.");
        document.getElementById("slab2").innerHTML = 0;
    }
    else if(groin <= a2 && groin >= a1){
        flag1 = (groin-a1)/100*p1;
        document.getElementById("slab2").innerHTML = flag1;
        }
    else if(groin >= a2){
            flag1 = a2/100*p1;
            document.getElementById("slab2").innerHTML = flag1;
        }
    

    // slab 3 data
    if(groin < a2){
        document.getElementById("slab3").innerHTML = 0;
    }
    else if(groin <= a3 && groin >= a2){
        flag2 = (groin-a2)/100*p2;
        document.getElementById("slab3").innerHTML = flag2;
        }
    else if(groin >= a3){
            flag2 = a3/100*p1;
            document.getElementById("slab3").innerHTML = flag2;
        }
    

    // slab 4 data
    if(groin < a3){
        document.getElementById("slab4").innerHTML = 0;
    }
    else if(groin >= a3){
            flag3 = (groin-a3)/100*p1;
            document.getElementById("slab4").innerHTML = flag3;
        }

    // total of all slabs
    flag4 = flag1+flag2+flag3;
    document.getElementById("totalslab").innerHTML = flag4;   
    
    //surcharge calculations
    if (groin < s1){
        flag5 = 0;
        document.getElementById("sur").innerHTML = flag5;
    }
    if (groin > s1 && groin < s2){
        flag5 = (flag4/100)*10;
        document.getElementById("sur").innerHTML = flag5;
    }
    else if (groin > s2){
        flag5 = (flag4/100)*15;
        document.getElementById("sur").innerHTML = flag5;
    }

    //Educational cess calculations
    flag6 = (flag4 + flag5)/100*2;
    document.getElementById("educess").innerHTML = flag6;

    //secondrary and higher edu cess calculations
    flag7 = (flag4 + flag5)/100*1;
    document.getElementById("shecess").innerHTML = flag7;

    //final Net tax payable
    flag8 = flag7 + flag6 + flag5 + flag4;
    document.getElementById("totaltax").innerHTML = flag8;

    
   //end of function
}

//save data button
function act3(){
    

}
