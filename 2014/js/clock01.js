var clock;$(document).ready(function(){var currentDate=new Date();
var futureDate=new Date(2014, 10, 22, 8, 0, 0, 0);
var diff=(futureDate.getTime() / 1000) - (currentDate.getTime() / 1000);
console.log(diff)
if (diff < 0){
clock=$('.clock').FlipClock(0,{clockFace: 'DailyCounter',countdown: true})
}
else
{
clock=$('.clock').FlipClock(diff,{clockFace: 'DailyCounter',countdown: true})
}
;});