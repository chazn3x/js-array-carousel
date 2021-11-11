const items = [
    'img/usa.jpeg',
    'img/japan.jpeg',
    'img/sweden.jpg',
    'img/switzerland.jpeg',
    'img/britain.jpeg',
    'img/germany.jpeg',
    'img/hawaii.jpeg'
];

const title = [
    'Stati Uniti',
    'Giappone',
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Hawaii'
]

const text = [
    "Gli Stati Uniti comprendono 50 stati e occupano una vasta area del Nord America, dall'Alaska a nord-ovest fino alle Hawaii nell'Oceano Pacifico.",
    "Il Giappone è una nazione insulare nell’Oceano Pacifico con città densamente popolate, palazzi imperiali, parchi nazionali sulle montagne e migliaia di templi e santuari.",
    "La Svezia è un paese scandinavo che comprende migliaia di isole lungo la costa e laghi nell'entroterra, oltre a vaste foreste boreali e rilievi glaciali.",
    "La Svizzera è un paese montuoso dell'Europa Centrale dove si trovano numerosi laghi, paesini e i picchi delle Alpi.",
    "La Gran Bretagna è un'isola separata dal continente europeo dal canale della Manica e dal mare del Nord. L’isola comprende le nazioni di Inghilterra, Scozia e Galles.",
    "La Germania è un Paese dell'Europa Occidentale con oltre due millenni di storia e un paesaggio caratterizzato da foreste, fiumi, catene montuose e spiagge affacciate sul Mare del Nord.",
    "Le Hawaii, uno stato degli USA, sono un arcipelago vulcanico isolato nel Pacifico centrale.",
]

let background = document.querySelector(".background");
background.innerHTML = `<img src="${items[0]}" alt="${title[0]} background">`;

// creazione immagini grandi

const previewContainer = document.querySelector(".image-container");
// ciclo per inserire le immagini grandi
for (let i = 0; i < items.length; i++) {
    let preview = `
    <!-- immagine -->
    <div class="preview">
        <img src="${items[i]}" alt="${title[i]}">
        <div class="layover"></div>
        <div class="description">
            <h2>${title[i]}</h2>
            <p>${text[i]}</p>
        </div>
    </div>`;
    previewContainer.innerHTML += preview;
}
document.querySelector(".preview").className = "preview active";

// creazione thumbnails

const carouselContainer = document.querySelector(".carousel");
// ciclo per inserire le thumbnails
for (let i = 0; i < items.length; i++) {
    let thumbnail = `
    <!-- thumbnail -->
    <div class="thumbnail">
        <img src="${items[i]}" alt="${title[i]} thumbnail">
        <h3>${title[i]}</h3>
    </div>`;
    carouselContainer.innerHTML += thumbnail;
}
document.querySelector(".thumbnail").className = "thumbnail active";
 
// pulsante next

let carousel = document.getElementsByClassName("thumbnail"); //array con le thumbnails
let preview = document.getElementsByClassName("preview"); //array con le preview grandi
let counter = 0; //contatore per thumbnails e preview
const next = document.querySelector(".next");
next.addEventListener("click", function() {
    carousel[counter].className = "thumbnail";
    preview[counter].className = "preview";
    if (counter + 1 < carousel.length) { //condizione per andare avanti
        counter ++;
    } else { //condizione per rendere il ciclo infinito
        counter = 0;
    }
    carousel[counter].className = "thumbnail active";
    preview[counter].className = "preview active";
    background.innerHTML = `<img src="${items[counter]}" alt="${title[counter]} background">`;
});

// pulsante previous

const prev = document.querySelector(".prev");
prev.addEventListener("click", function() {
    carousel[counter].className = "thumbnail";
    preview[counter].className = "preview"
    if (counter > 0) { //condizione per andare indietro
        counter --;
    } else { //condizione per rendere il ciclo infinito
        counter = carousel.length - 1;
    }
    carousel[counter].className = "thumbnail active";
    preview[counter].className = "preview active";
    background.innerHTML = `<img src="${items[counter]}" alt="${title[counter]} background">`;
});

// click sulle immagini

for (let i = 0; i < carousel.length; i++) {
    carousel[i].addEventListener("click", function() {
        carousel[counter].className = "thumbnail";
        preview[counter].className = "preview"
        counter = i;
        carousel[counter].className = "thumbnail active";
        preview[counter].className = "preview active";
        background.innerHTML = `<img src="${items[counter]}" alt="${title[counter]} background">`;
    });
}