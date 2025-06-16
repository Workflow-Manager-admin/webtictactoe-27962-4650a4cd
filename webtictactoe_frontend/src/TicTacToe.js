import React, { useState } from "react";
import "./TicTacToe.css";

// PUBLIC_INTERFACE
function TicTacToe() {
  /**
   * Main container for the WebTicTacToe game.
   * Handles board rendering, player moves, and game status.
   * Light, modern, minimalistic style.
   */

  // State for a 3x3 board (9 squares, null | "X" | "O")
  const [board, setBoard] = useState(Array(9).fill(null));
  // State for which player's turn ("X" or "O")
  const [xIsNext, setXIsNext] = useState(true);
  // State for the winner ("X" | "O" | "Draw" | null)
  const winner = calculateWinner(board);

  // Handler for a cell click
  // PUBLIC_INTERFACE
  function handleCellClick(index) {
    if (board[index] || winner) return; // Ignore if already filled or game ended
    const nextBoard = board.slice();
    nextBoard[index] = xIsNext ? "X" : "O";
    setBoard(nextBoard);
    setXIsNext(!xIsNext);
  }

  // PUBLIC_INTERFACE
  function resetGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  // Game status UI string
  let status;
  if (winner === "Draw") {
    status = "It's a draw!";
  } else if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  // PUBLIC_INTERFACE
  function renderCell(i) {
    return (
      <button
        className="ttt-cell"
        onClick={() => handleCellClick(i)}
        aria-label={`cell ${i + 1}`}
        style={{
          color: board[i] === "X" ? "var(--primary-color)" : board[i] === "O" ? "var(--accent-color)" : "#222"
        }}
      >
        {board[i]}
      </button>
    );
  }

  return (
    <div className="ttt-main-container">
      <h2 className="ttt-title">Tic Tac Toe</h2>
      <div className="ttt-status">{status}</div>
      <div className="ttt-board">
        {[0, 1, 2].map((row) => (
          <div className="ttt-row" key={row}>
            {renderCell(row * 3)}
            {renderCell(row * 3 + 1)}
            {renderCell(row * 3 + 2)}
          </div>
        ))}
      </div>
      {(winner || board.every((cell) => cell)) && (
        <button className="ttt-reset-btn" onClick={resetGame}>
          Reset Game
        </button>
      )}
    </div>
  );
}

// Pure util: checks for a game winner.
// PUBLIC_INTERFACE
function calculateWinner(squares) {
  /** Returns "X", "O", "Draw", or null */
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  if (squares.every((cell) => cell)) return "Draw";
  return null;
}

export default TicTacToe;
