'use strict';

const numOfFilms = +prompt("Сколько фильмов?", "")

const personalMovieDB = {
    "count": numOfFilms,
    "movies": {},
    "actors": {},
    "genres": [],
    "private": false
}


const moviesObj = personalMovieDB["movies"]
for (let i = 0; i < 2; i++) {
    let movieName = "";
    while (!movieName || movieName.length > 50) {
        movieName = prompt("Последний фильм?", "")
    }

    let rate = null;
    while (!rate) {
        rate = prompt("Rate?", "")
    }

     moviesObj[movieName] = rate
}


console.log(personalMovieDB)


if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман")
} else {
    alert("Произошла ошибка")
}