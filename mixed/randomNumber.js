//Generate a number between 0 to 18

function getRandonNumber(){
    return Math.floor(Math.random() * 19);
}

let randonNum = getRandonNumber();
console.log(randonNum);