/* ==========================================
   Shiva Mahajothi Jewellers
   Bangles Gallery
========================================== */

const banglesGallery =
    document.getElementById(
        "bangles-gallery"
    );

const banglesModal =
    document.getElementById(
        "bangles-modal"
    );

const banglesModalImage =
    document.getElementById(
        "bangles-modal-image"
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
   Load Images From GitHub
========================================== */

async function loadBanglesGallery(){

    const api=

"https://api.github.com/repos/rajiprem72/smjgold/contents/images/bangles";

    const response=
        await fetch(api);

    const files=
        await response.json();

    const images=
        files.filter(file=>

            file.name.toLowerCase().endsWith(".jpg")

        );

    shuffleArray(images);

    banglesGallery.innerHTML="";

    images.forEach(file=>{

        const card=
            document.createElement("div");

        card.className=
            "bangles-gallery-item";

        const img=
            document.createElement("img");

        img.src=file.download_url;

        img.alt="Bangles Collection";

        img.loading="lazy";

        img.onclick=()=>{

            banglesModalImage.src=
                file.download_url;

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

    ()=>{

        banglesModal.classList.remove(
            "active"
        );

        banglesModalImage.src="";

    }

);

/* ==========================================
   Start
========================================== */

loadBanglesGallery();
