
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


// let arr=[1,2,5,6,33,21,88,987,22,2]
// let arr2=["jedan", "Srbija", "K",7,6,2]
// let arr1 = [0, 1, 2, [3, 4]];

// console.log(arr.at(3));                    
// console.log(arr.concat(arr2));
// console.log(arr.copyWithin(2,5,6));   //  na indeksu 2, kopira element na indeksu 5 do 6,bez 6.

// const funkEvery = (currentValue) => currentValue > 0;    //jesu li svi elementi ...odg -  true ili false 
// console.log(arr.every(funkEvery));

// const even = (element) => element % 2 === 0;               // da li je barem jedan element ...  odg -true ili false
// console.log(arr.some(even));

// console.log(arr.fill(1,3,7));     // popuni elementom "1", od indexa 3 do indexa 7
// console.log(arr.fill(3,7));       // popuni elementom "3", od indexa 7 do kraja
// console.log(arr.fill(7));         // popuni elementom "7" ceo niz

// rez=arr.filter(el => el%3===0)       
// console.log(rez);

// function mojafunk(el) {
//   return el >10
// }

// let res=arr.filter(mojafunk)
// console.log(res);


// let finder = arr1.flat();      //arr1=[1,2,3[4,5]]  -- odg [1,2,3,4,5].
// console.log(finder);

//  console.log(Array.from(arr,x => x+2));

// arr.reverse()
// console.log(arr);

// num=arr.sort(function(a,b) {return a - b});          /// sortiranje brojeva 
// console.log(num);



// function filter_list(l) {
//   let newList;
//   newList=l.filter(el => el>=0 && typeof el === "number");
//   return newList;
// }

// console.log(filter_list([1,2,-5,22,"seg","23"]));


// setTimeout(myFunction, 1000)

//  function myFunction () {
//     let d = new Date();
//     document.getElementById("id").innerHTML =
//         d.getHours() + ":" +
//         d.getMinutes() + ":" +
//         d.getSeconds()
// }




// function myFunction () {
//     let d = new Date();
//     document.getElementById("id").innerHTML =
//         d.getHours() + ":" +
//         d.getMinutes() + ":" +
//         d.getSeconds()
//     setTimeout(myFunction, 1000)
// }

// new Promise ((resolve, reject) => {
// console.log("Prva stavka");
// resolve();

// })
// .then(() => {
//     kskkdkdsg
// })
// .catch(()=> {
//     console.log("error");
// })
// console.log("poslednja stavka");
// console.log("poslednja stavka");
// console.log("poslednja stavka");



// new Promise ((resolve, reject) => {
//     console.log("Prva stavka");
//     resolve();

//     })
//     .then(() => {
//         kskkdkdsg
//     })
//     .catch(()=> {
//         console.log("error");
//     })
//     console.log("poslednja stavka");
//     console.log("poslednja stavka");
//     console.log("poslednja stavka");






// new Promise((resolve, reject) => {
//     console.log('Promise console log started');

//     reject()
// })
// .then(() => {
//     throw new Error('Something failed');

//     console.log('Do this');
// })
// .catch(() => {
//     console.error('Do that');
// })
// .then(() => {
//     throw new Error('Something failed');
// })
// .then(() => {
// console.log("last than");})
// .catch(() => {
//     console.log("last catch");
// })
// .finally(() => {
//     console.log('Do this, no matter what happened before');


// })


// const promise= new Promise((resolve, reject) => {
//     resolve()
// });

// promise
// .then(() => {
//     console.log("resolved prvi");
// })
// .catch(() => {
//     console.log("error");
// })
// .then(()=> {
// throw new Error("greska 1")
// console.log("console log posle greske");
// })

// .then(() => {
//     console.log("last");
// })
// .finally (() => {
//     console.log("finnaly");
// })


// new Promise((resolve, reject) => {
//    throw new Error("er")


// })
// .then(() => {
//     console.log('Do this');
// })
// .catch(() => {
//     console.error('Do that');
// })


// var promise = new Promise((resolve, reject) => {

//     const x = "geeksforgeeks";
//     const y = "geekforgeeks"
//     if(x === y) {
//       resolve();
//     } else {
//       reject();
//     }

// })


// promise
// .then (()=> {
//     console.log("resolved");
// })
// .catch(()=> {
//     console.log("rejected");
// })



// const posts=[
//     {title: "Name one", body: "body number one"},
//     {title: "Name two", body: "body number two"}
// ]


// function getPost() {
// let output=""
// posts.forEach((post)=>{
//     output += `<li> ${post.title} </li>`;
// })
// document.body.innerHTML=output;

// }
// getPost();

// function createPost(post, callback) {
//     setTimeout(()=>{
//     posts.push(post)
//     callback()
//     },2000)
// }

// createPost({title:"three",body: "number three"},getPost)





// const posts=[
//     {title: "Name one", body: "body number one"},
//     {title: "Name two", body: "body number two"}
// ]


// function getPost() {
// let output=""
// posts.forEach((post)=>{
//     output += `<li> ${post.title} </li>`;
// })
// document.body.innerHTML=output;

// }
// getPost();

// function createPost(post) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(()=>{
//             posts.push(post)
//             const error = true;
//             if(!error) {
//                 resolve()
//             } else {
//                 reject("error, something happend")
//             }



//             },1000)

//     })
// }

// createPost({title:"three",body: "number three"})
// .then(getPost)
// .catch(err => console.log(err))


// function promiseHelloWorld() {
//  return  new Promise((resolve, reject) => {
//         resolve("Hello World")
//      })
//   }



// function resolveAfter2Seconds() {
//   return  new Promise((resolve, reject) => {
// setTimeout(()=>{
// resolve("resolved")
// },2000)
//     })
// }

// async function asyncFunk() {
//     console.log("first console log");
//     const result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncFunk()


// async function asyncF() {
//     return "resolved"
// }

// asyncF
// .then




// async function catfact(){
//     try{
//      const result = await fetch("https://catfact.ninja/fact")
//      const resJson= await result.json();
//      console.log(resJson);
//     } 
//     catch {
//         console.log("error");
//     }
//  }

//  catfact()



// async function fetcher(){

//    try{
//     res = await fetch("https://jsonplaceholder.typicode.com/users")
//     res2=await res.json();
//     let arr= [];
//    arr= res2.map((person) =>{
//        return {name:person.name};
//    })
//     console.log(arr);
//    } catch{
//        console.log("error");
//    }
// }
// fetcher()





// function resolveAfter2Seconds() {
//     console.log("starting slow promise")
//     return new Promise(resolve => {
//       setTimeout(function() {
//         resolve("slow")
//         console.log("slow promise is done")
//       }, 2000)
//     })
//   }

//   function resolveAfter1Second() {
//     console.log("starting fast promise")
//     return new Promise(resolve => {
//       setTimeout(function() {
//         resolve("fast")
//         console.log("fast promise is done")
//       }, 1000)
//     })
//   }

/////////  prvo saceka da se zavrsi prvi promis i izvrsi, pa saceka drugi i izvrsi      /////////////

//   async function sequentialStart() {
//     console.log('==SEQUENTIAL START==')

//     const slow = await resolveAfter2Seconds()
//     console.log(slow) 

//     const fast = await resolveAfter1Second()
//     console.log(fast) 
//   }

//   sequentialStart()

/////////  prvo izvrsava funk timer, onda resolva redom      /////////////

// async function concurrentStart() {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds() // starts timer immediately
//     const fast = resolveAfter1Second() // starts timer immediately

//     // 1. Execution gets here almost instantly
//     console.log(await slow) // 2. this runs 2 seconds after 1.
//     console.log(await fast) // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
//   }

//   concurrentStart()

/////////         Paralelno izvrsavanje promisa, izvrsavanje u isto vreme ALL /////////////
// async function parallel() {
//     console.log('==PARALLEL with await Promise.all==')

//     await Promise.all([
//         (async()=>console.log(await resolveAfter2Seconds()))(),
//         (async()=>console.log(await resolveAfter1Second()))()
//     ])
//   }

//   parallel()



// function stil(vals) {

//     var div2 = document.createElement("div")
//     div2.style.width = "200px";
//     div2.style.height = "100px";
//     style = document.createElement("style")
//     div2.appendChild(style)
//     div2.style.backgroundColor = "darkseagreen";
//     div2.style.display = "inline-block"
//     div2.style.flexWrap = "wrap"
//     div2.style.margin = "10px"
//     div2.style.padding = "10px"
//     div2.style.borderRadius = "4px"
//     div2.style.verticalAlign = "middle"
//     div2.style.justifyContent = "space-around"
//     div2.innerHTML = "Rasa macke je: " + vals

//     return div2
// }
// var div1 = document.getElementById("test")

// async function catBreeds() {
//     let breeds = await fetch("https://catfact.ninja/breeds")
//     let breedsJson = await breeds.json()
//     for (let i = 0; i< breedsJson.data.length; i++) {
//         div1.appendChild(stil(breedsJson.data[i].breed))
//     }
// }

// catBreeds()

// var e= 10;

// function sum(a) {
// return function (b) {
//     return function (c) {
//         return a+b+c+e
//     }
// }
// }


// f1=sum(1);
// f2=f1(2);
// let suma=f2(3)
// console.log(suma);
// console.log(sum(1)(2)(3));



// let btn = document.querySelector("#btn");
// let name = document.querySelector("#name");
// let password = document.querySelector("#password");
// let username = document.querySelector("#username");
// let email = document.querySelector("#email");


// btn.addEventListener("click", (e) => {
//     e.preventDefault();
// const vrednosti={
//     email: e.target.form[0].value,
//     name: e.target.form[1].value,
//     username: e.target.form[2].value,
//     password: e.target.form[3].value,
// }

//     console.log(vrednosti);
//     fetch("https://serene-fortress-45917.herokuapp.com/v1/auth/signup",
//     { 
//     method: "POST",
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     },
//      body: JSON.stringify(vrednosti)
//     })
//     .then(res => res.json())
 
// .then(json => console.log(json))
//     }).catch(err => console.log(err))


// cName=document.getElementsByClassName("test"[0]);
// console.log(cName);

// cName.style.color="red";






//////////////////SessionStorage//////////////////////////////////


// let key = "Ime"
// let key2="Prezime"
// sessionStorage.setItem(key, "Filip");
// sessionStorage.setItem(key2, "Ratkovic");
// let myItem = sessionStorage.getItem(key);

// sessionStorage.removeItem(key2);
// sessionStorage.clear()

// console.log(sessionStorage);
// console.log(myItem);


// let myObj = { name: 'Skip', breed: 'Labrador' };
// let myObj2 = { name: 'Dzeki', breed: 'Doberman' };

// sessionStorage.setItem(key, JSON.stringify(myObj));
// sessionStorage.setItem(key2, JSON.stringify(myObj2));


// let item = JSON.parse(sessionStorage.getItem(key));
// console.log(item);

// if (sessionStorage.length > 0) {
// console.log("Storage nije prazan");  } 
// else {
// console.log("Storage je prazan");  }

// if (window.sessionStorage) {
//     console.log("window local storage nesto");
//   } else {
//       console.log("nije");
//   }


// ////////////////////////////////////////////////////////////////////

// obj1= {
//     name: "John",
//     age: 34,
// clgg : function () {
// console.log(this.name + " star " + this.age)
// }
// }
// obj3= {
//     name: "FIlip",
//     age: 35,
// }

// obj2= {
//     city: "Novi Pazar",
//     code: 36300
// }

// Object.entries(obj2).forEach(([key, value]) => console.log(`${key} : ${value}`))
// objCreate = Object.create(obj1);
// objCreate.name = "Filip";
// objCreate.clgg()
// obj3= {... obj2}

// asObj = Object.assign({},obj3, obj2,obj1);
// console.log(asObj);

//1.
// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

//  let studentValues=  Object.values(student);
// let txt = ""
//  for(let i=0; i<studentValues.length; i++) {
// txt += studentValues[i] + ","
// }
// console.log(txt);

//2.

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

//     delete student.rollno;
//     console.log(student);

// 3. 

// Object.objSize = function(obj) {
// res=Object.keys(obj)
// return res.length
// }

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

// objsize = Object.objSize(student)

// console.log(objsize);

////4. 

// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];


// for(let i=0; i< library.length; i++) {
//     if(library[i].readingStatus === true) {
//         console.log(library[i]);
//     }
// }

/////5.



// all= {...person2, adresse: {city: "Raska"}}
// console.log(all);
// const [a,b,...rest] = letter
// // newArr=[...num, ...letter]
// newArr = num.concat(letter)
// console.log(newArr);

// function sum (a,b) {
//     return [a*b,a+b,a/b]
// }

// let [puta,plus,podeljeno="No value"] = sum(2,5)
// console.log(podeljeno);

// num = [1,2,3,4,5,6,7];
// letter = ["A","B","C","D","E","F"]


// person1 = {
//     name: "John",
//     lastName: "Wick",
//     age: "36"
// }

// person2 = {
//     age: "22",
//     adresse: {
//         city: "Novi Pazar",
//         country: "Japan"
// }
// }
// person3 = {...person1, ...person2}

// function userLog ({name,age}) {
//     console.log(`Name of user is ${name} and age is ${age}`);
// }

// let userLog2 = (user) => console.log(`Name of user is ${user.name} and age is ${user.age}`);
    
// userName = userLog2(person1)

// items=[
//     {name:"bike", price:100},
//     {name:"tv", price:500},
//     {name:"phone", price:450},
//     {name:"book", price:30},
//     {name:"keyboard", price:20},
//     {name:"laptop", price:200}
// ]

// cheap = items.filter((item) => {
//     return item.price>=100
// })
// itemsNames = items.map((item) => {
//     return item.name
// })
// itemsNames = items.find((item) => {
//     return item.name=== "book"
// })
// items.forEach((item) => {
//     console.log(item.name);
// })

// niz1=[2,4,113,34,75,-232,1,44]

// niz1.sort((a,b) => {return a-b})
// nizStr=niz1.toString()
// console.log(nizStr);
// a="hello world"
// arr=a.split(" ")
// niz1.sort((a,b) =>{return b-a})
// console.log(niz1);
// niz2=niz1.slice(-3,-1)
// console.log(niz2);
// let itemName=[]
// items.forEach((el) => {
    
//     itemName.push(el.price)
// })
// itemName.sort()
// console.log(itemName);

// x=Math.min(...itemName)
// console.log(x);

// function randomNumber (min, max) {
//    return Math.floor(Math.random()*(max-min)) + min
// }

// console.log(randomNumber(1,10));


// for(let x in items) {
//     console.log(items[x].name);
// }

// for(let x in items) {
//     console.log(x) + " in";
// }

// for(let x of items) {
//     console.log(x);
// }


// myFunction();


// function myFunction() {
//    carName = "Volvo";
// }

// console.log(carName);


// class podaci {
//     constructor(ime,prezime,godine,grad) {
//         this.ime = ime;
//         this.prezime = prezime;
//         this.godine = godine;
//         this.grad = grad;
//     }
//     age (danas) {
//         return  danas - this.godine
//     }
// }

// let myName = new podaci("Filip", "Ratkovic", 1995, "Novi Pazar")
// console.log (myName.age(2022))


// let myPromise = new Promise(function (resolve, reject) {
//     let x = 1;
// if(x>2)  {
//     resolve("true")
// } else { reject("false") }
    
// })

// myPromise.then(
//     function (value) {
//         console.log(value,"resolved");
//     }, 
//     function (error) {
//         console.log(error, "rejected");
//     }
    
// )

// fetch("https://catfact.ninja/facts?page=35", {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body:  JSON.stringify( {
//             data: "Catscatscats fact 36",
//             current_page: 35
//         })
// })
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data);
// })

items=[
    {name:"bike", price:100},
    {name:"tv", price:500},
    {name:"phone", price:450},
    {name:"book", price:30},
    {name:"keyboard", price:20},
    {name:"laptop", price:200}
]

arr1=[1,44,23,65,123,-11]
arr2=[1,44,23,65,true, null, "String", "tekst",[2,4,23],123,-11]
obj1= {
    name: "filip",
    age: 27
}


let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

// parentDiv = document.getElementById("parent")

// fetchLink = "https://catfact.ninja/facts"

// function lista (value) {
//    var divChild = document.createElement("div");
//     divChild.style.width="200px";
//     divChild.style.height="200px";
//     divChild.innerHTML=value;
//     return divChild
// }

// let fetchFacts =  async () => {
//     res = await fetch(fetchLink)
//     res2 = await res.json()
//     console.log(res2);
//     for (let i = 0; i < 10; i++) {
//         parentDiv.appendChild(lista(res2.data[i].fact));        
//     }
// }
// fetchFacts()

// let form = document.getElementById("form")
// let email=document.getElementById("email");
// let fname = document.getElementById("name");
// let password = document.getElementById("password")
// let username = document.getElementById("username")
// let text = document.getElementById("text");


// function podatak() {
//     podaci = {
//         email: email.value,
//         name: fname.value,
//         password: password.value,
//         username: username.value
//     }
// console.log(podaci);
// }

// form.addEventListener("submit", (el) => {
//     el.preventDefault();
//     podatak()
// })




// activities.forEach((el)=> {
//     el.forEach((data)=> {
//       if(typeof data === "string")   {
//           console.log(data);
//       }
//     })
// })

// let email=document.getElementById("email");
// let fname = document.getElementById("name");
// let password = document.getElementById("password")
// let username = document.getElementById("username");
// function valid () {
// if(fname.value.length<=1) {
//     alert("Please enter valid name");
//     return false
// }
// if(password.value.length<8) {
//     alert("Please enter password longer than 8 characters")
//     return false
// }
// podaci={
//     name: fname.value,
//     email: email.value,
//     password: password.value,
//     username: username.value
// }
// console.log(podaci);
// }

// form=document.getElementById("form")
// form.addEventListener("submit",(el) => {
//     el.preventDefault();
//     valid()
// })


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
//   });
  
//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//   });




// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise.allSettled(promises).then((value) => value.forEach((value) => {console.log(value.status);}));


// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("foo");
//   }, 200);
// });

// Promise.any([p3, p2, p1]).then(values => {
//   console.log(values); 
// });

// myPromise = new Promise((resolve, reject) => {
//     a = prompt("Unesite paran broj")
//     if(a%2!==0) {
//         reject("Pogresan unos")
//     } else {
//         resolve(a + " je paran broj")
//     }
// })

// myPromise 
// .then((el)=>{
//     console.log(el);
// })
// .catch((error)=>{
//     console.log(error);
// })



// zad5=arr1.map((el)=> {
// return Math.pow(el,2)
// })
// console.log(zad5);


// zad4=items.filter((el)=> {
//     return el.price>33
// })


// console.log(zad4);



// let zad1 = []
// items.map((el)=> {
//     if (el.name.length>5) {
//         zad1.push(el.name)
//     }
// })

// console.log(zad1);

// zad1 = arr2.filter((el)=>{
//     return el%2!==0
// })

// console.log(zad1);