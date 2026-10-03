// KI, wegen dem JSON in eine datenstruktur laden:
let movies = {};

fetch("movies.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(movie => {
            movies[movie.id] = movie;
        });
        console.log("Movies geladen:", movies);
    });


let popup = document.getElementById("popup");
let popup_background = document.getElementById("popup_background");
let popup_img = document.getElementById("popup_img");
let popup_h1 = document.getElementById("popup_h1");
let popup_p1 = document.getElementById("popup_p1");
let popup_p2 = document.getElementById("popup_p2");
let popup_p3 = document.getElementById("popup_p3");
let popup_a1 = document.getElementById("popup_a1");
let popup_a2 = document.getElementById("popup_a2");

function ShowPopup(movie){
    document.body.style.overflow = "hidden";
    popup.style.opacity = 1;
    popup_background.style.opacity = 1;
    popup_background.style.pointerEvents = "all";
    popup_h1.innerHTML = movie.title;
    popup_p1.innerHTML = movie.description;
    popup_p2.innerHTML = movie.age;
    popup_p3.innerHTML = movie.author;
    if(!movie.button){
        popup_a1.innerHTML = "+ Vormerken";
        popup_a2.style.opacity = 0;
    }
    else{
        popup_a1.innerHTML = "▶︎ Abspielen";
        popup_a2.innerHTML = "+ Zur Liste"
    }
    popup_img.src = movie.img;
}

function HidePopup(){
    document.body.style.overflow = "";
    popup.style.opacity = 0;
    popup_background.style.opacity = 0;
    popup_background.style.pointerEvents = "none";
}