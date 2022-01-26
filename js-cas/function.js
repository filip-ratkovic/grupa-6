
// unos=prompt("Unesite Vase ime")

// function ime(name) {
//     console.log("Vase ime je",name);
// }


// // ime(unos)
// visina=Number(prompt("unesi v"))
// tezina=Number(prompt("unesi t"))

// function bmi(visina,tezina) {
// bmi=tezina/visina**2;
// if(bmi<=18.5) {
// return "Underweight"
// } else if (bmi<=25) {
//     return "Normal"
// }
// else if (bmi<=30) {
//     return "Overweight"
// } else if (bmi>30) {
//     return "Obese"
// }
// }

// bmi(visina,tezina)

// function booleanToWord (bool) {

//     if(bool===true) {return "Yes"}

//     else if(bool===false) {return "No"}
// }

// booleanToWord(bool)

// function makeUpperCase(str) {
//     str().toUpperCase();
//   }

// function even_or_odd(number) {
//     if(number%2===0) {
//       return "Even"
//     } else if (number%2!==0) {
//       return "Odd"
//     }
//   }

// function between(a, b) {
//     let arr=[]
//    for(i=a;i<=b;i++) {
//        arr.push(i)
//        }
//  return arr;
//    }

dadYearsOld=Number(prompt ("Unesite godine oca"))
sonYearsOld=Number(prompt ("Unesite godine deteta"))

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let sum=(dadYearsOld - sonYearsOld * 2)
    today =2022;
   godina=today+sum;
    alert(godina);
}

twiceAsOld(dadYearsOld, sonYearsOld)

