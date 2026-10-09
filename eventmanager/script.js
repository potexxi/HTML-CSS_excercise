const events = [
    {
        title: "Beach Party",
        date: "15.07.2027",
        ort: "Bregenz",
        preis: "25€",
        bild: "pictures/beach_party.png"
    },
    {
        title: "Konzert",
        date: "20.08.2027",
        ort: "Dornbirn",
        preis: "45€",
        bild: "pictures/concert.png"
    },
    {
        title: "Tech Meetup",
        date: "05.09.2027",
        ort: "Feldkirch",
        preis: "10€",
        bild: "pictures/tech_meetup.png"
    },
    {
        title: "Food Festival",
        date: "10.10.2027",
        ort: "Rankweil",
        preis: "15€",
        bild: "pictures/food.png"
    },
    {
        title: "Sport Event",
        date: "18.11.2027",
        ort: "Bludenz",
        preis: "20€",
        bild: "pictures/sport.png"
    },
    {
        title: "Weihnachtsmarkt",
        date: "12.12.2027",
        ort: "Bregenz",
        preis: "Kostenlos",
        bild: "pictures/weihnachts.png"
    },
    {
        title: "Open Air Kino",
        date: "22.07.2027",
        ort: "Bregenz",
        preis: "12€",
        bild: "pictures/kino.png"
    },
    {
        title: "Gaming Night",
        date: "30.07.2027",
        ort: "Dornbirn",
        preis: "8€",
        bild: "pictures/gaming.png"
    },
    {
        title: "Sommerfest",
        date: "05.08.2027",
        ort: "Rankweil",
        preis: "Kostenlos",
        bild: "pictures/sommerfest.png"
    },
    {
        title: "Musikfestival",
        date: "12.08.2027",
        ort: "Feldkirch",
        preis: "55€",
        bild: "pictures/festival.png"
    },
    {
        title: "Startup Messe",
        date: "18.08.2027",
        ort: "Bludenz",
        preis: "20€",
        bild: "pictures/startup.png"
    },
    {
        title: "Halloween Party",
        date: "31.10.2027",
        ort: "Dornbirn",
        preis: "18€",
        bild: "pictures/halloween.png"
    },
    {
        title: "Weinverkostung",
        date: "07.11.2027",
        ort: "Rankweil",
        preis: "30€",
        bild: "pictures/wine.png"
    },
    {
        title: "Winter Ball",
        date: "20.11.2027",
        ort: "Bregenz",
        preis: "40€",
        bild: "pictures/ball.png"
    },
    {
        title: "Silvester Gala",
        date: "31.12.2027",
        ort: "Feldkirch",
        preis: "75€",
        bild: "pictures/silvester.png"
    },
    {
        title: "Kunst Ausstellung",
        date: "14.01.2028",
        ort: "Dornbirn",
        preis: "10€",
        bild: "pictures/art.png"
    }
];

const container = document.getElementById("event-container");

events.forEach(event => {
    container.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4" style="margin-top:20px;">
            <div class="card" data-bs-theme="dark">
                <img src="${event.bild}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title">${event.title}</h2>

                    <p class="card-text normal-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16">
  <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg> ${event.date}<br>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg> ${event.ort}<br>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag-fill" viewBox="0 0 16 16">
  <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg> ${event.preis}
                    </p>

                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25z"/>
</svg> Anmelden</button>
                </div>
            </div>
        </div>
    `;
});
