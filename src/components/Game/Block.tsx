import { useGame } from '../../Contexts/GameContext'
import { flagBlock } from '../../utils/FlagBlock'
import { BlockProps } from './Interfaces'

const Block = ({ hasMine, revealed, surroundingMines, flagged, row, col }: BlockProps) => {
  const { gameBoard, setGameBoard, gameState, setGameState } = useGame()
  return (
    <div
      className="relative flex justify-center items-center border border-slate-800 w-[clamp(20px,5vw,24px)] h-[clamp(20px,5vw,24px)] font-extrabold"
      onContextMenu={(e) =>
        flagBlock(e, gameBoard, setGameBoard, row, col, gameState, setGameState)
      }
      onClick={(e) => flagBlock(e, gameBoard, setGameBoard, row, col, gameState, setGameState)}
    >
      <span className=" select-none">
        {hasMine && revealed ? (
          '💥'
        ) : hasMine ? (
          '💣'
        ) : (
          <span className={`${!surroundingMines && 'opacity-0'}`}>{surroundingMines}</span>
        )}
      </span>
      {!revealed && (
        <div className="absolute select-none w-full h-full pointer-events-none bg-[#e0e0e0] shadow-Block z-10">
          {flagged && '🚩'}
        </div>
      )}
    </div>
  )
}

export default Block
