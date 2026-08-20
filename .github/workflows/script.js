function searchMovies() {


const search = document
    .getElementById("search")
    .value
    .toLowerCase()
    .trim();

const movies = document.querySelectorAll(".movie");

movies.forEach(function(movie) {

    const title = movie
        .querySelector("h3")
        .textContent
        .toLowerCase();

    const details = movie
        .querySelector("p")
        .textContent
        .toLowerCase();

    if (
        title.includes(search) ||
        details.includes(search)
    ) {
        movie.style.display = "";
    } else {
        movie.style.display = "none";
    }

});


}

function showAllMovies() {


document.getElementById("search").value = "";

const movies = document.querySelectorAll(".movie");

movies.forEach(function(movie) {
    movie.style.display = "";
});


}

function toggleFavorite(button) {


button.classList.toggle("saved");

if (button.classList.contains("saved")) {
    button.textContent = "♥";
} else {
    button.textContent = "♡";
}


}
