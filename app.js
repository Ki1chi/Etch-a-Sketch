
const container = document.querySelector(".container")
const clear = document.querySelector("#clear")
const black = document.querySelector("#black")
const random = document.querySelector("#random")
const eraser = document.querySelector("#eraser")
const submit = document.querySelector("#submit")
let gridSize = document.querySelector("#input")


console.log("asdqweq")



for (i = 0; i < 64; i++){  
    const div = document.createElement("div");
    container.append(div);
    div.classList.add('items');
    div.classList.add('manyDivs');
}

function removeAllChildNodes(parent){
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}
function returnText(){
    removeAllChildNodes(container);
    let input = document.getElementById("userInput").value;
    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${input}, 1fr)`;
    for (i = 0; i < input ** 2; i++){
        const div = document.createElement("div");
        container.append(div);
        div.classList.add('items');
        div.classList.add('manyDivs');
}
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
            let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
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


