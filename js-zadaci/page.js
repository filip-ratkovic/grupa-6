

async function factHandler() {
    let fact=await fetch("https://catfact.ninja/facts")
    let facts=await fact.json();
    console.log(fact);
}

factHandler();