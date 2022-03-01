
// function booleanToWord (bool) {

//     if(bool===true) {return "Yes"}

//     else if(bool===false) {return "No"}
// }

// booleanToWord(bool)

// function makeUpperCase(str) {
//     str().toUpperCase();
//   }

// function even_or_odd(number) {
//     if(number%2===0) {
//       return "Even"
//     } else if (number%2!==0) {
//       return "Odd"
//     }
//   }

// function between(a, b) {
//     let arr=[]
//    for(i=a;i<=b;i++) {
//        arr.push(i)
//        }
//  return arr;
//    }}
// arr=[1,2,0,22,0,53,23];
// sum=0;
// for(i=0; i<arr.length; i++) {
// sum+=arr[i];
// arr2=sum/arr.length
// }
// console.log(arr2);



// let a = 23451;
// function myFunction() {
//     a = a.toString();
//     a = a.split("")
//     a.reverse();
//     a = a.join("");
//     a = parseInt(a)
//     console.log(a);
// }




// myFunction();


//     a=[1,2,3,4,5,33,211];
//     b=a.filter(myFunction);

//     function myFunction(value){
//         return value !== 4
//     }
// console.log(b);

// a=[1,2,3,4,5,33,211];
//  b=a.reduce(myFunction);

//  function myFunction(total ,value){
//    return value + total }

//   console.log(b);

// function powersOfTwo(n) {
//     arr = [];
//     for (i = 0; i <= n; i++) {
//         a = 2**i;
//         arr.push(a);

//     }
//     console.log(arr);
// }

// powersOfTwo(2);

// broj=[2,5,34,1,22];
// broj2=broj.map(putaDva);

// function putaDva(value) {

//     return value ** 2
// }

// console.log(broj2);


// broj=[2,5,34,1,22];

// broj2=broj.filter(brojevi) 
// function brojevi(value) {

//     return value%2!==0
// }
// console.log(broj2);

// broj=[2,5,34,1,22];

// broj2=broj.every(brojevi) 
// function brojevi(value) {

//     return value%2===0 
// }
// console.log(broj2);

// broj=[2,5,34,1,22];

// broj2=broj.find(brojevi) 
// function brojevi(value) {

//     return value%2!==0 
// }
// console.log(broj2);



// niz=Array.from("123456")

// console.log(niz);




// function powersOfTwo(n){
//     arr = [];
//       for (i = 0; i <= n; i++) {
//           arr.push(2**i);
//       }
//     return arr
//   }  
// tri=powersOfTwo(13);
// console.log(tri);



// const reverseSeq = n => {
//     arr = [];
//     if (n < 0) {
//         return "Unesite pozitivan broj"
//     }
//     for (var i = n; i > 0; i--) {
//         arr.push(i)


//         }
//             return arr;
//         };

//         console.log(reverseSeq(6))
//
//
// const reverseSeq = n => {
//     arr = [];
//     if (n < 0) {
//         return;
//     }
//     for (var i = n; i > 0; i--) {
//         arr.push(i)


//         }
//             return arr;}


// function symmetricPoint(p, q) {
//    if (p > q) {
//       t = p - q;
//       p1 = q - t;
//       return p1;
//    }
//    if (p < q) {
//       t = q - p;
//       p1 = q + t;
//       return p1;
//    }
// }

// console.log(symmetricPoint(16, 22));


// function symmetricPoint(p, q) {
//     return [2*q[0] - p[0], 2*q[1]  - p[1]]; 
// }

// console.log(symmetricPoint([2,2], [-1,2]));


// function iceBrickVolume(radius, bottleLength, rimLength) {
//     visina=bottleLength-rimLength;
//     zapremina=visina*(2*radius**2)
//     return zapremina;
//    }

//   console.log(iceBrickVolume(1,10,2));




// function symmetricPoint(p, q) {
//     return [(q[0] + p[0])/2, (q[1] + p[1])/2]; 
// }

// console.log(symmetricPoint([2,2], [-1,2]));



// function stray(numbers) {
//     num = 0;
//     if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
//         num = numbers[0];
//     }
//     if (numbers[numbers.length - 1] !== numbers[numbers.length - 2] &&
//         numbers[numbers.length - 1] !== numbers[numbers.length - 3]) {
//         num = numbers[numbers.length - 1]
//     }
//     for (let i = 1; i < numbers.length - 1; i++) {
//         if (numbers[i] !== numbers[i - 1] && numbers[i] !== numbers[i + 1]) {
//             num = numbers[i];
//             break;
//         }
//     }
//     return num;   
// }

// console.log(stray([ 1, 1,2, 1,1]));






// const removeConsecutiveDuplicates = s => {
// arr=s.split(" ");
// arr2=[];
// for (var i=0; i<s.length; i++) {
//     if(arr[i] !==arr [i+1]) {
//         arr2.push(arr[i]);
//     }
// } arr2=arr2.join(" ");


// return arr2
// }

// console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));






// function myFunction(array) {
//     for (var i = 0; i < array.length; i++) {
//         for (var j = i + 1; j > 0; j--) {
//             if (array[j] < array[j - 1]) {

//                 //  [array[j], array[j - 1]]    =   [ array[j - 1], array[j]]
//                 pomVar = array[j];
//                 array[j] = array[j - 1];
//                 array[j - 1] = pomVar;


//             }
//         }
//     }return array;
// }

//     console.log(myFunction([9, 2, 5, 2, 8, 3, 1]));



// function openOrSenior(data) {
//     for (i = 0; i < data.length; i++) {

//         if (data[i][0] >= 55 && data[i][1] > 7) {
//             data[i] = "Senior";

//         } else {
//             data[i] = "Open"
//         }

//     }return data

// }



// function addBinary(a, b) {

//     return (a+b).toString(2);
//     } 



// console.log(addBinary(3, 5));


// function lastDigit(n, d) {
//     n = n.toString().split("");
//     for(i=0; i<n.length; i++) {
//         n[i]=Number(n[i])
//     }
//     if (d > n.length) {
//         return n
//     }
//     if (d <= 0) {
//         return []
//     }
//     n = n.slice(n.length - d, n.length)
//     return n
// }
// console.log(lastDigit(54321, 2));


// function createPhoneNumber(numbers){
//    prvi=numbers.slice(0,3).join('');
//    drugi=numbers.slice(3,6).join('');
//    treci=numbers.slice(6,numbers.length).join('');
//    broj="("+prvi+")"+ " "+drugi+"-"+treci
//     return broj

// }
// console.log(createPhoneNumber([0,6,4,5,5,4,3,3,2,2]));



// const cars = [
//     'Mercedes',
//     'BMW',
//     'Audi',
//     'Lamburgini'
//   ];

//   console.log(cars.map(car => car.length));


// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

//     console.log(Object.values(student));
//     console.log(student.name,student.sclass,student.rollno);



// var library = [ 
//     {
//         author: 'Bill Gates',        
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: '',
//         readingStatus: true
//     },
//     {     
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];


//     for (i=0; i<library.length; i++) {
//        if(!library[i].title) {
//            console.log("Knjiga nije odabrana");
//        }
//          else  if (library[i].readingStatus) {
//             console.log("Procitao");
//         } else {
//             console.log("Nije procitao");
//         }
//     }



// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };


//     console.log(student.name.length);
//     console.log(Object.values(student).length);





// class Car {
//     constructor(name,year) {
//         this.name = name;
//         this.year = year;
//     }
// age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
// }
// }


// c1= new Car("audi", 2010);

// console.log(c1.age());
// console.log(c1.name);




// class Cat {
//     constructor (name,age,color,kg) {
//         this.name = name;
//         this.age = age;
//         this.color = color;
//         this.kg = kg;
//     }


// }


// macka= new Cat("Garfild",20,"Orange",28);
// console.log(macka);


// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: '',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }];



// for (i = 0; i < library.length; i++) {
//     !library[i].title ? console.log("Nije odabrao knjigu")
//         : library[i].readingStatus ? console.log("Procitao je  knjigu")
//             : console.log("Nije procitao knjigu")
// }














// var s = {
//     name : "David Rayy", }


// s[Object.values(s)] = Object.keys(s).toString()

// console.log(s);


// Cat = {

//         tiredness : 0,
//         hunger : 0,
//         lonliness : 0,
//         happiness :0,
// }
// w3doocs

// console.log(Object.keys(Cat).includes("name"));
// call()



// data= {
//     a:1,
//     b:2,
//     c:3
// }
// console.log(Object.entries(data));


// data= {
//     a:1,
//     b:2
// }

// function funkcija (data,prop) {
// delete data[prop];
// return data
// }

// funkcija({a:1, b:2}, "b")




// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true,
//         age: 29
//     },
//     {
//         author: 'Steve Jobs',
//         title: '',
//         readingStatus: true,
//         age: 14
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false,
//         age: 25
//     },

//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true,
//         age: 19
//     },

//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true,
//         age: 12
//     }];



// function age() {
//     res = []
//     for (i = 0; i < library.length; i++) {
//         if (library[i].age >= 18) {
//             res.push(library[i])
//         }
//     }

//     console.log(res);

// }

// age() 


// const data = { a: 1222, b: undefined };
// const data2 = { a: undefined};


// function emptyObject(obj) {
// if ( Object.values(obj[0])===false)    {
//     console.log("True");
// } else { console.log("False");}

// }

// emptyObject(data2)



// sumArr = (a,b) => {
//     return a+b
// }

// console.log(sumArr(arr));

// function isDivisible(n, x, y) {
// (n%x===0 && n%y===0) ? console.log(true) : console.log(false)

// }

// isDivisible(500,2,250)


// console.log(myFunction(5));

// function myFunction(y) {
//   return y * y;
// }

// (function () {
//     console.log("funkcija");
// })();


// (function (a,b) {
//    console.log(a*b);
//  })(2,3);


// x= (a,b) => a*b;

// console.log(x(3,4));


// const person = {
//     fullname (city,country) {
//      return   this.name + " " + this.lastname + " from " + city + ", " + country;
//     }
// }

// let person1={
//     name: "John",
//     lastname: "Wick"
// }

// console.log(person.fullname.apply(person1,["NP", "Srbija"]));   //APPLY
// console.log(person.fullname.call(person1, "Bg","Srbija"));      //CALL

// arr=[1,2,3,4,5,6,7];

// console.log(Math.max.apply("",arr));




// const person = {
//     name: "Ted",
//     lastname: "Smith",
//     fullname () {
//      return   this.name + " " + this.lastname;
//     }
// }

// let person1={
//     name: "John",
//     lastname: "Wick"
// }

// fullname=person.fullname.bind(person1)                   //BIND 
// console.log(fullname());


// person = {
//     name: "John",
//     lastname: "Wick",
//     fullname: function() {
//         console.log(this.name + " " + this.lastname);  
//     }
// }

// let fullname=person.fullname.bind(person);
// setTimeout(fullname,1500)



// function a (args) {
//     console.log("asfdsgdg");
//     args()
// }

// function hello(){
//     console.log("hello");
// }

// a(hello)


// const  arr=[1,2,3,4,5]
// function mojafunk() {
//     console.log("helo");
// }

// arr.forEach(mojafunk)

// arr=[1,2,3,4,5]
// const mojafunk = (a,b,c) => {
//     console.log(a); //value th vrednost
//     console.log(b); // indeksi
//     console.log(c); // ne treba , prikazuje ceo array, x 5 
// }

// arr=[37,28,14,6,19,55,11];

// const kvadrat = (a) => {
//     console.log(a**2);
// }

// arr.forEach(kvadrat)

// arr=[37,28,14,6,19,55,11];

// const kvadrat = (a,b) => {
//     console.log(a ,"je na poziciji",b);
// }

// arr.forEach(kvadrat)





// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true,
//         age: 29
//     },
//     {
//         author: 'Steve Jobs',
//         title: '',
//         readingStatus: true,
//         age: 14
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false,
//         age: 25
//     },

//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true,
//         age: 19
//     },

//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true,
//         age: 12
//     }];




// const people = (a,b) => {
//     console.log(a.author);  //               
// }


// library.forEach(people)


// arr=[1,34,675,8,3245,54,31,66,9]
// evenArr=[]


// arr.forEach((a)=>{
//     if(a%2===0) {
//         evenArr.push(a)
//     }
// });
// console.log(evenArr);




// arr = [false, 1, 5, 8, "sadf", null, false, NaN, 0, ""];
// num = 0

// arr.forEach((a) => {
//     if (!a) {
//         num++
//     } 
// }
// )
// console.log(num);

// arr=[1,2,3,4,5,6,7,8]

// res= arr.some((a) => {  // da je barem jedan element true // every da su svi veci  tj true
// return a>6

// })

// res2= arr.every((a) => {
//   return a>3
// })
// console.log(res);
// console.log(res2);





// const heroes = [

//   { name: "Naruto" },
//   { name: "Saske" },
//   { name: "Kakasi" },
// ];
// const heroes2 = heroes.map((el, index) => {
//   return {
//     id: index,
//     hero: el.name
//   }
// })
// console.log(heroes2);



//ZADATAK backup funkcija
// function job() {
//   return "hello world"
// }

// let mypromise = new Promise((resolve, reject) => {
//   let res= job();
//   setTimeout(() => {
//   resolve(res);
//   }, 2000);
// })


// mypromise.then((val) => {
//  console.log(val);
// })



















// function getEvenNumbers(numbersArray){
//   return numbersArray%2===0
// }







// console.log(getEvenNumbers([1,2,3,4,5,6,7,8,9,10])
// );



// broj2=broj.filter(brojevi) 
// function brojevi(value) {

//     return value%2!==0
// }
// console.log(broj2);


