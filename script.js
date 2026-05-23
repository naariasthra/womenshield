
function sos(){alert("SOS alert sent!");}

function siren(){let a=new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");a.play();}
function getLocation(){
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(function(pos){
document.getElementById("location").innerHTML=
"Latitude: "+pos.coords.latitude+"<br>Longitude: "+pos.coords.longitude+
"<br><a target='_blank' href='https://maps.google.com/?q="+pos.coords.latitude+","+pos.coords.longitude+"'>Open Map</a>";
});
}else{alert("Location not supported");}

}
