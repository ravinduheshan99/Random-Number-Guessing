let random = Math.floor((Math.random()*10)+1);
console.log(random);

let hint = document.getElementById("hint");
let message = document.getElementById("message");

let count=3;

function guessFu(){
  let input = document.getElementById("guess").value;
  console.log(input);
  if(random==input){
    alert("You Win!");
    newGame();
  }else{
    count--;
    if(random>input){
      hint.innerHTML = "The Random Number is Greater Than Your Input Number";
    }else{
      hint.innerHTML = "The Random Number is Less Than Your Input Number"; 
    }
    message.innerHTML = "You Have "+count+" Chances to Guess";
  }

  if(count==0){
    alert("You are Loss");
    newGame();
  }

  document.getElementById("guess").value="";
}

function newGame(){
  location.reload();
}