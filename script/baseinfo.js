

function chekinfo(){
    
    //Name validation
    var y = document.getElementById("name1").value;
    if (y == "")
    {
      alert("Sorry, You cannot left the name column blank as it is important for further mechanism. Please re-enter correct data.");
    }
    //age validation
    var x = document.getElementById("age1").value;
    if (x==10)
    {
      alert("You are too young so you should consult your parent or gaurdians. Please re-enter correct data.");
    }
    
    //Assesment year validation
    var z = document.getElementById("yer1").value;
    if (z==0)
    {
      alert("SORRY, We don't support past years.");
    }
    
    //data storage into sessions
     //(clear command might not reqired)
      //sessionStorage.clear();
      sessionStorage.name2 =  document.getElementById("name1").value;
      sessionStorage.age2 =  document.getElementById("age1").value;
      sessionStorage.prof2 =  document.getElementById("prof1").value;
      sessionStorage.res2 =  document.getElementById("res1").value;
      sessionStorage.user2 =  document.getElementById("user1").value;
      sessionStorage.yer2 =  document.getElementById("yer1").value;
//end of checkinfo function

}


 //this function will skip the process
 function went3(){
  window.location.assign("index.html");
  
  
}


 //this function will skip the process
 function went4(){
  window.location.assign("incosrc.html");
  
}
