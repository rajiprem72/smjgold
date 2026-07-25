/* ==========================================
   Shiva Mahajothi Jewellers
   Choker Gallery
========================================== */

const TOTAL_IMAGES = 39;

const chokerGallery =
    document.getElementById("choker-gallery");

const chokerModal =
    document.getElementById("choker-modal");

const chokerModalImage =
    document.getElementById("choker-modal-image");

/* ==========================================
   Create Image List
========================================== */

const chokerImages = [];

for (let i = 1; i <= TOTAL_IMAGES; i++) {

    chokerImages.push(
        `images/choker/img${i}.jpg`
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

function loadChokerGallery() {

    shuffleArray(chokerImages);

    chokerGallery.innerHTML = "";

    chokerImages.forEach(image => {

        const card =
            document.createElement("div");

        card.className =
            "choker-gallery-item";

        const img =
            document.createElement("img");

        img.src = image;

        img.alt = "Choker Collection";

        img.loading = "lazy";

        img.onclick = () => {

            chokerModalImage.src = image;

            chokerModal.classList.add(
                "active"
            );

        };

        card.appendChild(img);

        chokerGallery.appendChild(card);

    });

}

/* ==========================================
   Close Modal
========================================== */

chokerModal.addEventListener(
    "click",
    () => {

        chokerModal.classList.remove(
            "active"
        );

    }
);

/* ==========================================
   Start
========================================== */

loadChokerGallery();
