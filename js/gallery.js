/* ==========================================
   Shiva Mahajothi Jewellers
   Universal Gallery
========================================== */
const galleryHeading =
    document.getElementById(
        "gallery-heading"
    );

const gallerySubtitle =
    document.getElementById(
        "gallery-subtitle"
    );

const galleryStatus =
    document.getElementById(
        "gallery-status"
    );

const galleryStatus =
    document.getElementById(
        "gallery-status"
    );

const gallery =
    document.getElementById(
        "gallery"
    );

const modal =
    document.getElementById(
        "gallery-modal"
    );

const modalImage =
    document.getElementById(
        "gallery-modal-image"
    );

/* ==========================================
   Shuffle
========================================== */

function shuffleArray(array){

    for(
        let i=array.length-1;
        i>0;
        i--
    ){

        const j=
            Math.floor(
                Math.random()*(i+1)
            );

        [array[i],array[j]]=
        [array[j],array[i]];

    }

}

/* ==========================================
   Load Gallery
========================================== */

async function loadGallery(){

    try{

        const response=
            await fetch(
                `images/${galleryFolder}/images.json`
            );

        const images=
            await response.json();

       galleryHeading.innerHTML =     galleryTitle;

       gallerySubtitle.innerHTML =     galleryDescription;

       galleryStatus.innerHTML =     `✨ Showing <strong>${images.length}</strong> Beautiful Designs`;

        shuffleArray(images);

        gallery.innerHTML="";

        images.forEach(file=>{

            const card=
                document.createElement("div");

            card.className=
                "gallery-item";

            const img=
                document.createElement("img");

            img.src=
                `images/${galleryFolder}/${file}`;

            img.alt=
                galleryTitle;

            img.loading=
                "lazy";

            img.onclick=()=>{

                modalImage.src=
                    img.src;

                modal.classList.add(
                    "active"
                );

            };

            card.appendChild(img);

            gallery.appendChild(card);

        });

    }

    catch(error){

        console.error(error);

        gallery.innerHTML=
            "<h3>Unable to load gallery.</h3>";

    }

}

/* ==========================================
   Close Modal
========================================== */

modal.addEventListener(

    "click",

    ()=>{

        modal.classList.remove(
            "active"
        );

        modalImage.src="";

    }

);

/* ==========================================
   Start
========================================== */

loadGallery();
