function login() {

    const username = document.getElementById("username").value.trim()
    const password = document.getElementById("password").value.trim()

    
    if (username === "") {
        alert("Enter The Username!! It's Literally Blank ")
        return;
    }

    
    if (password === "") {
        alert("Enter Some Password To Login!! ")
        return;
    }


    if (password.length < 4) {
        alert("Password must contain at least 4 characters!!")
        return;
    }

    
    const confirmLogin = confirm(
        "Are You Sure You Want To Login?\n\n" +
        "Username: " + username
    );

    if (confirmLogin === true) {

        
        document.getElementById("loginPage").style.display = "none"

        
        document.getElementById("dashboard").style.display = "block"

        
        document.getElementById("userDisplay").textContent = username

        
        const avatar = document.querySelector(".avatar")

        if (avatar) {
            avatar.textContent = username.charAt(0).toUpperCase()
        }

        
        document.getElementById("password").value = ""

        alert("Welcome to Moviez Hub " + username + "! ")

    } else {

        alert("Come Back Again ")

    }
}

function logout(){
    document.getElementById("dashboard").style.display="none"
    document.getElementById("loginPage").style.display="flex"

    document.getElementById("password").value=""

}


function searchMovies() {

    const search = document
        .getElementById("search")
        .value
        .toLowerCase();

    const movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {

        const title = movie
            .querySelector("h3") .textContent .toLowerCase();

        if (title.includes(search)) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }

    });
}