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


function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomaot";
    } else {
        newColor = "blue";
    }
    console.log("title was clicked!");
    h1.style.color = newColor;
}

title05.addEventListener("click", handleTitleClick);