
const catalog = [
    { titulo: "The Dark Knight", año: 2008, img: "img_catalogo/The Dark Knight (2008).jpg" },
    { titulo: "Inception", año: 2010, img: "img_catalogo/Inception.jpg" },
    { titulo: "Interstellar", año: 2014, img: "img_catalogo/Interstellar.jpg" },
    { titulo: "Joker", año: 2019, img: "IMG/5442885.jpg" },
    { titulo: "Avengers: Endgame", año: 2019, img: "img_catalogo/avenger.jpg" },
    { titulo: "Spider-Man: No Way Home", año: 2021, img: "img_catalogo/SPIDER MAN NO WAY HOME___.jpg" },
    { titulo: "The Matrix", año: 1999, img: "img_catalogo/Matrix 1 1999 Póster  Keanu Reeves.jpg" },
    { titulo: "Gladiator", año: 2000, img: "img_catalogo/gladiator.jpg" },
    { titulo: "Fight Club", año: 1999, img: "img_catalogo/Fight Club.jpg" },
    { titulo: "John Wick", año: 2014, img: "img_catalogo/jhon wick.jpg" },
    { titulo: "The Lord of the Rings", año: 2001, img: "img_catalogo/the lord of the rings.jpg" },
    { titulo: "The Pursuit Of Happyness", año: 2006, img: "IMG/En busca de la felicidad.jpg" }
];




catalog.forEach(movie =>{

    const theDiv = document.createElement("div");
    theDiv.classList.add("card");

    theDiv.innerHTML =`
        <img src="${movie.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h2 class ="title">${movie.titulo}</h2>
            <h2 class="year">${movie.año}</h2>
        </div>
    `

    let catalogo = document.getElementById("catalogo")
    catalogo.appendChild(theDiv)
}

)


