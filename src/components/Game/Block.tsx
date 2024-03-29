import { useEffect, useRef } from 'react'
import { useGame } from '../../Contexts/GameContext'
import useLongPress from '../../hooks/useLongPress'
import { BlockProps } from './Interfaces'

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

  // Block state logic should be done with background but i was in hurry so did it with tailwind CSS
  return (
    <div
      ref={blockRef}
      className="relative flex justify-center items-center bg-slate-950 border border-slate-800 w-[clamp(22px,5vw,28px)] h-[clamp(24px,5vw,28px)] font-extrabold"
      onContextMenu={(e) => BlockOnClick(e, row, col)}
      onClick={(e) => BlockOnClick(e, row, col, isLongPressed)}
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
        <div className="absolute select-none w-full h-full pointer-events-none bg-[#747cd5] shadow-Block z-10">
          {flagged && '🚩'}
        </div>
      )}
    </div>
  )
}

export default Block
