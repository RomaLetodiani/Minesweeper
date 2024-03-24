import { IRevealBlock } from '../components/Game/Interfaces'

export const RevealBlock: IRevealBlock = (gameBoard, row, col, setGameState) => {
  const revealedBlock = gameBoard[row][col]
  revealedBlock.revealed = !revealedBlock.revealed
  if (revealedBlock.hasMine) {
    setGameState((prev) => ({
      ...prev,
      Over: true,
    }))
    return revealedBlock
  }
  if (revealedBlock.surroundingMines) {
    setGameState((prev) => ({
      ...prev,
      score: prev.score + revealedBlock.surroundingMines * 5,
      revealedBlocks: prev.revealedBlocks + 1,
    }))
  }
  return revealedBlock
}
