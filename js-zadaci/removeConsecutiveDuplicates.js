const removeConsecutiveDuplicates = s => {
arr=s.split(" ");
arr2=[];
for (var i=0; i<s.length; i++) {
    if(arr[i] !==arr [i+1]) {
        arr2.push(arr[i]);
    }
} arr2=arr2.join(" ");


return arr2
}


console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));

niz=["alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"]
niz=niz.toString()
niz=niz.split(" ")
niz=new Set(niz)
console.log(niz);