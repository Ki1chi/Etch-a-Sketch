
const container = document.querySelector(".container")


for (i = 0; i < 16; i++){  
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




