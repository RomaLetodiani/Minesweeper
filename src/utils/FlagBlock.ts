import { IFlagBlock } from '../components/Game/Interfaces'
import { RevealBlock } from './RevealBlock'

export const flagBlock: IFlagBlock = (
  e,
  gameBoard,
  setGameBoard,
  row,
  col,
  gameState,
  setGameState,
) => {
  console.log('🚀 ~ gameState:', gameState)
  e.preventDefault()
  if (gameBoard[row][col].revealed) return
  const newGameBoard = [...gameBoard]
  if (e.button === 0) {
    if (newGameBoard[row][col].flagged) return
    console.log('Left mouse button clicked')
    newGameBoard[row][col] = RevealBlock(gameBoard, row, col, setGameState)
  } else if (e.button === 2) {
    console.log('Right mouse button clicked')
    const isCurrentlyFlagged = gameBoard[row][col].flagged
    if (!isCurrentlyFlagged && gameState.flaggedBlocks < 1) {
      console.log('🚀 ~ isCurrentlyFlagged:', isCurrentlyFlagged)
      return
    }
    newGameBoard[row][col].flagged = !isCurrentlyFlagged

    setGameState((prev) => ({
      ...prev,
      flaggedBlocks: prev.flaggedBlocks + (isCurrentlyFlagged ? 1 : -1),
    }))
  }
  setGameBoard(newGameBoard)
}
