document.addEventListener("DOMContentLoaded", function() {
    let mainContainer = document.getElementById("main-container");
    let vh = window.innerHeight;
    mainContainer.addEventListener("scroll", (e) => {
        let panelNum = mainContainer.scrollTop / vh;
        if (panelNum % 2 > 1.5 || panelNum % 2 < 0.5) {
            mainContainer.classList.remove("rotate-sect");
        } else {
            mainContainer.classList.add("rotate-sect");
        }

        let graphPanels = [4, 7, 8, 11, 14, 15];
        let needPanel = false;
        for (let i = 0; i < graphPanels.length; i++) {
            const panel = graphPanels[i];
            if (panelNum > panel - 1.5 && panelNum < panel - 0.5) {
                needPanel = true;
                break;
            }
        }
        if (needPanel) {
            mainContainer.classList.add("graph-sect");
        } else {
            mainContainer.classList.remove("graph-sect");
        }
    });
});

function quoteButton(groupID, direction, max) {
    let active = document.querySelector("#anecdotes-" + groupID.toString() + " .quote-active");
    active.classList.remove("quote-active");
    let nextID = parseInt(active.id.toString().slice(-1)) + direction;
    if (nextID == 0) {
        nextID = max;
    } else if (nextID > max) {
        nextID = 1;
    }
    let next = document.getElementById("quote-" + groupID.toString() + "-" + nextID.toString());
    next.classList.add("quote-active");
}