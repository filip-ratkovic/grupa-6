
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

// dadYearsOld=Number(prompt ("Unesite godine oca"))
// sonYearsOld=Number(prompt ("Unesite godine deteta"))

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     let sum=(dadYearsOld - sonYearsOld * 2)
//     today =2022;
//    godina=today+sum;
//     alert(godina);
// }

// twiceAsOld(dadYearsOld, sonYearsOld)

// arr=[1,2,0,22,0,53,23];
// sum=0;
// for(i=0; i<arr.length; i++) {
// sum+=arr[i];
// arr2=sum/arr.length
// }
// console.log(arr2);



// let a = 23451;
// function myFunction() {
//     a = a.toString();
//     a = a.split("")
//     a.reverse();
//     a = a.join("");
//     a = parseInt(a)
//     console.log(a);
// }




// myFunction();


//     a=[1,2,3,4,5,33,211];
//     b=a.filter(myFunction);

//     function myFunction(value){
//         return value !== 4
//     }
// console.log(b);

// a=[1,2,3,4,5,33,211];
//  b=a.reduce(myFunction);

//  function myFunction(total ,value){
//    return value + total }

//   console.log(b);

// function powersOfTwo(n) {
//     arr = [];
//     for (i = 0; i <= n; i++) {
//         a = 2**i;
//         arr.push(a);

//     }
//     console.log(arr);
// }

// powersOfTwo(2);

// broj=[2,5,34,1,22];
// broj2=broj.map(putaDva);

// function putaDva(value) {

//     return value ** 2
// }

// console.log(broj2);


// broj=[2,5,34,1,22];

// broj2=broj.filter(brojevi) 
// function brojevi(value) {

//     return value%2!==0
// }
// console.log(broj2);

// broj=[2,5,34,1,22];

// broj2=broj.every(brojevi) 
// function brojevi(value) {

//     return value%2===0 
// }
// console.log(broj2);

// broj=[2,5,34,1,22];

// broj2=broj.find(brojevi) 
// function brojevi(value) {

//     return value%2!==0 
// }
// console.log(broj2);



// niz=Array.from("123456")

// console.log(niz);

function powersOfTwo(n){
    arr = [];
      for (i = 0; i <= n; i++) {
          a = 2**i;
          arr.push(a);
  
      }
    return arr
  }  