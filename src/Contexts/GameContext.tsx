import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { GameBoardGenerator } from '../utils/GameBoardGeneration'
import { IBlock, IBlockOnClick, IGameContext, IGameState } from '../components/Game/Interfaces'
import { reveal, toggleFlag } from '../utils/BlockOnClick'

const initialGameState: IGameState = {
  Paused: false,
  win: false,
  Over: false,
}

// Define context
const GameContext = createContext<IGameContext | undefined>(undefined)

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [row, setRow] = useState(0)
  const [col, setCol] = useState(0)

  const [mines, setMines] = useState(0)
  const [score, setScore] = useState(0)
  const [revealedBlocks, setRevealedBlocks] = useState(1)
  const [FlaggedBlocks, setFlaggedBlocks] = useState(0)
  const [totalFlagsUsed, setTotalFlagsUsed] = useState(0)
  console.log('🚀 ~ GameProvider ~ totalFlagsUsed:', totalFlagsUsed)

  const [gameBoard, setGameBoard] = useState<IBlock[][]>(GameBoardGenerator(row, col, mines))

  const [gameState, setGameState] = useState(initialGameState)

  useEffect(() => {
    setRevealedBlocks(1)
    setFlaggedBlocks(0)
    setGameBoard(GameBoardGenerator(row, col, mines))
    setGameState(initialGameState)
  }, [row, col, mines])

  const BlockOnClick: IBlockOnClick = (e, x, y) => {
    e.preventDefault()
    if (gameBoard[x][y].revealed) return
    const newGameBoard = [...gameBoard]

    if (e.button === 0) {
      console.log('Left mouse button clicked')
      if (newGameBoard[x][y].flagged) return
      newGameBoard[x][y] =
        reveal(x, y, gameBoard, setFlaggedBlocks, setRevealedBlocks, setScore) || newGameBoard[x][y]

      if (newGameBoard[x][y].hasMine) {
        setGameState((prev) => ({ ...prev, Over: true }))
      }

      console.log('Row', row * col - mines, revealedBlocks)
      if (row * col - mines === revealedBlocks) {
        setGameState((prev) => ({ ...prev, win: true }))
      }
    }

    if (e.button === 2) {
      console.log('Right mouse button clicked')
      if (!gameBoard[x][y].flagged && FlaggedBlocks >= mines) return
      if (newGameBoard[x][y].flagged) {
        setFlaggedBlocks((prev) => prev - 1)
      } else {
        setTotalFlagsUsed((prev) => prev + 1)
        setFlaggedBlocks((prev) => prev + 1)
      }
      newGameBoard[x][y] = toggleFlag(x, y, gameBoard)
    }

    setGameBoard(newGameBoard)
  }

  const resetGame = () => {
    setRevealedBlocks(1)
    setFlaggedBlocks(0)
    setGameBoard(GameBoardGenerator(row, col, mines))
    setGameState(initialGameState)
  }

  const contextValues = {
    col,
    row,
    mines,
    gameBoard,
    gameState,
    revealedBlocks,
    totalFlagsUsed,
    FlaggedBlocks,
    score,
    setCol,
    setRow,
    setMines,
    setGameBoard,
    setGameState,
    setRevealedBlocks,
    setFlaggedBlocks,
    BlockOnClick,
    resetGame,
  }

  return <GameContext.Provider value={contextValues}>{children}</GameContext.Provider>
}

export const useGame = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider')
  }
  return context
}
