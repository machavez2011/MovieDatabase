let moviesDatabase = (function() {
    function render() {
        const main = document.querySelector('#main');
        const header = '<h1>Movie Database</h1>';
        const input = "<input id='movieQuery' type='text' placeholder='Enter Movie here'>";
        const search = "<button id='searchButton'>Search</button>";
        const result = "<ul id='resultList'></ul>";
        main.innerHTML = header + input + search + result;
        document.querySelector('#searchButton').addEventListener('click', moviesDatabase.getMovies);
    }

    function getMovies() {
        const movieQuery = document.querySelector('#movieQuery');
        fetch("https://imdb8.p.rapidapi.com/title/auto-complete?q=" + movieQuery.value, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7f66dbc693msh6d45b0305e5f07ap14b428jsn8eeed1d35807",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => populateList(data))
        .catch(err => {
            console.error(err);
        });
    }

    function populateList(data) {
        const resultList = document.querySelector('#resultList');
        while(resultList.firstChild) {
            resultList.removeChild(resultList.firstChild)
        }

        data.d.forEach(movie => {
            newLi = document.createElement('li');
            newLi.innerHTML = movie.l;

            resultList.appendChild(newLi);
        });

        movieQuery.value = '';
    }

    return {
        render,
        getMovies
    }
})()

moviesDatabase.render();