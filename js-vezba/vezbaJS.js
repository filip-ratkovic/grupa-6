
// function display () {
//     document.getElementById('display').style.display='block';

// }
// function size () {
//     document.getElementById('size').style.fontSize='35px';
// }



// var a=26;

// age = (a>18) ? "Punoletan" : "Maloletan";
// console.log(age);

// function broj(a) {
// return a<10 ? "Jednocifren broj"
// :       a>9&&a<100 ? "dvocifren"
// :       a>99&&a<1000 ? "Trocifren" 
// : "vise od 4 cifre"
// }

// console.log(broj(420));




// function ocena(a) {
//     return a = 1 ? "Nedovoljan"
//         : a = 2 ? "Dovoljan"
//         : a = 3 ? "Dobar"
//         : a = 4 ? "Vrlodobar"
//         : a = 5 ? "Odlican"
//         : "Uneliste neispravni broj";
// }

// console.log(ocena(3));


// let age=18;
// let message;

// message = age >=18 ? "Sme da vozi" : "Ne sme da vozi"

// console.log(message);


// cars = {
//     color: "black",
//     year: 2011,
//     hp: 140,
// }

// car=["audi","bmw","mercedes","skoda"];


// let txt = "";
// for (let x in car) {
//   txt +=  car[x] + "\n";
// }

// console.log(txt);


// cars = {
//     color: "black",
//     year: 2011,
//     hp: 140,
// }

// car=["audi","bmw","mercedes","skoda"];

// rec="JavaScript"

// for (let x of car) {
//    x.length>3 ? console.log(x) : ''
// }


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };


//   delete person["eyeColor"]

//   console.log(person);



//   const person2 = {
//     firstName: "John",
//     lastName: "Doe",
//     birthday : {
//         day:28,
//         month : "January",
//         year : "1995"
//     },
//     fullname : function () {
//         return this.firstName + " " + this.lastName
//     }
//   }; 



// class Car {

//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// age () {
//    let date = new Date();
//     return date.getFullYear() - this.year;
// }
// }

// let car = new Car("Toyota", 2013);
// console.log(car);
// console.log(car.age());

// class Person {
//     constructor(name,surname, age, eyeColor) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.eyeColor = eyeColor;
//         this.fullname = function () {
//           return   this.name + " " + this.surname
//         }
//     }
  
// }
// Person.prototype.weight = 90;
// Dad= new Person("John","Lennon",52,"Green");
// Dad.height = "180cm"
// console.log(Dad);
// console.log(Dad.weight);


// letters = new Set(["a", "b", "c"])
// letters.add("d")
// letters.add("e", "e", "d")
// console.log(letters);

// let txt="";

// letters.forEach(function(value) {

// txt += " " + value.toUpperCase()

// })

// console.log(txt);




// function age(number) {
// (number>=18) ? console.log("Punoletan"): console.log("Maloletan")

// }

// age(122)


let iv=0;
let sh=0;
let ukupno=0;



let unos= document.getElementById("unos")
submit= document.getElementById("btnSubmit")
res=document.getElementById("btnRes")


submit.addEventListener("click", () =>{ 
    res2=unos.value * 0.05 
res2=res2.toString();
res2=Number(res2);
res2=res2.toFixed(2)
    res.innerHTML =res2 + " kubika"
})
// let form = document.getElementById("login")
// let submit = document.getElementById("submit")
// let password = form["password"]
// let email = form["email"]


// submit.addEventListener("click", (e) => {
//     e.preventDefault()
//     let res={}
//     res={
//         email: form["email"].value,
//         password: form["password"].value
//     }
//     console.log(
//         res
//     );

// })



// function cookiesFunk() {
//     document.getElementById("demo").innerHTML =
//     "Cookies associated with this document: " + document.cookie;
//   }


// function funk() {
//     document.getElementById("demo").innerHTML = document.domain;
//   }

// document.getElementById("demo").innerHTML = document.lastModified;

// function toCelsius(fahrenheit) {
//     // y= (5/9) * (fahrenheit-32)
//     // y = y.toFixed(2)
//     // return y
//   }

// let x = toCelsius(100)
// console.log(x + " stepeni");

// let x = (fahrenheit) => {
//   y=  (5/9) * (fahrenheit-32)
//   return y
// }
// console.log(x(100));


// ((fahrenheit) => {
//   y=  (5/9) * (fahrenheit-32)
//   console.log(y);
// })(100);


// x= findMax(1,2,3,4,22,33,12214,322,1)

// function  findMax() {
// max= -Infinity;
// for (let i = 0; i < arguments.length; i++) {
//     if(arguments[i] > max) {
//         max= arguments[i];
//     }
// } return max
// }

// console.log(x);


// obj= {
//     name: "Filip",
//     lastname: "Ratkovic",
//     fullname: function () {
//         return this.name + " " + this.lastname;
//     }
// }
// console.log(obj.fullname());
// obj.name = "Marko";

// fullname = obj.fullname();
// console.log(fullname);

///////////////////////////////////////////////CALL METHOD
// user= {
//     fullname: function (city) {
//         return this.name + " " + this.lastname + " from " + city;
//     }
// }
// person1 = {
//     name: "John",
//     lastname: "Wick"
// }
// user1=user.fullname.call(person1, "Belgrade")
// console.log(user1);

///////////////////////////////////////////// APPLY METODA 

// user= {
//     fullname: function (city,country) {
//         return this.name + " " + this.lastname + " from " + city + " " + country;
//     }
// }
// person1 = {
//     name: "John",
//     lastname: "Wick"
// }
// user1=user.fullname.apply(person1, ["Belgrade", "Serbia"])
// console.log(user1);



// console.log(Math.max.apply(0,[1,2,3]))

 ////////////////////////////////////////////////////// BIND METODA 

// user= {
//     name: "Filip", 
//     lastname: "Ratkovic",
//     fullname: function (city,country) {
//         return this.name + " " + this.lastname;
//     }
// }
// person1 = {
//     name: "John",
//     lastname: "Wick"
// }
// user2=user.fullname.bind(person1)
// console.log(user2());
///////////////////////////////////////////

// console.log(isFinite("sd"));
// console.log(Number.isFinite("0"));


// person = {
//     name: "John",
//     lastname: "Wick",
//     age: 34,
//     height:190,
// }

// person["weight"]="90kg"
// txt= ""
// for(let x in person) {

//     txt += person[x] + " "
// }
// a=JSON.stringify(person)
// console.log(a);


// function Person (name, lastName,age) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
// }

// let filip = new Person ("filip", "ratjivuc", 34) 
// console.log(filip);

// a=["a", "b", "c", "d", "b", "b", "b"]

// let letters = new Set(a);
// let txt = ""
// letters.forEach((el) => {
// txt += el  + ","
// } ) 


// letters.add("d")
// letters.add("d")
// letters.add("e")
// console.log(txt);


