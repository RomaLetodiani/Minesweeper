import Row from '../../components/Game/Row'
import { useParams } from 'react-router-dom'
import { useGame } from '../../Contexts/GameContext'
import { useEffect } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'

const Game = () => {
  const { mode } = useParams()
  const isDesktop = useMediaQuery('(min-width: 1025px)')
  const { gameBoard, row, col, setRow, setCol, setMines } = useGame()

  // Generate random rows and cols for random mode
  const generateRandomDimensions = () => {
    const minRows = 9
    const maxRows = isDesktop ? 15 : 40
    const minCols = 9
    const maxCols = isDesktop ? 40 : 15

    setRow(Math.floor(Math.random() * (maxRows - minRows + 1)) + minRows)
    setCol(Math.floor(Math.random() * (maxCols - minCols + 1)) + minCols)
  }

  useEffect(() => {
    if (mode === 'random') {
      generateRandomDimensions()
    } else {
      setRow(() => {
        return mode === 'easy' ? 9 : isDesktop || mode === 'intermediate' ? 15 : 40
      })
      setCol(() => {
        return mode === 'easy' ? 9 : isDesktop && mode === 'expert' ? 40 : 15
      })
      setMines(() => {
        return mode === 'easy' ? 10 : mode === 'intermediate' ? 40 : 99
      })
    }
  }, [isDesktop])

  // Logic for setting mines based on difficulty or random mode
  useEffect(() => {
    if (mode === 'random') {
      const totalCells = row * col
      const numMines = Math.floor(totalCells * 0.15) // Adjust this for desired difficulty
      setMines(numMines)
    }
  }, [row, col, mode])

  // easy 9 x 9
  // intermediate 15 x 15
  // expert 40 x 15
  // random ? x ?
  return (
    <div className="flex bg-slate-800  justify-center items-center flex-1 p-5">
      <div
        className={`shadow-[0px_0px_30px_-5px_#1e293b] overflow-hidden rounded-xl border border-slate-800 `}
      >
        {gameBoard?.map((r, index) => (
          <Row key={index} Blocks={r} row={index} />
        ))}
      </div>
    </div>
  )
}

export default Game
