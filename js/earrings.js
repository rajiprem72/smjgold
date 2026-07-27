/* ==========================================
   Shiva Mahajothi Jewellers
   Earrings Gallery
========================================== */

const TOTAL_IMAGES = 18;

const earringsGallery =
    document.getElementById("earrings-gallery");

const earringsModal =
    document.getElementById("earrings-modal");

const earringsModalImage =
    document.getElementById("earrings-modal-image");

/* ==========================================
   Create Image List
========================================== */

const earringsImages = [];

for (let i = 1; i <= TOTAL_IMAGES; i++) {

    earringsImages.push(
        `images/earrings/img${i}.jpg`
    );

}

/* ==========================================
   Shuffle Images
========================================== */

function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [array[i], array[j]] =
            [array[j], array[i]];

    }

}

/* ==========================================
   Load Gallery
========================================== */

function loadEarringsGallery() {

    shuffleArray(earringsImages);

    earringsGallery.innerHTML = "";

    earringsImages.forEach(image => {

        const card =
            document.createElement("div");

        card.className =
            "earrings-gallery-item";

        const img =
            document.createElement("img");

        img.src = image;

        img.alt = "Earrings Collection";

        img.loading = "lazy";

        img.onclick = () => {

            earringsModalImage.src = image;

            earringsModal.classList.add(
                "active"
            );

        };

        card.appendChild(img);

        earringsGallery.appendChild(card);

    });

}

/* ==========================================
   Close Modal
========================================== */

earringsModal.addEventListener(
    "click",
    () => {

        earringsModal.classList.remove(
            "active"
        );

        earringsModalImage.src = "";

    }
);

/* ==========================================
   Start Gallery
========================================== */

loadEarringsGallery();
