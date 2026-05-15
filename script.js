let motionFigureElements = document.querySelectorAll(".motion figure");

motionFigureElements.forEach((element) => {
    element.addEventListener("click", (event) => {
     let figureBackgrounds = document.querySelectorAll(".figure-background");
    let figureElement = event.currentTarget;
    //  currentTarget to get the exact figure that was being clicked
    let figureBackground = figureElement.querySelector(".figure-background");
    // targeted figureElement instead of the document so that I only search inside the clicked figure

    // .contains used to check if the animate class is already on the figure before doing anything 
    let isActive = figureBackground.classList.contains("animate")
    // removed animate class from all figures before adding it back so only the clicked one is active
    figureBackgrounds.forEach((element) => element.classList.remove("animate"));
    if (!isActive) {
        figureBackground.classList.add("animate")
    }
  });
});

movementSpanElements = document.querySelectorAll(".movement figure span")
// index starts at 0 and follows each spans position and needed to know each spans position so I could target the one next to it using index + 1 or index -1
movementSpanElements.forEach((span, index)=>{
  span.addEventListener("click",(event)=>{
    let target = event.currentTarget

    let isSquare = target.classList.contains("square")
    // I used .contains to check if the clicked span is a square or circle so I know which animation to apply 
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