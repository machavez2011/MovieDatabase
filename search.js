function getMovies(movieQuery) {
    fetch("https://imdb8.p.rapidapi.com/title/auto-complete?q=" + movieQuery, {
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
    queryResult.innerHTML = movieQuery;
    const resultList = document.querySelector('#resultList');
    resultList.innerHTML = '';
    let result = '';
    data.d = data.d.filter(movie => movie.i);

    data.d.forEach(movie => {
        result += 
        `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card h-100 bg-dark">
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


const urlParams = new URLSearchParams(window.location.search);
const movieQuery = urlParams.get('name');

getMovies(movieQuery);