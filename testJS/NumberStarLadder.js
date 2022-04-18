function pattern(n){
    var output="";
    output = 1
    star = "";
    for(var i=2;i<n+1;i++) {
        star += "*"
        output += "\n" + 1 + star + i
    }
    return output;
   }

console.log(pattern(10));