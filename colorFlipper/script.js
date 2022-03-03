const colors = ["green", "rgba(133,122,200)", "#f15025","yellow","whitesmoke", "blue"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const num =  Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[num];
  color.textContent = colors[num];
});

