const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


const loginInput01 = document.querySelector("#login-form input");
const loginButton02 = document.querySelector("#login-form button");

function onLoginBtnClick(){
    console.dir(loginInput);
    console.log(loginInput.value);
    console.log("hello", loginInput.value);
    const username = loginInput.value;
    if(username == ""){
        alert("Please write your name");
    } else if(username.length > 15){
        alert("Your name is too long.")
    }
    //or form에서 수정
}

loginButton.addEventListener("click", onLoginBtnClick);
