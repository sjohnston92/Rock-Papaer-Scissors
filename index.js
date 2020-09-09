// Setting up State
const choices = document.querySelectorAll('choice');


let state ={
  choice: ["ROCK","PAPER","SCISSORS"],
  winner: false,
  loser: false,
  draw: false,
};


//Setting up score
const score = document.querySelector('.score');

// Setting up HTML Strings input


// Rendering Choice
function renderChoice() {
  let choicesHtml = "";
  state.choice.forEach(function (choice, index) {
    choicesHtml += `<button class='choice' onclick='choiceClicked(${index})'>${choice}</button>`;
  });
  return choicesHtml;
}

// Clicked options

function choiceClicked(index){
  state.index=index
  computerindex = computerSelect()
  state.computerindex=computerindex
  compareOptions(index,computerindex)

}


function compareOptions(playeri,computeri){
  console.log('playeri :>> ', playeri);
  console.log('computeri :>> ', computeri);
  
      if (playeri === computeri) {
          state.tie = true
          render();
      } else if ((playeri == '0' && computeri == '2')|| 
      (playeri == '1' && computeri == '0')||
      (playeri == '2' && computeri == '1')) {
          state.winner = true
          render();
      } else {
          state.loser=true
          render();
      }
  }









//comp rand choice
function computerSelect(){
  return Math.floor(Math.random()*3)
  }


// winning , looser draw, prompt.
function gameStart(){
      const {winner, loser, tie} = state;
      if (winner) {
          state.winner = false
          state.winnercounter++
          return `You have won! <br> <br>`
      } else if (loser){
          state.loser = false
          state.losercounter++
          return `you lost!<br><br>`
      } else if (tie){
          state.tie = false
          state.drawcounter++
          return `Tie! The computer selected the same option as you do!<br><br>`
      } else {
          return `Please select your option!`
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