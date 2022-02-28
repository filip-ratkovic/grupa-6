
function milesToKilometres(arr) {
   totalDistanceInKilometers= arr.map(el => el * 1.609)
   
    return totalDistanceInKilometers
}

console.log(milesToKilometres([1,2,3,4,5]));