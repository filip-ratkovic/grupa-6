link="https://dog.ceo/api/breeds/list/all"
link2="https://dog.ceo/api/breed/Affenpinscher/images/random"

async function breed() {
    res =await fetch(link2)
    res2= await res.json()
    console.log(res2);
}


breed()