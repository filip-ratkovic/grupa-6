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

// ucenici= [];
// ucenik = Number (prompt("unesite broj ucenika"))

// for (let i = 0; i < ucenik; i++) {
//     visuce = Number (prompt("unesite visinu ucenika"))
// ucenici.push(visuce)
    
// }

// min=0;
// max=0;

// if (visuce>max) {
//     max=visuce
// }
// if (visuce<max) 
// {
//     min=visuce
// }

// max = Math.max (...ucenici);
// min = Math.min (...ucenici);
// console.log("Visina ucenika je",ucenici)
// console.log ( "Najnizi ucenik visok je ", min, "Najvisi ucenik visok je ", max) 

// ZADATAK 1 

// niz = [2,3,5,8,9,11,55,78,100,20]
// niza=0
// for (i=1 ; i<10 ; i++) 
// {
//     niza= ( niz[niz.length -i])
//     console.log(niza*3)

   
// }

// ZADATAK 1 A ////

niz = []
niza=0

for (i=0 ; i<10 ; i++) {
    broj=Number(prompt("Unesite broj"))
    niz.push(broj)

}

for (i=0 ; i<10 ; i++) 
{
    niza= ( niz[i])
console.log(niza*3)

   
}


// ZADATAK 2 

// niz = []
// niza=0

// for (i=0 ; i<10 ; i++) {
//     broj=Number(prompt("Unesite broj"))
//     niz.push(broj)

// }

// for (i=0 ; i<10 ; i++) 
// {
//     niza= ( niz[i])


//     if (niza===0) {
//         console.log ("Broj 0 je takodje paran broj")
//         continue
//     }
//     if (niza%2===0)
//     console.log (niza, "je parni broj")

// }