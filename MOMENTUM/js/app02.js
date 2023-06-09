//document.title = "Hello! From JS!"

 const title = document.getElementById("title");
 console.log(title);
 console.dir(title);

 //title.innerText = "Got you!"

 //console.log(title.id);
// console.log(title.className);

const hellos = document.getElementsByClassName("hello");

console.log(hellos);

const title01 = document.getElementsByTagName("h1");
console.log(title01);

const title02 = document.querySelector (".hello h1");
console.log(title02);

const title03 = document.querySelectorAll (".hello h1");
console.log(title03);

const title04 = document.querySelector (".hello h1");
title04.innerText = "Hello";

const title05 = document.querySelector("div.hello:first-child h1");

console.dir(title05);

title05.style.color = "blue";

function handleTitleClick(){
    console.log("title was clicked!");
    title05.style.color = "red";
}

function handleMouseEnter(){
    console.log("Mouse is here!");
    title05.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    console.log("Mouse is gone!");
    title05.innerText = "Mouse is gone!"
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOOD!")
}

title05.addEventListener("click", handleTitleClick);
title05.onclick = handleTitleClick;
title05.addEventListener("mouseenter", handleMouseEnter);
title05.onmouseenter = handleMouseEnter;
title05.addEventListener("mouseleave", handleMouseLeave);
title05.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
