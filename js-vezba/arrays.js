cars = ["Golf","Mercedes","BMW","audi"]
cLen=cars.length
let text= "<ul>"
for (let i=0; i<cLen; i++) {
    cars.push("element");
    text += "<li>" + cars[i] + "</li>";
  
}

text +="<ul/>"
document.getElementById("Lista").innerHTML = text;