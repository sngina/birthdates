//name of the males and females plus the days of the week
function mighty () {
var maleNames = ["Kwasi" , "Kwadwo" ,"Kwabena" ,"Kwaku" ,"Yaw" ,"Kofi" ,"Kwame"] ;
var femaleNames = ["Akosua" ,"Adowoa" ,"Abenaa" ,"Akua" , "Yaa" ,"Afua" ,"Ama"]; 
var weekDay =["Sunday" , "Monday" ,"Tuesday" ,"Wednesday" ,"Thursday" ,"Friday", "Saturday"];


var DOB = document.querySelector("#date").value;
var year = document.querySelector("#year").value;
// var display = document.queryselector("#display");
var gender = $("#gender").val();
var month = document.querySelector("#month").value;

var DOB2 = parseInt(DOB);
var combinedDate = month+" "+DOB2+" "+year;
var date = new Date(combinedDate);
    let dayBorn = date.getDay();
  if(gender=="Male"){
      if(dayBorn==0){
          alert(+" You were born on "+weekDays[0]+" and your Akan name is "+maleNames[0])
      }
      if(dayBorn==1){
        alert("You were born on "+days[1]+" and your Akan name is "+akanMale[1])
    }
    if(dayBorn==2){
        alert("You were born on "+days[0]+" and your Akan name is "+akanMale[2])
    }
    if(dayBorn==3){
        alert("You were born on "+days[0]+" and your Akan name is "+akanMale[3])
    }
    if(dayBorn==4){
        alert("You were born on "+days[0]+" and your Akan name is "+akanMale[4])
    }
    if(dayBorn==5){
        alert("You were born on "+days[0]+" and your Akan name is "+akanMale[5])
    }
    
    if(dayBorn==6){
        alert("You were born on "+days[0]+" and your Akan name is "+akanMale[6])
    }
  }
  if(gender=="Female"){
    if(dayBorn==0){
        alert("You were born on "+days[0]+" and your Akan name is "+akanFemale[0])
    }
    if(dayBorn==1){
      alert("You were born on "+days[1]+" and your Akan name is "+akanFemale[1])
  }
  if(dayBorn==2){
      alert("You were born on "+days[2]+" and your Akan name is "+akanFemale[2])
  }
  if(dayBorn==3){
      alert("You were born on "+days[3]+" and your Akan name is "+akanFemale[3])
  }
  if(dayBorn==4){
      alert("You were born on "+days[4]+" and your Akan name is "+akanFale[4])
  }
  if(dayBorn==5){
      alert("You were born on "+days[5]+" and your Akan name is "+akanFemale[5])
  }
  
  if(dayBorn==6){
      alert("You were born on "+days[6]+" and your Akan name is "+akanFemale[6])
  }
}
}
 
