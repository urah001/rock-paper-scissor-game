
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
