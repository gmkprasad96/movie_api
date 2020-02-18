$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText) {
    console.log(searchText);
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=bc72d7f2' + '&s=' + searchText)
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                output += `
                    <div class = "col-md-3">
                        <div class="well text-center">
                            <img src="${movie.Poster}">
                            <h5>${movie.Title}</h5>
                        </div>
                    </div>
                `;
            });
            $('#movies').html(output);
        }).catch((err) => {
            console.log(err);
        });
}


