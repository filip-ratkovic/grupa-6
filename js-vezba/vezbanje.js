// window.onload = async function () {
//     let pokemonResource = {}
//     let pokemonArr = [];
//     const pokemonInfo = [];

//     const getPokeList = async () => {
//         try {
//             const r = await fetch("https://pokeapi.co/api/v2/pokemon?offset=10&limit=10");
//             const res = await r.json();
//             pokemonResource = res;
//         } catch (error) {
//             console.log(error);
//         }
//     };



//     const getPokemon = async (URL) => {

//         try {
//             const p = await fetch(URL)
//             const pokemon = await p.json();
//             pokemonInfo.push(pokemon)
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     await getPokeList();

// pokemonArr = pokemonResource.results.map((p)=>{
// return getPokemon(p.url)
// })

//     await Promise.all(pokemonArr).then(() =>
//     console.log(pokemonInfo))

// }


const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};


let url = "https://pokeapi.co/api/v2/pokemon/";
let card = document.getElementById("card");
let btn = document.getElementById("btn");
let visina = document.getElementById("heightOdg")

let getPokemons = (pokemon) => {
id=Math.floor(Math.random()*100)+1
finalUrl = url + id;

fetch(finalUrl)
.then((res) => res.json())
.then((data) => getCard(data))
}

let getCard = (data) => {
console.log(data);
visina.innerHTML=data.height


}


getPokemons()