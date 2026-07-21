const flipBook = document.getElementById(
    "flipBook"
);

flipBook.addEventListener(
    "click",
    () => {

        flipBook.classList.toggle(
            "flipped"
        );

    }
);
