import { Dispatch, MouseEvent, SetStateAction } from 'react'

export interface IBlock {
  hasMine: boolean
  revealed: boolean
  surroundingMines: number
  flagged: boolean
}

export interface BlockProps extends IBlock {
  row: number
  col: number
}

export interface IGameState {
  Paused: boolean
  win: boolean
  Over: boolean
}

export interface IGameContext {
  col: number
  row: number
  mines: number
  gameBoard: IBlock[][]
  gameState: IGameState
  revealedBlocks: number
  totalFlagsUsed: number
  FlaggedBlocks: number
  score: number
  setCol: Dispatch<SetStateAction<number>>
  setRow: Dispatch<SetStateAction<number>>
  setMines: Dispatch<SetStateAction<number>>
  setGameBoard: Dispatch<SetStateAction<IBlock[][]>>
  setGameState: Dispatch<SetStateAction<IGameState>>
  setRevealedBlocks: Dispatch<SetStateAction<number>>
  setFlaggedBlocks: Dispatch<SetStateAction<number>>
  BlockOnClick: IBlockOnClick
  resetGame: () => void
}

export type IBlockOnClick = (
  e: MouseEvent<HTMLDivElement>,
  row: number,
  column: number,
  isLongPress?: boolean,
) => void
export type IReveal = (
  row: number,
  col: number,
  gameBoard: IBlock[][],
  setFlaggedBlocks: Dispatch<SetStateAction<number>>,
  setRevealedBlocks: Dispatch<SetStateAction<number>>,
  setScore: Dispatch<SetStateAction<number>>,
) => IBlock | void
