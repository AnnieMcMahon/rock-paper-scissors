//Variables
let userScore = 0;
let computerScore = 0;

//Elements
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const reset_btn = document.getElementById('reset-btn');

//Functions
const getComputerChoice = () => {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const convertToWord = letter => {
  if (letter === 'r') return "Rock";
  if (letter === 'p') return "Paper";
  return "Scissors";
};

const win = (user, computer) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You win! 🔥`;
  document.getElementById(user).classList.add('green-glow');
  setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 1000);
};

const lose = (user, computer) => {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)} loses to ${convertToWord(computer)}. You lose! 💩`;
  document.getElementById(user).classList.add('red-glow');
  setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 1000);
};

const draw = (user, computer) => {
  result_p.innerHTML = `${convertToWord(user)} and ${convertToWord(computer)}: It's a draw! 🤷`;
  document.getElementById(user).classList.add('yellow-glow');
  setTimeout(() => document.getElementById(user).classList.remove('yellow-glow'), 1000);
};

const game = userChoice => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'sr':
    case 'rp':
    case 'ps':
      lose(userChoice, computerChoice);
      break;
    case 'ss':
    case 'pp':
    case 'rr':
      draw(userChoice, computerChoice);
  };
};

const reset = () => {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = 'Let the game begin!';
};

const main = () => {
  rock_div.addEventListener('click', () => game('r'));
  paper_div.addEventListener('click', () => game('p'));
  scissors_div.addEventListener('click', () => game('s'));
  reset_btn.addEventListener('click', () => reset());
};

main();

