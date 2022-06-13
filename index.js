function updateCardOnDeckLength() {
    let numb = document.querySelector("#main-div").childElementCount;
    document.querySelector(".demo").innerHTML = numb;
}
document.onreadystatechange = ((ev) => {
    updateCardOnDeckLength()
})

// function  addimg() {
//     let newimg = document.createElement()
//     document.querySelector(".grid-container").appendChild(newimg)

// }



document.querySelectorAll(".childrendiv").forEach(el =>
    el.addEventListener('click', (event) => {
        el.classList.add('childrendivv')
        setTimeout(() => {
            el.remove()
            updateCardOnDeckLength()
            addToGrid(el)
        }, 1000);

    }))

function addToGrid(element) {
    const source = (element.querySelector("img").getAttribute('src'))
    const gridItem = document.createElement("div")
    gridItem.className = "grid-item"
    const img = document.createElement("img")
    img.src = source
    gridItem.appendChild(img)
    document.querySelector("#grid-container").appendChild(gridItem)
    numOfImgInGrid()
} 

function numOfImgInGrid() {
    let numb2 = document.querySelector("#grid-container").childElementCount;
    document.querySelector(".demo2").innerHTML = numb2;
 
}
     