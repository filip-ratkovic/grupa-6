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




// a=[0,1,2,3,4];
// let sum = 0;
// for(i=a.length-1; i>=0; i--) {
// sum+=(a[i])**2
// } console.log(sum); 




// a=[1,2,3,4,5];
// sum=0;
// product =1;
// for (i=0; i<a.length; i++) {

// sum+=a[i];
// product *=a[i];

// }
// console.log("Sum of array is", sum);
// console.log("Product of array is", product);



// a=[1,2,3,4,2,3,6,4,1,0];

// b=[... new Set(a)];

// console.log(b);


// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];

// for(var i=0; i<array2.length; i++) {
//     if(typeof array1[i]==="number" && typeof array2[i]==="number") {
//         console.log(array1[i]+array2[i]);
//     } else if (typeof array1[i]!=="number") {
//         console.log(array2[i]);
//     } else if (typeof array2[i]!=="number") {
//         console.log(array1[i]);
//     }



var numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(numbers.sort(function(){
    return Math.random() -0.5
}));