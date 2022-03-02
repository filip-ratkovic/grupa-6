const heroes = [

  { name: "Spiderman" },
  { name: "Ironman" },
  { name: "Black Panther" },
];
const heroes2 = heroes.map((el, index) => {
  return {
    id: index,
    hero: el.name
  }
})
console.log(heroes2);