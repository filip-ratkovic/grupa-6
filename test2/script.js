let email=document.getElementById("email");
let password = document.getElementById("password")

function valid () {
if(password.value.length<8) {
    alert("Please enter password longer than 8 characters")
    return false
}
podaci={
    email: email.value,
    password: password.value,
}
console.log(podaci);
}


submitBtn=document.getElementById("sing-in")

submitBtn.addEventListener("click",(el) => {
    el.preventDefault();
    valid()
})