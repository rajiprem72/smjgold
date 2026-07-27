/* ==========================================
   Shiva Mahajothi Jewellers
   Mangalsutra Gallery
========================================== */

const TOTAL_IMAGES = 65;

const mangalsutraGallery =
    document.getElementById("mangalsutra-gallery");

const mangalsutraModal =
    document.getElementById("mangalsutra-modal");

const mangalsutraModalImage =
    document.getElementById("mangalsutra-modal-image");

/* ==========================================
   Create Image List
========================================== */

const mangalsutraImages = [];

for (let i = 1; i <= TOTAL_IMAGES; i++) {

    mangalsutraImages.push(
        `images/mangalsutra/img${i}.jpg`
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

function loadMangalsutraGallery() {

    shuffleArray(mangalsutraImages);

    mangalsutraGallery.innerHTML = "";

    mangalsutraImages.forEach(image => {

        const card =
            document.createElement("div");

        card.className =
            "mangalsutra-gallery-item";

        const img =
            document.createElement("img");

        img.src = image;

        img.alt = "Mangalsutra Collection";

        img.loading = "lazy";

        img.onclick = () => {

            mangalsutraModalImage.src = image;

            mangalsutraModal.classList.add(
                "active"
            );

        };

        card.appendChild(img);

        mangalsutraGallery.appendChild(card);

    });

}

/* ==========================================
   Close Modal
========================================== */

mangalsutraModal.addEventListener(
    "click",
    () => {

        mangalsutraModal.classList.remove(
            "active"
        );

        mangalsutraModalImage.src = "";

    }
);

/* ==========================================
   Start Gallery
========================================== */

loadMangalsutraGallery();
