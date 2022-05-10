const URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgURL = "https://image.tmdb.org/t/p/w1280";
const searchURL =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const pageURL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const footer = document.getElementById("footer");

getUrl(URL);

async function getUrl(url) {
    res = await fetch(url);
    finalRes = await res.json();
getMovies(finalRes.results)
}



let getMovies = (movies) => {
main.innerHTML = ""

movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;
    const movieEl = document.createElement("div")
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
            <img
                src="${imgURL + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                    vote_average
                )}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

        main.appendChild(movieEl)

})
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}
next.addEventListener("click",(el)=>{
    el.preventDefault();
  page=finalRes.page;
  page2=page+1;
    getUrl(pageURL+page2)
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
})

prev.addEventListener("click",(el)=>{
    el.preventDefault();
  page=finalRes.page;
  if(page<=1) {

  } else {
    page2=page-1;
    getUrl(pageURL+page2)
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
  }
  
})

form.addEventListener("submit", (el) => {
    el.preventDefault();

    const searchValues = search.value;

    if(searchValues) {
        getUrl(searchURL + searchValues);
        search.value = "";
        footer.style.display="none";
    }
        

});
