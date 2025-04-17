const hamburger = document.querySelector(".hamburger-button");
const navMenu = document.querySelector(".navbar .menu");
const bars = document.querySelectorAll(".bar");

let navOpen = false;

hamburger.addEventListener("click", () => {
    navOpen = !navOpen;

    for (let i = 0; i < bars.length; i++) {
        const className = `bar${i + 1}`;

        if (navOpen) {
            bars[i].classList.add(className);
            continue;
        }
        bars[i].classList.remove(className);

    }
    if (navOpen) {
        navMenu.classList.add("show-mobile-nav");
        return;
    }
    navMenu.classList.remove("show-mobile-nav");
});
