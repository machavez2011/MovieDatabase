function getMovies() {
    const movieQuery = document.querySelector('#movieQuery');
    fetch("https://imdb8.p.rapidapi.com/title/auto-complete?q=" + movieQuery.value, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": config.rapidapi,
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(data => populateList(data))
    .catch(err => {
        console.log(err);
    });
}

function populateList(data) {
    const resultList = document.querySelector('#resultList');
    resultList.innerHTML = '';
    movieQuery.value = '';
    let result = '';
    data.d = data.d.filter(movie => movie.i);

    data.d.forEach(movie => {
        // let newLi = document.createElement('li');
        // let newImg = document.createElement('img');
        // newLi.innerHTML = movie.l;
        // newImg.setAttribute('src', movie.i.imageUrl);
        // resultList.appendChild(newLi);
        // resultList.appendChild(newImg);
        result += 
        `
        <li>
            <img src=${movie.i.imageUrl}>
            <p>${movie.l}</p>
        </li>
        `;
    });
    resultList.innerHTML = result;
}

document.querySelector('#searchButton').addEventListener('click', getMovies)