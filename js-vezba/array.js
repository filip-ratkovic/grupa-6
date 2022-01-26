// arr = [1, 5, 9, 22, 453, 12, 55];

// arr.sort(function(a,b) {return a - b})


// console.log("Najmanji broj je ",arr[0])
// console.log("Najveci broj je ", arr[arr.length-1]);

// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// var a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]];

//     for(var i =0; i <a.length; i++) {
// console.log("row", i,);
//         for (var j = 0; j <a[i].length; j++) {
//             console.log( a[i][j]);

//         }
//     }

a=[0,1,2,3,4];
let sum = 0;
for(i=a.length-1; i>=0; i--) {
sum+=(a[i])**2
} console.log(sum); 