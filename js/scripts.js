// Scroll function 
window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("header-landscape").style.opacity = "0";
    } else {
        document.getElementById("header-landscape").style.opacity = "1";
    }
};

// Button scroll
const toNext = document.getElementById("down-btn");
toNext.addEventListener("click", () => {
    let nextPageScroll; 

    if (window.innerWidth < 390) {
        nextPageScroll = 667;
    } else if (window.innerWidth == 412) {
        nextPageScroll = 915;
    } else if (window.innerWidth == 540) {
        nextPageScroll = 720;
    } else if (window.innerWidth == 768) {
        nextPageScroll = 1024;
    } else if (window.innerWidth == 912) {
        nextPageScroll = 1368;
    } else {
        nextPageScroll = 844;
    }

    window.scrollTo({
        top: nextPageScroll,
        behavior: "smooth", 
    });
});
toNext.addEventListener("touchend", () => {
    let nextPageScroll; 

    if (window.innerWidth < 390) {
        nextPageScroll = 667;
    } else if (window.innerWidth == 412) {
        nextPageScroll = 915;
    } else if (window.innerWidth == 540) {
        nextPageScroll = 720;
    } else if (window.innerWidth == 768) {
        nextPageScroll = 1024;
    } else if (window.innerWidth == 912) {
        nextPageScroll = 1368;
    } else {
        nextPageScroll = 844;
    }

    window.scrollTo({
        top: nextPageScroll,
        behavior: "smooth", 
    });
});
const toTop = document.getElementById("scroll-up");
toTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}); 
toTop.addEventListener("touchend", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}); 


