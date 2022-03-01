
function milesToKilometres(arr) {
   totalDistanceInKilometers= arr.map(el => el * 1.609)
   for(let i = 0; i < arr.length; i++) {
       console.log(arr[i] + " miles" + " is " + totalDistanceInKilometers[i] + " kilometres");
   }
    return totalDistanceInKilometers
}

console.log(milesToKilometres([1,2,3,4,5]));