export const GameBoardGenerator = (row: number, col: number, mines: number) => {
  // Initialize the game board
  const initialBoard = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => ({
      hasMine: false,
      revealed: false,
      surroundingMines: 0,
      flagged: false,
    })),
  )
  if (!row || !col) return initialBoard

  if (row <= 0 || col <= 0 || mines < 0 || mines > row * col) {
    return initialBoard
  }

  // Place mines randomly
  let minesPlaced = 0
  while (minesPlaced < mines) {
    const randomRow = Math.floor(Math.random() * row)
    const randomCol = Math.floor(Math.random() * col)
    if (!initialBoard[randomRow][randomCol].hasMine) {
      initialBoard[randomRow][randomCol].hasMine = true
      minesPlaced++

      // Update neighbor mine counts
      for (let i = Math.max(0, randomRow - 1); i <= Math.min(row - 1, randomRow + 1); i++) {
        for (let j = Math.max(0, randomCol - 1); j <= Math.min(col - 1, randomCol + 1); j++) {
          if (!(i === randomRow && j === randomCol) && !initialBoard[i][j].hasMine) {
            initialBoard[i][j].surroundingMines++
          }
        }
      }
    }
  }

  return initialBoard
}
