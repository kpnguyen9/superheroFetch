const myKey = "3b26963a";

const batmanURL = `http://www.omdbapi.com/?s=batman&apikey=${myKey}`;

const movieList = document.getElementById("movieList");
const detailsList = document.getElementById("detailsList");

const logData = (data) => {
  console.log(data);
  return data;
};

const extractSearch = (data) => {
  //   console.log(data.Search);
  return data.Search;
};

const reportError = () => {
  console.log("there was an error");
};

const printMovieTitles = (movies) => {
  console.log(movies);

  for (let i = 0; i < movies.length; i++) {
    let createDiv = document.createElement("div");
    createDiv.classList.add("card");
    createDiv.classList.add("movieCards");
    movieList.appendChild(createDiv);

    let createImg = document.createElement("img");
    createImg.classList.add("card-img-top");
    createImg.setAttribute("src", movies[i].Poster);
    createImg.style.width = "200px";
    createDiv.appendChild(createImg);

    let createCardBodyDiv = document.createElement("div");
    createCardBodyDiv.classList.add("card-body");
    createDiv.appendChild(createCardBodyDiv);

    let createA = document.createElement("a");
    // console.log(movies[i].Title);
    createA.classList.add("card-text");
    createA.innerHTML = movies[i].Title;
    createA.id = `${movies[i].imdbID}`;
    createCardBodyDiv.appendChild(createA);
  }
};

function getBatman() {
  fetch(batmanURL)
    .then((response) => response.json())
    .then(logData)
    .then(extractSearch)
    .catch(reportError)
    .then(printMovieTitles);
}

getBatman();

const printMovieDetails = (movie) => {
  console.log(movie);

  let createDiv = document.createElement("div");
  createDiv.classList.add("card");
  createDiv.id = "detailsCard";

  let createImg = document.createElement("img");
  createImg.classList.add("card-img-top");
  createImg.setAttribute("src", movie.Poster);
  createImg.style.width = "200px";
  createDiv.appendChild(createImg);

  let createCardBodyDiv = document.createElement("div");
  createCardBodyDiv.classList.add("card-body");
  createDiv.appendChild(createCardBodyDiv);

  for (let a in movie) {
    let createP = document.createElement("p");
    createP.classList.add("card-text");
    createP.innerHTML = `${a}: ${movie[a]}`;
    createCardBodyDiv.appendChild(createP);
  }

  detailsList.appendChild(createDiv);
};

movieList.addEventListener("click", (e) => {
  fetch(`http://www.omdbapi.com/?i=${e.target.id}&apikey=${myKey}`)
    .then((response) => response.json())
    .catch(reportError)
    .then(printMovieDetails);
});

// {
//   "Title": "Batman Begins",
//   "Year": "2005",
//   "Rated": "PG-13",
//   "Released": "15 Jun 2005",
//   "Runtime": "140 min",
//   "Genre": "Action, Crime, Drama",
//   "Director": "Christopher Nolan",
//   "Writer": "Bob Kane, David S. Goyer, Christopher Nolan",
//   "Actors": "Christian Bale, Michael Caine, Ken Watanabe",
//   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
//   "Language": "English, Mandarin",
//   "Country": "United Kingdom, United States",
//   "Awards": "Nominated for 1 Oscar. 13 wins & 79 nominations total",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//   "Ratings": [
//       {
//           "Source": "Internet Movie Database",
//           "Value": "8.2/10"
//       },
//       {
//           "Source": "Rotten Tomatoes",
//           "Value": "84%"
//       },
//       {
//           "Source": "Metacritic",
//           "Value": "70/100"
//       }
//   ],
//   "Metascore": "70",
//   "imdbRating": "8.2",
//   "imdbVotes": "1,383,989",
//   "imdbID": "tt0372784",
//   "Type": "movie",
//   "DVD": "18 Oct 2005",
//   "BoxOffice": "$206,852,432",
//   "Production": "N/A",
//   "Website": "N/A",
//   "Response": "True"
// }
