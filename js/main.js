
function getvalue(){
var selection1 =  parseInt($("#single1 option:selected").val());
var selection2 =  parseInt($("#single2 option:selected").val());
var selection3 =  parseInt($("#single3 option:selected").val());
var selection4 =  parseInt($("#single4 option:selected").val());



if (  selection4 === 0 && 
      selection3 === 0 &&
      selection1 === 0 &&
      selection2 === 0){
    
    $( "pre" ).css({"color":"#00c1ad"});
    $( "pre" ).html("Have a pick and see if we are a match");

}
else if (

  selection4 === 0 && 
  selection3 === 1 &&
  selection1 === 2 &&
  selection2 === 2 ){
    $( "pre" ).css({"color":"#00c1ad"});
    $( "pre" ).html("Have a pick and see if we are a match");
   
  }

else if (

  selection4 === 1 && 
  selection3 === 1 &&
  selection1 === 1 &&
  selection2 === 1 ){
  $( "pre" ).css({"color":"#00c1ad"});
   $( "pre" ).html("I can’t wait to hear from you! ");
  } 

  else if (

  selection4 === 2 && 
  selection3 === 2 &&
  selection1 === 2 &&
  selection2 === 2 ){
    $( "pre" ).css({"color":"#00c1ad"});
   $( "pre" ).html("Love that. Look forward to hearing from you. ");
  } 

  else if (

  selection4 === 3 && 
  selection3 === 3 &&
  selection1 === 3 &&
  selection2 === 3 ){
    $( "pre" ).css({"color":"#00c1ad"});
   $( "pre" ).html("You have great taste!");
  } 

  
/////// Negative //////

  else if (

  selection4 === 1 && 
  selection3 === 3 &&
  selection1 === 1 &&
  selection2 === 4 ){
    $( "pre" ).css({"color":"#00c1ad"});
   $( "pre" ).html("hmm, I don't think we are made for each other")
  } 

/////// Else //////

  else{
    $( "pre" ).css({"color":"#00c1ad"});
    $( "pre" ).html("Oh Great! You’re exactly what I'm looking for. ")
  
  }
}




$(document).ready(function() {
  getvalue()

    $(".buttonanswer").click(function() {
       console.log('buttonanswer')
      getvalue()
    console.log('button111')
  });



});