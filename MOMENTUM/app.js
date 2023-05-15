const loginForm = document.getElementById("login-form");
const loginForm01 = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");


const loginInput01 = document.querySelector("#login-form input");
const loginButton02 = document.querySelector("#login-form button");

const HIDDEN_CLASSNAME = "hidden";

function onLoginBtnClick(){
    console.dir(loginInput);
    console.log(loginInput.value);
    console.log("hello", loginInput.value);
    const username = loginInput.value;
    console.log(username);
    // if(username == ""){
    //     alert("Please write your name");
    // } else if(username.length > 15){
    //     alert("Your name is too long.")
    // }
    //or form에서 수정
}

//loginButton.addEventListener("click", onLoginBtnClick);


function onLoginSubmit(event){
    event.preventDefault();
    loginForm01.classList.add(HIDDEN_CLASSNAME);
    const username01 = loginInput.value;
    greeting.innerText = "Hello " + username01;
    greeting.innerText = `Hello ${username01}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.getItem("username", username01);
}

loginForm.addEventListener("submit", onLoginSubmit);

// const link = document.querySelector("a");

// function handleLinkClick(event){
//     console.log(event);
//     alert("clicked!");
//     event.preeventDefault();
// }

// link.addEventListener("click", handleLinkClick);