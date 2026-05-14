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

movementSpanElements = document.querySelectorAll(".movement figure span")

movementSpanElements.forEach((span, index)=>{
  span.addEventListener("click",(event)=>{
    let target = event.currentTarget

    let isSquare = target.classList.contains("square")
    
  if (isSquare) {
     target.classList.remove("slide-right")
    target.classList.add("slide-right")
    movementSpanElements.forEach((element, i)=>{
      if (i === index + 1) {
            element.classList.remove("slide-left")
          element.classList.add("slide-left")
      }
    })
  } else {
    target.classList.remove("slide-left")
    target.classList.add("slide-left")
    movementSpanElements.forEach((element, i)=>{
      if (i === index - 1) {
        element.classList.remove("slide-right")
          element.classList.add("slide-right")
      }
    })
  }
  })
})