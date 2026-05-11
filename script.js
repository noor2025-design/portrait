let figureBackgrounds = document.querySelectorAll(".figure-background")

figureBackgrounds.forEach((element)=>{
element.addEventListener("click", (event)=>{
    event.currentTarget.classList.add("animate-out")
})
})