let movies = document.querySelector(".movies");

let movieList = fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All")
// console.log(movieList);
movieList.then((res)=>{
return res.json();
})
.then((info)=>{
console.log(info.Search);
movies.innerHTML = "";
info.Search.forEach((elem)=>{
    // console.log(elem.Year);
    movies.innerHTML += `
    <div class="movie-n">
        <img
          class="poster"
          src="${elem.Poster}"
          alt="Poster"
        />
        <br />
        <h2>${elem.Title}</h2>
        <h5>${elem.Year}</h5>
      </div>
    `
});
})
.catch((err)=>{
    console.log(err);
})
