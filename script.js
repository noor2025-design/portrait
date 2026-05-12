let motionFigureElements = document.querySelectorAll(".motion figure");

motionFigureElements.forEach((element) => {
    element.addEventListener("click", (event) => {
     let figureBackgrounds = document.querySelectorAll(".figure-background");
    let figureElement = event.currentTarget;
    let figureBackground = figureElement.querySelector(".figure-background");
    let isActive = figureBackground.classList.contains("animate")
    figureBackgrounds.forEach((element) => element.classList.remove("animate"));
    if (!isActive) {
        figureBackground.classList.add("animate")
    }
  });
});

movementFigureElements = document.querySelectorAll(".movement figure")
