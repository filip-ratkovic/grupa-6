for (let i=1;i<16;i++) {
    
    if(i % 2) {
        console.log(i,"je neparan broj")
    }
    else {
        console.log(i,"je paran broj")
    }
}


a=Number ( prompt('uneste broj'))
b=Number ( prompt('uneste broj'))
c=Number ( prompt('uneste broj'))
d=Number ( prompt('uneste broj'))

console.log ("Prosek za uneta 4 broja je",(a+b+c+d)/4)



for (let i=0 ; i<1000; i++) {
    if(i%3===0 && i%5===0) {
        console.log(i)
    }
}
