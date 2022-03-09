// 1. ZADATAK PRVI
// async function catBreeds(){

// try{let breeds = await fetch("https://catfact.ninja/breeds")
// let breedsJson = await breeds.json()
// let catfact=[];
// cat=breedsJson.data;
//  cats = cat.map((el)=>{
//     return el.breed
// })

// console.log(cats)} 

// catch {
//     console.log("error");
// }
// }


// // catBreeds()



// const catBreedsObject = async () => {
//     const a = await catBreeds();
//     console.log(a);
//   };

// let arr=[]
// arr.push(catBreedsObject())
// console.log(arr);


// 2. ZADATAK 2. ////////////////// 


const enterNumber = () => {
    return new Promise((resolve, reject) => {
        const userNumber = Number(prompt("Unesite broj od 1 do 10"))
        const randomNumber =Math.floor( Math.random() * 10 + 1)
        

        if (isNaN(userNumber)) {
            reject(new Error("Wrong input type"))
        }
   
        if (userNumber === randomNumber) {
            resolve({
                points: 2,
                randomNumber,
            })
        } else if (userNumber === randomNumber + 1 || userNumber === randomNumber - 1) {
            resolve({
                points: 1,
                randomNumber,
            })
        } else {
            resolve({
                points: 0,
                randomNumber,
            })
        }
    });
};



const continueGame = () => {
    return new Promise((resolve) => {
        if (window.confirm("Do you want to continue?")) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
};


const handleGuest = () => {
    enterNumber()
        .then((result) => {
            alert(`Random number is ${result.randomNumber}, you got ${result.points} points`)
            
            continueGame()
                .then((result) => {
                    if (result) {
                        handleGuest()
                    } else {
                        alert(`End game`)
                    }
                })
                
        })
        
        .catch((error) => alert(error));
}

handleGuest()
