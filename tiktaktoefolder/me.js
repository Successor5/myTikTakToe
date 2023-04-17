const board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('click', () => {
    if (square.textContent === '') {
      square.textContent = currentPlayer;
      board[square.id.slice(-1)] = currentPlayer;
      if (checkWin()) {
        announceWinner(`${currentPlayer} wins!`);
        resetGame();
      } else if (!board.includes('')) {
        announceWinner("It's a tie!");
        resetGame();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
});

function checkWin() {
  const winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let combination of winCombinations) {
    if (board[combination[0]] !== '' && board[combinatison[0]] === board[combination[1]] && board[combination[1]] === board[combination[2]]) {
      return true;
    }
  }
  return false;
}

function announceWinner(message) {
  alert(message);
}

function resetGame() {
  squares.forEach((square) => {
    square.textContent = '';
  });
  board.fill('');
  currentPlayer = 'X';
}
const playButton = document.querySelector('.play');
const exitButton = document.querySelector('.exit');
const gameDiv = document.querySelector('.game');

playButton.addEventListener('click', () => {
  gameDiv.classList.remove('hidden');
});

exitButton.addEventListener('click', () => {
  gameDiv.classList.add('hidden');
});
