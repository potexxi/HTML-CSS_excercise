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
    if(!movie.available){
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

// Von KI, weil eigentlich wollte ich keine search haben. aber mir war langweilig
// ich habe das aussehen gemacht und nur diese funktion von KI
function Search(event){
    event.preventDefault(); // verhindert Seiten-Neuladen

    let text = document.getElementById("search_input").value.toLowerCase();
    if(!text) return;

    // Alle Elemente durchsuchen
    let elements = document.querySelectorAll("h1, h2, h3, p, a, .card-title");

    for(let el of elements){
        if(el.innerText.toLowerCase().includes(text)){
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            el.style.backgroundColor = "gray";

            setTimeout(() => el.style.backgroundColor = "", 1500);
            return;
        }
    }

    alert("Nichts gefunden.");
}