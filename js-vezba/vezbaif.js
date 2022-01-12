// // KOJI JE DEO DANA


// var time = new Date() .getHours()
// var vreme
// if(time<20) {
// vreme="Sada je dan"
// } 
// else if (time<10) {
//     vreme="Sada je jutro"
// } else {
//     vreme= "Sada je vece"
// }
// document.getElementById("datum").innerHTML=vreme ;

ucenici= [];
ucenik = Number (prompt("unesite broj ucenika"))

for (let i = 0; i < ucenik; i++) {
    visuce = Number (prompt("unesite visinu ucenika"))
ucenici.push(visuce)
    
}

min=0;
max=0;

if (visuce>max) {
    max=visuce
}
if (visuce<max) 
{
    min=visuce
}

max = Math.max (...ucenici);
min = Math.min (...ucenici);
console.log("Visina ucenika je",ucenici)
console.log ( "Najnizi ucenik visok je ", min, "Najvisi ucenik visok je ", max) 

