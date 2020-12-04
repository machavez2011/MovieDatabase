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
    const queryResult = document.querySelector('#queryResult');
    queryResult.innerHTML = movieQuery.value;
    const resultList = document.querySelector('#resultList');
    resultList.innerHTML = '';
    movieQuery.value = '';
    let result = '';
    data.d = data.d.filter(movie => movie.i);

    data.d.forEach(movie => {
        result += 
        `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src=${movie.i.imageUrl} alt=""></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <a href="#">${movie.l}</a>
                    </h4>
                </div>
            </div>
        </div>
        `;
    });
    resultList.innerHTML = result;
}

document.querySelector('#searchButton').addEventListener('click', getMovies)
document.querySelector('#movieQuery').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getMovies();
    }
});