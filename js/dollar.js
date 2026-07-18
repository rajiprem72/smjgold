// ==========================================
// CONFIGURATION
// ==========================================

const TOTAL_IMAGES = 25;

const IMAGE_FOLDER = "images/dollar/";

// ==========================================
// GET ELEMENTS
// ==========================================

const gallery = document.getElementById("dollar-gallery");

const modal = document.getElementById("image-modal");

const modalImage = document.getElementById("modal-image");

// ==========================================
// CREATE ARRAY
// ==========================================

let images = [];

for (let i = 1; i <= TOTAL_IMAGES; i++) {

    images.push(`${IMAGE_FOLDER}img${i}.jpg`);
}

// ==========================================
// SHUFFLE FUNCTION
// ==========================================

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        [array[i], array[j]] = [
            array[j],
            array[i]
        ];
    }

    return array;
}

// ==========================================
// BUILD GALLERY
// ==========================================

function loadGallery() {

    gallery.innerHTML = "";

    shuffle(images);

    images.forEach(src => {

        const card = document.createElement("div");

        card.className = "gallery-item";

        const img = document.createElement("img");

        img.src = src;

        img.loading = "lazy";

        img.alt = "Dollar Jewellery";

        img.addEventListener("click", () => {

            modal.classList.add("active");

            modalImage.src = src;
        });

        card.appendChild(img);

        gallery.appendChild(card);
    });
}

// ==========================================
// CLOSE MODAL
// ==========================================

modal.addEventListener("click", () => {

    modal.classList.remove("active");

    modalImage.src = "";
});

// ==========================================
// START
// ==========================================

loadGallery();
