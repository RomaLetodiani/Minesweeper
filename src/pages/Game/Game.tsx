import Row from '../../components/Game/Row'
import { useParams } from 'react-router-dom'
import { useGame } from '../../Contexts/GameContext'
import { useEffect } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'

const Game = () => {
  const { mode } = useParams()
  const isDesktop = useMediaQuery('(min-width: 1025px)')
  const { gameBoard, setRow, setCol, setMines } = useGame()

  useEffect(() => {
    setRow(() => {
      return mode === 'easy' ? 9 : isDesktop || mode === 'intermediate' ? 15 : 40
    })
    setCol(() => {
      return mode === 'easy' ? 9 : isDesktop && mode === 'expert' ? 40 : 15
    })
    setMines(() => {
      return mode === 'easy' ? 10 : mode === 'intermediate' ? 40 : 99
    })
  }, [isDesktop])

  // easy 9x9
  // intermediate 15x15
  // expert 40x15

  return (
    <div className="flex bg-[#1c1c1c] justify-center items-center flex-1 p-5">
      <div
        className={`shadow-[0px_0px_20px_-5px_#ffffffff] overflow-hidden rounded-xl border border-slate-800 `}
      >
        {gameBoard?.map((r, index) => (
          <Row key={index} Blocks={r} row={index} />
        ))}
      </div>
    </div>
  )
}

export default Game
