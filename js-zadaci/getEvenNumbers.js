function getEvenNumbers(numbersArray){
  
  const result = numbersArray.filter(number => number%2===0)
  return result
}



console.log(getEvenNumbers([1,2,3,4,5,6,7,8]));