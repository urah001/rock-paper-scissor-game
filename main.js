alert("READ THIS \n rock paper scissor is a game played by two or more people ,in theory, the game has 3 outcomes: a win, loss, or tie. Rock defeats scissors, scissors defeats paper, and paper defeats rock,    The rock is a closed fist; paper is a flat hand with fingers and thumb extended and the palm facing downward; and scissors is a fist with the index and middle fingers fully extended toward the opposing player. Rock wins against scissors; paper wins against rock; and scissors wins against paper.")
alert("due to somethings , i'll like you to call the 'rock , paper, scissor' yourself, cause the bot is always ready to beat you , start by picking an outcome  the bot will also pick it own outcome , then the official with evaluate it and give the result . if you first the bot to score ten point ,you win , but if the bot first you, then you lose . click any image to begin and continue")

let rockImg = "rock.png";
let paperImg = "paper.png";
let scissorImg = "scissor.png";
let botImg = "botPaper.png"

function botRandomValueCalculation() {
  botRandomNumber = Math.floor((Math.random() * (4 - 1)) + 1)
  switch (botRandomNumber) {
    case 1:
      document.getElementById("writeBotValue").innerHTML = "bot : rock";
      document.getElementById("showBotImg").src = rockImg;
      break;

    case 2:
      document.getElementById("writeBotValue").innerHTML = "bot : paper";
      document.getElementById("showBotImg").src = botImg;
      break;

    case 3:
      document.getElementById("writeBotValue").innerHTML = "bot : scissor";
      document.getElementById("showBotImg").src = scissorImg;
      break;

  }

}

function rock() {
  botRandomValueCalculation();
  document.getElementById("showPlayerImg").src = rockImg;

  switch (botRandomNumber) {
    case 1:
      document.getElementById("writeWinner").innerHTML = "tie";
      break;

    case 2:

      document.getElementById("writeWinner").innerHTML = "bot win";
      recordBotScore();
      break;

    case 3:

      document.getElementById("writeWinner").innerHTML = "player win";
      recordPlayerScore();
      break;

  }

  document.getElementById("writePlayerValue").innerHTML = "player : rock";

}


function paper() {

  document.getElementById("showPlayerImg").src = paperImg;
  botRandomValueCalculation();

  switch (botRandomNumber) {
    case 1:

      document.getElementById("writeWinner").innerHTML = "player win";
      recordPlayerScore();
      break;

    case 2:

      document.getElementById("writeWinner").innerHTML = "tie";
      break;

    case 3:
      document.getElementById("writeWinner").innerHTML = "bot win";
      recordBotScore();
      break;

  }

  document.getElementById("writePlayerValue").innerHTML = "player : paper";

}




function scissor() {
  botRandomValueCalculation();
  document.getElementById("showPlayerImg").src = scissorImg;


  switch (botRandomNumber) {
    case 1:

      document.getElementById("writeWinner").innerHTML = "bot win";
      recordBotScore();
      break;

    case 2:

      document.getElementById("writeWinner").innerHTML = "player win";
      recordPlayerScore();
      break;

    case 3:

      document.getElementById("writeWinner").innerHTML = "tie";
      break;

  }
  document.getElementById("writePlayerValue").innerHTML = "player : scissor" /*scissorValue*/ ;
}
let botScore = 0;
let playerScore = 0;

function recordBotScore() {
  botScore += 1;
  document.getElementById("writeBotScore").innerHTML = botScore;

  if ((botScore === 10) && (playerScore < 10)) {

    window.open("botWinner.html")

  }
}

function recordPlayerScore() {
  playerScore += 1;
  document.getElementById("writePlayerScore").innerHTML = playerScore;
  /*if ((botScore < 5) && (playerScore > 5)) {
    botRandomNumber
  }*/

  if ((playerScore === 10) && (botScore < 10)) {
    let confirmMessage = confirm("would you like to drop a line for the bot ?");
    if (confirmMessage === true) {
      let promptMessage = prompt("what your message..");
      if (promptMessage === ' ') {
        alert("you did not write anything")
        location.reload();
      }
      else {
        alert("i pretty sure the bot will get your message : " + promptMessage)
        location.reload();
      }
    }
    else {
      alert("good game ....")
      location.reload()
    }
  }

}
