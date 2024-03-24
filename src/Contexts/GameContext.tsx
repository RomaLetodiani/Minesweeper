import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { GameBoardGenerator } from '../utils/GameBoardGeneration'
import { IBlock, IGameContext, IGameState } from '../components/Game/Interfaces'
import useCountdownTimer from '../hooks/useCountDownTimer'

const initialGameState: IGameState = {
  Running: false,
  Paused: false,
  Over: false,
  score: 0,
  revealedBlocks: 0,
  flaggedBlocks: 0,
}

// Define context
const GameContext = createContext<IGameContext | undefined>(undefined)

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [row, setRow] = useState(0)
  const [col, setCol] = useState(0)

  const [mines, setMines] = useState(0)

  const [gameBoard, setGameBoard] = useState<IBlock[][]>(GameBoardGenerator(row, col, mines))

  const [gameState, setGameState] = useState(initialGameState)

  // const { seconds } = useCountdownTimer(1000)

  useEffect(() => {
    setGameBoard(GameBoardGenerator(row, col, mines))
    setGameState(initialGameState)
  }, [row, col, mines])

  const contextValues = {
    col,
    row,
    mines,
    gameBoard,
    gameState,
    setCol,
    setRow,
    setMines,
    setGameBoard,
    setGameState,
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
