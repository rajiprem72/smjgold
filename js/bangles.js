/* ==========================================
   Shiva Mahajothi Jewellers
   Bangles Gallery
========================================== */

const TOTAL_IMAGES = 102;

const banglesGallery =
    document.getElementById("bangles-gallery");

const banglesModal =
    document.getElementById("bangles-modal");

const banglesModalImage =
    document.getElementById("bangles-modal-image");

/* ==========================================
   Create Image List
========================================== */

const banglesImages = [];

for (let i = 1; i <= TOTAL_IMAGES; i++) {

    banglesImages.push(
        `images/bangles/img${i}.jpg`
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

function loadBanglesGallery() {

    shuffleArray(banglesImages);

    banglesGallery.innerHTML = "";

    banglesImages.forEach(image => {

        const card =
            document.createElement("div");

        card.className =
            "bangles-gallery-item";

        const img =
            document.createElement("img");

        img.src = image;

        img.alt = "Bangles Collection";

        img.loading = "lazy";

        img.onclick = () => {

            banglesModalImage.src = image;

            banglesModal.classList.add(
                "active"
            );

        };

        card.appendChild(img);

        banglesGallery.appendChild(card);

    });

}

/* ==========================================
   Close Modal
========================================== */

banglesModal.addEventListener(
    "click",
    () => {

        banglesModal.classList.remove(
            "active"
        );

        banglesModalImage.src = "";

    }
);

/* ==========================================
   Start Gallery
========================================== */

loadBanglesGallery();
