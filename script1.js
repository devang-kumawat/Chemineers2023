document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    let lastScrollTop = 0;

    // Add initial transparent class
    navbar.classList.add("transparent");

    // Create and append the info block
    const infoBlock = document.createElement("div");
    infoBlock.classList.add("info-block", "hidden");
    navbar.appendChild(infoBlock);

    // Add two lines of text to the info block
    const line1 = document.createElement("div");
    line1.textContent = "Chemineers Society";
    infoBlock.appendChild(line1);

    const line2 = document.createElement("div");
    line2.textContent = "IIT Kanpur";
    infoBlock.appendChild(line2);

    positionInfoBlock(); // Position the info block initially

    window.addEventListener("scroll", function () {
        const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
        const screenWidth = window.innerWidth;

        if (currentScrollTop > 0) {
            navbar.classList.remove("transparent");
            if(screenWidth<=1080 || screenWidth >=1300)
            infoBlock.classList.remove("hidden");
        // } else if (screenWidth >= 1430) {
        //     navbar.classList.add("transparent");
        //     infoBlock.classList.add("hidden");
        } else {
            navbar.classList.add("transparent");
            infoBlock.classList.add("hidden");
        }

        lastScrollTop = currentScrollTop;
    });

    window.addEventListener("resize", function () {
        const screenWidth = window.innerWidth;

        if (screenWidth>=992 && screenWidth <= 1030) {
            infoBlock.classList.add("hidden");
        } else {
            infoBlock.classList.remove("hidden");
            positionInfoBlock();
        }
    });

    function positionInfoBlock() {
        infoBlock.style.position = "absolute";
        infoBlock.style.left = 100 + "px";
        infoBlock.style.top = "0"; // You can adjust the top position as needed
        infoBlock.style.marginTop = 10 + "px";
        infoBlock.style.marginLeft = 50 + "px";
    }
});
