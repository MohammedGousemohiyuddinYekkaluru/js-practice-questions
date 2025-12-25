//Rock, Paper and Scissor 

function rps(user_1, user_2){
    if(user_1 === user_2) return "Draw";

    if(user_1 === "rock" && user_2 === "scissor") return "user_1";
    if(user_1 === "paper" && user_2 === "rock") return "user_1";
    if(user_1 === "scissor" && user_2 === "paper") return "user_1";
    
    return "user_2";
}

console.log(rps("rock", "scissor"))