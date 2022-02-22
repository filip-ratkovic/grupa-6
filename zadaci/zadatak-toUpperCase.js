
let str="The qUiCk fOx";
str=str.split("")
let strn=[]
str.forEach((a,b)=>{
if(b%2===0) {
    strn.push(a.toUpperCase())
} else {
    strn.push(a.toLowerCase())
} 

})

strn=strn.join("")
console.log(strn);