const myKey = "3b26963a";

const batmanURL = `http://www.omdbapi.com/?s=batman&apikey=${myKey}`;

const detailsURL = `http://www.omdbapi.com/?i=insertSelectedimdbIDhere&apikey=${myKey}`;

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

const printMovieTitles = (movies) => {
  console.log(movies);

  for (let i = 0; i < movies.length; i++) {
    let createDiv = document.createElement("div");
    createDiv.classList.add("card");
    movieList.appendChild(createDiv);

    let createImg = document.createElement("img");
    createImg.classList.add("card-img-top");
    createImg.setAttribute("src", movies[i].Poster);
    createImg.style.width = "200px";
    createDiv.appendChild(createImg);

    let createCardBodyDiv = document.createElement("div");
    createCardBodyDiv.classList.add("card-body");
    createDiv.appendChild(createCardBodyDiv);

    let createP = document.createElement("p");
    // console.log(movies[i].Title);
    createP.classList.add("card-text");
    createP.innerHTML = movies[i].Title;
    createCardBodyDiv.appendChild(createP);
  }
};

function getBatman() {
  fetch(batmanURL)
    .then((response) => response.json())
    .then(logData)
    .then(extractSearch)
    .then(printMovieTitles);
}

getBatman();
