//name of the males and females plus the days of the week
function mighty () {
var maleName = ["Kwasi" , "Kwadwo" ,"Kwabena" ,"Kwaku" ,"Yaw" ,"Kofi" ,"Kwame"] ;
var femaleName = ["Akosua" ,"Adowoa" ,"Abenaa" ,"Akua" , "Yaa" ,"Afua" ,"Ama"]; 
var weekDay =["Sunday" , "Monday" ,"Tuesday" ,"Wednesday" ,"Thursday" ,"Friday", "Saturday"];
//var showing the date and year born
var DOB = document.querySelector("#date").value;
var year = document.querySelector("#year").value;
// var showing gender 
var gender = $("#gender").val();
var month = document.querySelector("#month").value;
//changing the string to a number
var DOB2 = parseInt(DOB);
var combinedDate = month+" "+DOB2+" "+year;
var date = new Date(combinedDate);
    let dayBorn = date.getDay();
  if(gender=="Male"){
      if(dayBorn==0){
          alert(+" You were born on "+weekDays[0]+" and your Akan name is "+ maleName[0])
      }
      if(dayBorn==1){
        alert("You were born on "+weekDay[1]+" and your Akan name is "+ maleName[1])
    }
    if(dayBorn==2){
        alert("You were born on "+weekDay[0]+" and your Akan name is "+ maleName[2])
    }
    if(dayBorn==3){
        alert("You were born on "+weekDay[0]+" and your Akan name is "+ maleName[3])
    }
    if(dayBorn==4){
        alert("You were born on "+weekDay[0]+" and your Akan name is "+ maleName[4])
    }
    if(dayBorn==5){
        alert("You were born on "+weekDay[0]+" and your Akan name is "+ maleName[5])
    }
    
    if(dayBorn==6){
        alert("You were born on "+weekDay[0]+" and your Akan name is "+ maleName[6])
    }
  }
  if(gender=="Female"){
    if(dayBorn==0){
        alert("You were born on "+weekDay[0]+" and your Akan name is "+femaleName[0])
    }
    if(dayBorn==1){
      alert("You were born on "+weekDay[1]+" and your Akan name is "+femaleName[1])
  }
  if(dayBorn==2){
      alert("You were born on "+weekDay[2]+" and your Akan name is "+femaleName[2])
  }
  if(dayBorn==3){
      alert("You were born on "+weekDay[3]+" and your Akan name is "+femaleName[3])
  }
  if(dayBorn==4){
      alert("You were born on "+weekDay[4]+" and your Akan name is "+femaleName[4])
  }
  if(dayBorn==5){
      alert("You were born on "+weekDay[5]+" and your Akan name is "+femaleName[5])
  }
  
  if(dayBorn==6){
      alert("You were born on "+days[6]+" and your Akan name is "+femaleName[6])
  }
}
}
 
