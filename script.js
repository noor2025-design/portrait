let figureElements = document.querySelectorAll(".motion figure");
let figureBackgrounds = document.querySelectorAll(".figure-background");

figureElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    let figureElement = event.currentTarget;
    let figureBackground = figureElement.querySelector(".figure-background");
    let isActive = figureBackground.classList.contains("animate")
    figureBackgrounds.forEach((element) => element.classList.remove("animate"));
    if (!isActive) {
        figureBackground.classList.add("animate")
    }
  });
});
