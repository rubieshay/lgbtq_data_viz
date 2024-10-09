document.addEventListener("DOMContentLoaded", function() {
    let mainContainer = document.getElementById("main-container");
    let introContent = document.getElementById("intro-content");
    let vh = window.innerHeight;

    mainContainer.addEventListener("scroll", (e) => {
        let panelNum = mainContainer.scrollTop / vh;
        if (panelNum % 2 > 1.5 || panelNum % 2 < 0.5) {
            mainContainer.classList.remove("rotate-sect");
        } else {
            mainContainer.classList.add("rotate-sect");
        }
        
        if (panelNum > 0.8 && panelNum < 4.2) {
            introContent.classList.add("intro-content-active");
        } else {
            introContent.classList.remove("intro-content-active");
        }
        if (panelNum < 0.8) {
            introContent.classList.add("intro-content-top");
        } else {
            introContent.classList.remove("intro-content-top");
        }
        if (panelNum > 4.2) {
            introContent.classList.add("intro-content-bottom");
        } else {
            introContent.classList.remove("intro-content-bottom");
        }

        for (let termNum = 1; termNum <= 3; termNum++) {
            let term1 = document.getElementById("term-" + termNum.toString());
            let def1 = document.getElementById("definition-" + termNum.toString());
            if (panelNum > termNum + 0.5 && panelNum < termNum + 1.5) {
                term1.classList.add("term-active");
                def1.classList.add("definition-active");
            } else {
                term1.classList.remove("term-active");
                def1.classList.remove("definition-active");
            }
        }
    });
});
