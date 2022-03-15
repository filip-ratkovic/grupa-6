function stil(vals) {

    var div2 = document.createElement("div")
    div2.style.width = "200px";
    div2.style.height = "100px";
    style = document.createElement("style")
    div2.appendChild(style)
    div2.style.backgroundColor = "darkseagreen";
    div2.style.display = "inline-block"
    div2.style.flexWrap = "wrap"
    div2.style.margin = "10px"
    div2.style.padding = "10px"
    div2.style.borderRadius = "4px"
    div2.style.verticalAlign = "middle"
    div2.style.justifyContent = "space-around"
    div2.innerHTML = vals

    return div2
}
divUp = document.getElementById("up");

async function text() {
    list = await fetch("https://catfact.ninja/facts")
    list = await list.json();
    // document.getElementById("text-here").innerHTML=list.data[0].fact;
    for (let i = 0; i < list.data.length; i++) {
        divUp.appendChild(stil(list.data[i].fact))
    }
}

// text()
// let currentPage = 1;
// let start = document.getElementById("start")
// text=document.getElementById("text")
// text=window.open("https://catfact.ninja/facts?page=1");

// start.onclick = text


// next=document.getElement("page-btn next-page")
// next.click(function() {
// currentPage++
// });