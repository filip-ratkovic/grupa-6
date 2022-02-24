
function getCount(vowels) {
    var vowelsCount = 0;
    vowels = vowels.toString().split("");
    vowels.forEach((a) => {
      if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u") {
        vowelsCount++;
      }
    }
    )
    return vowelsCount;
  }
  
  

  console.log(getCount("brown fox jumped over the dog"));