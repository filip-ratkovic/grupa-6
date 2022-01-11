// KOJI JE DEO DANA


var time = new Date() .getHours()
var vreme
if(time<20) {
vreme="Sada je dan"
} 
else if (time<10) {
    vreme="Sada je jutro"
} else {
    vreme= "Sada je vece"
}
document.getElementById("datum").innerHTML=vreme ;