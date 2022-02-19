


function bmi(tezina, visina) {

     rezultat = tezina / (visina ** 2) ;

     if (rezultat <= 18.5) {
         return "Underweight"
     } else if (rezultat <= 25) {
         return "Normal"
     }
     else if (rezultat <= 30) {
         return "Overweight"
     } else if (rezultat > 30) {
         return "Obese"
     }
 }

 console.log(bmi(90,1.9));

