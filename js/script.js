const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const previewContainer = document.querySelector(".image-container");
// ciclo per inserire le immagini nel container
for (let i = 0; i < items.length; i++) {
    let preview = `
    <!-- immagine -->
            <div class="preview">
                <img src="${items[i]}" alt="Svezia">
                <div class="layover"></div>
                <div class="description">
                    <h2>${title[i]}</h2>
                    <p>${text[i]}</p>
                </div>
            </div>`;
    previewContainer.innerHTML += preview;
}
document.querySelector(".preview").className = "preview active";