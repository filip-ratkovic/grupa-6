// for (let i=1;i<16;i++) {
    
//     if(i % 2 === 0) {
//         console.log(i,"je paran broj")
//     }
//     else {
//         console.log(i,"je neparan broj")
//     }
// }


// a=Number ( prompt('uneste broj'))
// b=Number ( prompt('uneste broj'))
// c=Number ( prompt('uneste broj'))
// d=Number ( prompt('uneste broj'))

// // console.log ("Prosek za uneta 4 broja je",(a+b+c+d)/4)


// zbir =0
// for (let i=0 ; i<1000; i++) {
//     if(i%3===0 && i%5===0) {
//         zbir+=i
//         console.log(zbir)
//     }
// }

// for (let i=0; i<50; i++) {
// if(i%3===0 && i%5===0){
//     console.log("Fizzbazz")
// }

// else if (i%3===0 ) {
//     console.log ("Fizz")
//     }

//     else if (i%5===0 ) {
//         console.log ("buzz")
//         }

//     else {
//         console.log (i)
//     }
// }

// a=Number( prompt("uneti broj"))
// fakt=0

// for ( let i=1; i<=a; i++) {
//     fakt=fakt*1

// }
// console.log (fakt)


// br1=1
// br2=1

// console.log(br1)
// console.log(br2)
// for (i=1; i<8; i++) {
// sum=br1+br2 
// br1=br2
// br2=sum
// console.log(sum)

// }

//  a="*"
//  console.log (a)
// for (i=0;i<4;i++) {
// a+="*"
// console.log (a)
// }


// lozinka= prompt ("unesite lozinku")

// while (lozinka !== "tajno") {
//     lozinka= prompt ("Uneli ste pogresnu lozinku")
// }
// alert ("Tacna lozinka")


// while (true) {
//     br=Number ( prompt ("Unesite broj"))
// if (br===0) {
//     alert ("Uneli ste 0, program se prekida")
//      break; 
// }
//  if (br>=10 && br<=20) {
//     alert ("Uneli ste tacan broj", br)
//      }
//  else {
//         prompt("Uneli ste pogresan broj, pokusajte ponovo")
//      }
//     }

a = (prompt("Izaberite broj: 1. Sabiranje, 2. oduzimanje, 3. deljenje, 4. mnozenje, 5.izlaz iz programa"))

while (true) {

    switch (a) {
        
        case "1":
            b = Number(prompt("Unesite 1. broj"))
            c = Number(prompt("Unesite 2. broj"))
            console.log(b+c)
            break;
    
        case "2":
            b = Number(prompt("Unesite 1. broj"))
            c = Number(prompt("Unesite 2. broj"))
            console.log(b-c)
            break;
    
        case "3":
            b = Number(prompt("Unesite 1. broj"))
            c = Number(prompt("Unesite 2. broj"))
            console.log(b/c)
            break;
    
        case "4":
            b = Number(prompt("Unesite 1. broj"))
            c = Number(prompt("Unesite 2. broj"))
            console.log(b*c)
            break;
           
    } if (a=="5") {
        console.log ("prekid");
        break;
    }
}