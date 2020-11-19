
var today=new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow>18){
  greeting="Good Evening";
}
else if(hourNow>12)
{
  greeting="Good Afternoon";
}
else if(hourNow>0)
{
greeting="Good Morning";
}
else{
  greeting="Welcome!";
}

$("h2.Greeting").text(greeting);

$(".topCloud").on("click",function(){
  $(".topCloud").fadeOut();
})

$(".bottomCloud").on("click",function(){
  $(".IntroTitle").css("color","#98FB98");
})


$(".SecondTitle").on("click",function(){
  $(".topCloud").fadeIn();
})
