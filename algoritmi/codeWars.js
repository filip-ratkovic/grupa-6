// 1111 ///////////////////  FACTORIAL EXAMPLE     /////////////////
// function factorial(n) {
//   let sum = 1;
//   if (n === 0) {
//     return "factorial for " + n + "is " + sum
//   }

//   if (n < 0 || n > 12) {
//     return "Error"
//   }
//   for (var i = n; i > 0; i--) {
//     sum *= i;
//   }
//   return sum
// }
// console.log(factorial(0))

////222222///////// FIND UNIQ///////////
// function findUniq(arr) {
//   if(arr.length<3) {

//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       let count =0;
//       for (var j = 0; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//           count++
//         }
//       }
//       if(count<2) { 
//         return arr[i];
//      }

//     }
//   }
//   }

////33333////////////  count photos

// let road = ".><.>>.<<"

// function countPhotos(road) {
//     let counter = 0;
//     for (var i = 0; i < road.length; i++) {
//         if (road[i] === ">") {
//             for (let j = i; j < road.length; j++) {
//                 if (road[j] === ".") {
//                     counter ++
//                 }
//             }
//         } else if (road[i] === "<") {
//             for (let j = i; j >= 0; j--) {
//                 if (road[j] === ".") {
//                     counter ++
//                 }
//             }
//         } else {}
//     }     
//        return counter
// }

//////Palindrom



  palindrom =  (text) => {
   text.split(" ").reverse().join("").toLowerCase() === 
   text.toLowerCase().split(" ").join("") ? console.log(true) : console.log(false);
  }

  palindrom("Ana voli Milovana")

