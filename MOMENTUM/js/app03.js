const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     if(h1.style.color === "blue"){
//         h1.style.color = "tomaot";
//     } else {
//         h1.style.color = "blue";
//     }
//     console.log("title was clicked!");
//     title05.style.color = "red";
// }


// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomaot";
//     } else {
//         newColor = "blue";
//     }
//     console.log("title was clicked!");
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

function handleTitleClick(){
    //h1.className = "active";
    const activeClass = "active";
    // if(h1.className === activeClass){
    //     h1.className = "";
    // } else {
    //     h1.className = activeClass;
    // }

    // if(h1.classList.contains(activeClass)){
    //     h1.classList.remove(activeClass);
    // } else {
    //     h1.classList.add(activeClass);
    // }

    h1.classList.toggle(activeClass);
}

h1.addEventListener("click", handleTitleClick);