// Setting up State
const choices = document.querySelectorAll('choice');


let state ={
  choice: ["ROCK","PAPER","SCISSORS"],
  winner: false,
};


//Setting up score
const score = document.querySelector('.score');

// Setting up HTML Strings input


// Rendering Choice
function renderChoice() {
  let choicesHtml = "";
  state.choice.forEach(function (choice, index) {
    choicesHtml += `<button class='choice' onclick='handleChoiceClicked(${index})'>${choice}</button>`;
  });
  return choicesHtml;
}

function gameStart(){
  const {winner} =state;
  if (winner) {
      return `You Won!`
  } else {
      return `Select your Option below!`
  }
}


for ( let i = 0 ; i < choices.length ; i++){
  choices[i].addEventListener('click', );
}





// Render
function render() {
  let htmlStr = `
    <div>
      <h1>Rock Paper Scissors</h1>
      <div class="message">
      ${gameStart()}
      </div>
      <br>
      <div class="choice">
        ${renderChoice()}
      </div>
    </div>
  
  `;
  document.getElementById("app").innerHTML = htmlStr;
}

render();