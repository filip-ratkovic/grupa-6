function isPrime(n) {
    const  num=Math.sqrt(n);
    if(n<2) {
        return false;
    }
    for (let i=2; i<=num; ++i) {
        if(n%i===0) {
            return false;
      } 
    }return true
  }

console.log(isPrime(992));




// function isPrime2() {
//     arr = []
//     for (var i = 0; i < 1000; i++) {

//         if (i === 2 || i === 3 || i === 5) {
//             console.log(i);
//         }
//         else if (i > 1 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % i === 0) {
//             console.log(i);
//         } else {
//         }
//     }
// }

// isPrime2()