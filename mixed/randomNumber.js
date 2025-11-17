//Generate a number between 0 to 18

function getRandonNumber(){
    return Math.floor(Math.random() * 19);
}

let randonNum = getRandonNumber();
console.log(randonNum);


//Random numbers between min and max (including both)

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(10, 20))