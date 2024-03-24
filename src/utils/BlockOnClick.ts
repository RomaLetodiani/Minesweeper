import { IBlock, IReveal } from '../components/Game/Interfaces'

const neighbors = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [1, -1],
  [0, 1],
  [1, 1],
  [1, 0],
]

const reveal: IReveal = (row, col, gameBoard, setFlaggedBlocks, setRevealedBlocks, setScore) => {
  if (row < 0 || col < 0 || row >= gameBoard.length || col >= gameBoard[row].length) {
    return
  }
  const block = gameBoard[row][col]
  if (!block.revealed) {
    setRevealedBlocks((prev) => (prev += 1))
    setScore((prev) => prev + block.surroundingMines * 5)
  }

  if (block.surroundingMines === 0 && !block.revealed && !block.hasMine) {
    block.revealed = true
    neighbors.forEach(([x, y]) =>
      reveal(row + x, col + y, gameBoard, setFlaggedBlocks, setRevealedBlocks, setScore),
    )
  }
  if (block.flagged) {
    setFlaggedBlocks((prev) => prev - 1)
    block.flagged = false
  }

  block.revealed = true

  return block
}

type IToggleFlag = (row: number, col: number, gameBoard: IBlock[][]) => IBlock

const toggleFlag: IToggleFlag = (row, col, gameBoard) => {
  const newGameBoard = [...gameBoard]
  newGameBoard[row][col] = {
    ...newGameBoard[row][col],
    flagged: !newGameBoard[row][col].flagged,
  }
  return newGameBoard[row][col]
}

export { toggleFlag, reveal }
