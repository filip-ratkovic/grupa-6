function stil(val) {

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
    div2.innerHTML = val

    return div2
}
var divUp = document.getElementById("up");
var divDown = document.getElementById("down")


var fetchlink = "https://catfact.ninja/facts"

async function fetchLink() {
    res1 = await fetch(fetchlink);
    res = await res1.json();
    divUp.innerHTML = ""
    for (let i = 0; i < 10; i++) {
        divUp.appendChild(stil(res.data[i].fact));
    }
    divDown.innerHTML = "";

    for (let i = 0; i < res.links.length; i++) {
        divDown.appendChild(pageNav(res.links[i]));
    }

    console.log(res);
}

fetchLink()


function pageNav(vals) {
    let nav = document.createElement("button");
    nav.innerHTML = vals.label;

    if (vals.active) {
        nav.style.background = "#717790"
        nav.style.height = "40px"
        nav.style.color = "#fff"
    }

    nav.onclick = function (el) {
        el.preventDefault();
        fetchlink = "https://catfact.ninja/facts"
        fetchLink()
    }
    return nav;

}






