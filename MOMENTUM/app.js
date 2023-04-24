//alert("hi");
console.log(54545454);
console.log("54545454");
console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

const a = 5;
const b = 2;
let myName = "jiyoon";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("Hello " + myName);

myName = jiyoonPark;

console.log("your new name is " + myName);

const amIFat = true;
let something;

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri","sat"];


//Get Item from Array
console.log(daysOfWeek);
console.log(daysOfWeek[5]);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit"; 

//const player = ["nico", 1212, false, "little bit"];

//object

const player = {
    name:"nico",
    points:10,
    fat:true ,
};
console.log(player);
player.lastName = "potato";
console.log(player);

// function sayHello(){
//     console.log("Hello my name is");
// }
function sayHello(nameOfPerson, age){
    console.log("Hello my name is" + nameOfPerson + " and I'm" + age);
}


sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

// function plus(a,b){
//     console.log(a+b);
// }

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}
function divide(a,b){
    console.log(a / b);
}

plus(5,5); 
divide(98,20);

const player01 = {
    name : "nico",
    sayHello02 : function(otherPersonsName) {
        console.log("hello! " + otherPersonsName + " nice to meet you!");
    },
};
console.log(player01.name);
player01.sayHello02("lynn");

const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);
toBuy.push("meat");
console.log(toBuy);

const calculator = {
    add : function (a, b){
        console.log(a,b);
    },

    minus: function (a, b) {
        console.log(a - b);
    },

    times: function (a, b) {
        console.log(a * b);
    },

    divide: function (a, b) {
        console.log (a / b);
    },

    power: function (a, b) {
        console.log (a ** b);
    }
};

calculator.add(5,1);

const age = 90;

function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);
