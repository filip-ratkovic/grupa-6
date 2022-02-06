
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




// function powersOfTwo(n){
//     arr = [];
//       for (i = 0; i <= n; i++) {
//           arr.push(2**i);
//       }
//     return arr
//   }  
// tri=powersOfTwo(13);
// console.log(tri);



// const reverseSeq = n => {
//     arr = [];
//     if (n < 0) {
//         return "Unesite pozitivan broj"
//     }
//     for (var i = n; i > 0; i--) {
//         arr.push(i)


//         }
//             return arr;
//         };

//         console.log(reverseSeq(6))
//
//
// const reverseSeq = n => {
//     arr = [];
//     if (n < 0) {
//         return;
//     }
//     for (var i = n; i > 0; i--) {
//         arr.push(i)


//         }
//             return arr;}



// function pillars(num_pill, dist, width) {

//    if(num_pill<=1) {
//       return 0;
//    }
//    if(dist<10 || dist>30) {
//       return;
//    }
//    if (width<10 || width>50) {
//    

//       return (num_pill-1)*(dist*100+width)-width
//    }



//   console.log(pillars(2,20,25));




// function symmetricPoint(p, q) {
//    if (p > q) {
//       t = p - q;
//       p1 = q - t;
//       return p1;
//    }
//    if (p < q) {
//       t = q - p;
//       p1 = q + t;
//       return p1;
//    }
// }

// console.log(symmetricPoint(16, 22));


// function symmetricPoint(p, q) {
//     return [2*q[0] - p[0], 2*q[1]  - p[1]]; 
// }

// console.log(symmetricPoint([2,2], [-1,2]));


// function iceBrickVolume(radius, bottleLength, rimLength) {
//     visina=bottleLength-rimLength;
//     zapremina=visina*(2*radius**2)
//     return zapremina;
//    }

//   console.log(iceBrickVolume(1,10,2));




// function symmetricPoint(p, q) {
//     return [(q[0] + p[0])/2, (q[1] + p[1])/2]; 
// }

// console.log(symmetricPoint([2,2], [-1,2]));


//////// ARROW FUNCTION /////////////////////////////////////////////////////////////////////////////


// function inverseSlice(items, a, b) {
//    c=b-a;
//  items.splice(a,c);

//     return items ;
//   }

//   sl=inverseSlice([1,2,3,4,5,6],2,4);

//   console.log(sl);

// function stray(numbers) {
//     num = 0;
//     if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
//         num = numbers[0];
//     }
//     if (numbers[numbers.length - 1] !== numbers[numbers.length - 2] &&
//         numbers[numbers.length - 1] !== numbers[numbers.length - 3]) {
//         num = numbers[numbers.length - 1]
//     }
//     for (let i = 1; i < numbers.length - 1; i++) {
//         if (numbers[i] !== numbers[i - 1] && numbers[i] !== numbers[i + 1]) {
//             num = numbers[i];
//             break;
//         }
//     }
//     return num;   
// }

// console.log(stray([ 1, 1,2, 1,1]));



// function largestPairSum(numbers) {
// numbers.sort(function(a, b) {return b - a});
//     a = numbers[0];
//     b = numbers[1];
//     c = a + b;
//     return c;
// }


// console.log(largestPairSum([1, 2, 5, 3, 23, 11, 21]));



// 1,2,6,4,5,2                5,2,6,4,1,2. 

// function nbYear(p0, percent, aug, p) {
//   percent=percent/100;
//   count=0;
//     while (p0<p) {

// p0=p0+p0*percent+aug;
// count=count+1;

//    }
//    return count;
// }

// console.log(nbYear(1000,2,50,1200));



// const removeConsecutiveDuplicates = s => {
// arr=s.split(" ");
// arr2=[];
// for (var i=0; i<s.length; i++) {
//     if(arr[i] !==arr [i+1]) {
//         arr2.push(arr[i]);
//     }
// } arr2=arr2.join(" ");


// return arr2
// }

// console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));






// function myFunction(array) {
//     for (var i = 0; i < array.length; i++) {
//         for (var j = i + 1; j > 0; j--) {
//             if (array[j] < array[j - 1]) {

//                 //  [array[j], array[j - 1]]    =   [ array[j - 1], array[j]]
//                 pomVar = array[j];
//                 array[j] = array[j - 1];
//                 array[j - 1] = pomVar;


//             }
//         }
//     }return array;
// }

//     console.log(myFunction([9, 2, 5, 2, 8, 3, 1]));



// function openOrSenior(data) {
//     for (i = 0; i < data.length; i++) {

//         if (data[i][0] >= 55 && data[i][1] > 7) {
//             data[i] = "Senior";

//         } else {
//             data[i] = "Open"
//         }

//     }return data

// }



function addBinary(a, b) {
  
    return (a+b).toString(2);
    } 



console.log(addBinary(3, 5));


