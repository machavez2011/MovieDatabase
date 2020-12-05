(function() {
    document.querySelector('#navbar').innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="index.html">Movie Database</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07"
                aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample07">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <div class="input-group md-form form-sm form-2 pl-0">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary dropdown-toggle bg-warning text-dark border-light" type="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">All</button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <input id='searchInput' class="form-control my-0 py-1 amber-border" type="text" placeholder="Search Movie Database" aria-label="Search">
                    <div class="input-group-append">
                        <button class="input-group-text amber lighten-3" id='searchButton'><i class="fas fa-search text-grey" aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    `
})()

const searchInput = document.querySelector('#searchInput');
document.querySelector('#searchButton').addEventListener('click', navigation)
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        navigation();
    }
});

function navigation() {
    window.location.href = `search.html?name=${searchInput.value}`;
}