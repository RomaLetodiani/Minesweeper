import { Dispatch, MouseEvent, SetStateAction } from 'react'

export interface IBlock {
  hasMine: boolean
  revealed: boolean
  surroundingMines: number
  flagged: boolean
}

export interface IGameState {
  Running: boolean
  Paused: boolean
  Over: boolean
  score: number
  revealedBlocks: number
  flaggedBlocks: number
}

export interface BlockProps extends IBlock {
  row: number
  col: number
}

export interface IGameContext {
  col: number
  row: number
  mines: number
  gameBoard: IBlock[][]
  gameState: IGameState
  setCol: Dispatch<SetStateAction<number>>
  setRow: Dispatch<SetStateAction<number>>
  setMines: Dispatch<SetStateAction<number>>
  setGameBoard: Dispatch<SetStateAction<IBlock[][]>>
  setGameState: Dispatch<SetStateAction<IGameState>>
}

export type IFlagBlock = (
  e: MouseEvent<HTMLDivElement>,
  gameBoard: IBlock[][],
  setGameBoard: Dispatch<SetStateAction<IBlock[][]>>,
  row: number,
  col: number,
  gameState: IGameState,
  setGameState: Dispatch<SetStateAction<IGameState>>,
) => void

export type IRevealBlock = (
  gameBoard: IBlock[][],
  row: number,
  col: number,
  setGameState: Dispatch<SetStateAction<IGameState>>,
) => IBlock
