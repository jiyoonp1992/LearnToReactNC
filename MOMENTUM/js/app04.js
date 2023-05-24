const loginForm = document.getElementById("login-form");
const loginForm01 = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");


const loginInput01 = document.querySelector("#login-form input");
const loginButton02 = document.querySelector("#login-form button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginBtnClick(){
    console.dir(loginInput);
    console.log(loginInput.value);
    console.log("hello", loginInput.value);
    const username01 = loginInput.value;
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
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username01;
    // greeting.innerText = `Hello ${username01}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    //localStorage.getItem("username", username01);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



//const savedUsername = localStorage.getItem("username");
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    // greeting.innerText = `Hello ${savedUsername}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}

// const link = document.querySelector("a");

// function handleLinkClick(event){
//     console.log(event);
//     alert("clicked!");
//     event.preeventDefault();
// }

// link.addEventListener("click", handleLinkClick);