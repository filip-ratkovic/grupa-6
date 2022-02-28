function highAndLow(numbers) {
    arr = "";
    numbers=numbers.split(" ");
   arr=Math.max(...numbers) + " " +Math.min(...numbers)
    return arr
  }
  
  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); 