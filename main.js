
const listFilm = document.getElementById("listFilms");
const catalogue = [ "https://archivos-cms.cinecolombia.com/images/5/7/2/8/48275-2-esl-CO/c5c73b73bb71-toystory.png",
                    "https://pics.filmaffinity.com/Encanto-246546841-large.jpg",
                    "https://www.elseptimoarte.net/imagenes/noticias/2474.jpg", 
                    "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg"   ];

// AGREGAR NOMBRES AL CATALOGO

const nameCatalogue = ["Toy Story 1","Encanto", "El libro de la selva", "Wall-e"];

// ARRAY DE TRAILERS 

const trailersFilm = [" https://www.youtube.com/watch?v=0PmoiC8ensA&ab_channel=Pixar", 
                        "https://www.youtube.com/watch?v=aUts14xyjHg&ab_channel=WaltDisneyStudiosPhilippines", 
                        "https://www.youtube.com/watch?v=kLJhKCfxecw&ab_channel=DisneyEspa%C3%B1a", 
                        "https://www.youtube.com/watch?v=IYPe2oWBV_w&ab_channel=Tr%C3%A1ilersconDoblajeEspa%C3%B1olLatinobySoldierBoy"];

// RECORRER ARRAY CON FOR

for (i=0; i < catalogue.length; i++) {
    listFilm.innerHTML = listFilm.innerHTML + (`<div class="container-film">
                                                    <a target="_blank" href="${trailersFilm[i]}"> <img src="${catalogue[i]}" alt="${nameCatalogue[i]}"> </a>
                                                    <p> ${nameCatalogue[i]}</p>
                                                </div>`);
}


// AGREGAR PELICULAS A TRAVES DE UN INPUT 


function addFilm(){
    const newFilm = document.getElementById("film").value
    catalogue.push(newFilm)
    document.getElementById("film").value= "";
    
    const nameFilm = document.getElementById("name-film").value
    nameCatalogue.push(nameFilm)
    document.getElementById("name-film").value= "";
    
    const trailerFilm = document.getElementById("trailer-film").value
    trailersFilm.push(trailerFilm)
    document.getElementById("trailer-film").value= "";

    listFilm.innerHTML = listFilm.innerHTML + (`<div class="container-film">
                                                <a target=" _blank" href="${trailerFilm}"><img src="${newFilm}" alt="${nameFilm}"></a>
                                                <p>${nameFilm}</p>
                                            </div>`);
    return false;
}


