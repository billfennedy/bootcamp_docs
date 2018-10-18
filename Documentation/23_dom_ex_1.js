var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.getElementById("first");
var p2Display = document.getElementById("second");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore =  5;

p1Button.addEventListener("click", function(){
  if (!gameOver){
    p1Score ++;
    if (p1Score === winningScore){
      gameOver = true;
      p1Display.classList.add("winner")
    }
  }
  p1Display.textContent = p1Score;
});


p2Button.addEventListener("click", function(){
  if (!gameOver){
    p2Score ++;
    if (p2Score === winningScore){
      gameOver = true;
    }
  }
  p2Display.textContent = p2Score;
});

document.getElementById("reset").addEventListener("click",function(){
  p1Score = 0;
  p2Score = 0;
  gameOver = false;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
})
