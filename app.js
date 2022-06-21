
const container = document.querySelector(".container")
const clear = document.querySelector("#clear")
const black = document.querySelector("#black")
const random = document.querySelector("#random")
const eraser = document.querySelector("#eraser")

for (i = 0; i < 144; i++){  
    const div = document.createElement("div")
    container.append(div);
    div.classList.add('items');
    div.classList.add('manyDivs')
}

document.querySelectorAll(".manyDivs").forEach(item =>{
    item.addEventListener("mouseover", function(){
        item.style.backgroundColor = "black";
    })
})


clear.addEventListener("click", function clearBoard(){
    document.querySelectorAll(".manyDivs").forEach(item =>{
        item.style.backgroundColor = "white";
    })
})

black.addEventListener("click", function toBlack(){
    document.querySelectorAll(".manyDivs").forEach(item =>{
        item.addEventListener("mouseover", function(){
            item.style.backgroundColor = "black";
        })
    })
})
random.addEventListener("click", function toRandom(){
    document.querySelectorAll(".manyDivs").forEach(item =>{
        item.addEventListener("mouseover", function(){
            let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
            item.style.backgroundColor = randomColor;
        })
    })
})

eraser.addEventListener("click", function toWhite(){
    document.querySelectorAll(".manyDivs").forEach(item =>{
        item.addEventListener("mouseover", function(){
            item.style.backgroundColor = "white";
        })
    })
})


