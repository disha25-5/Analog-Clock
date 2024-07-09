let hr=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("second");

function displayTime(){
let date =new Date();
//hour minute second
let h=date.getHours();
let m=date.getMinutes();
let s=date.getSeconds();
let hRotations=30*h+m/2;
let mRotations=6*m;
 let sRotations=6*s;

 hr.style.transform= `rotate(${hRotations}deg)`;
 min.style.transform= `rotate(${mRotations}deg)`;
 sec.style.transform= `rotate(${sRotations}deg)`;
}
setInterval(displayTime,1000);