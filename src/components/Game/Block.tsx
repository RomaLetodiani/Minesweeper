import { useEffect, useRef } from 'react'
import { useGame } from '../../Contexts/GameContext'
import useLongPress from '../../hooks/useLongPress'
import { BlockProps } from './Interfaces'
import { useParams } from 'react-router-dom'

const mines = [
  '',
  'text-mines-1',
  'text-mines-2',
  'text-mines-3',
  'text-mines-4',
  'text-mines-5',
  'text-mines-6',
  'text-mines-7',
  'text-mines-8',
]
const Block = ({ hasMine, revealed, surroundingMines, flagged, row, col }: BlockProps) => {
  const blockRef = useRef<HTMLDivElement>(null)

  const isLongPressed = useLongPress(blockRef)
  useEffect(() => {
    if (isLongPressed) {
      // Trigger right-click functionality
      blockRef.current?.click()
    }
  }, [isLongPressed])
  const { BlockOnClick } = useGame()
  const { mode } = useParams()

  // Block state logic should be done with background but i was in hurry so did it with tailwind CSS
  return (
    <div
      ref={blockRef}
      className="relative flex justify-center items-center bg-slate-950 border border-sky-600 w-[clamp(22px,5vw,28px)] h-[clamp(24px,5vw,28px)] font-extrabold"
      onContextMenu={(e) => BlockOnClick(e, row, col, mode)}
      onClick={(e) => BlockOnClick(e, row, col, mode, isLongPressed)}
    >
      <span className="select-none">
        {hasMine && revealed ? (
          '💥'
        ) : hasMine ? (
          '💣'
        ) : (
          <span className={`${!surroundingMines && 'opacity-0'} ${mines[surroundingMines]}`}>
            {surroundingMines}
          </span>
        )}
      </span>
      {!revealed && (
        <div className="absolute select-none w-full h-full pointer-events-none bg-cyan-950 shadow-Block z-10">
          {flagged && '🚩'}
        </div>
      )}
    </div>
  )
}

export default Block
