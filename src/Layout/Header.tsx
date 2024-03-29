import { Link, useParams } from 'react-router-dom'
import logo from '../assets/logo.png'
import { formatTime } from '../utils/formatTime'
import { useGame } from '../Contexts/GameContext'
import useTimer from '../hooks/useTimer'
import { useEffect } from 'react'
import Modal from '../components/Modal'
import useMediaQuery from '../hooks/useMediaQuery'
const Header = () => {
  const { mode } = useParams()
  const { gameState, setGameState, resetGame } = useGame()
  const { score, FlaggedBlocks, mines } = useGame()
  const { seconds, resetTimer, isRunning, startTimer, pauseTimer } = useTimer()
  const isDesktop = useMediaQuery('(min-width: 1025px)')

  useEffect(() => {
    resetTimer()
    resetGame()
  }, [mode, isDesktop])

  useEffect(() => {
    if (gameState.Over || gameState.win) {
      pauseTimer()
    }
  }, [gameState.Over, gameState.win])

  const handlePause = () => {
    if (isRunning) {
      pauseTimer()
    } else {
      startTimer()
    }

    setGameState((prev) => ({ ...prev, Paused: isRunning }))
  }

  const time = formatTime(seconds)
  return (
    <div
      className={`flex ${
        mode ? 'justify-between' : 'justify-center'
      } bg-slate-900 items-center p-5`}
    >
      {!mode && (
        <div className="max-w-lg">
          <img className="w-full h-full invert-[1] brightness-90" src={logo} alt="Minesweeper" />
        </div>
      )}
      {mode && (
        <>
          {(gameState.Paused || gameState.Over || gameState.win) && (
            <Modal>
              <p>
                {gameState.Over
                  ? 'Game Over'
                  : gameState.Paused
                  ? 'Game Paused'
                  : 'Congratulations'}
              </p>
              {gameState.Paused && <button onClick={handlePause}>Continue</button>}
              {<p>Your score: {score}</p>}
              <p>Time: {time}</p>
              <Link to={'/'}>
                <button
                  onClick={() => {
                    resetTimer()
                    resetGame()
                  }}
                >
                  Home
                </button>
              </Link>

              <button
                onClick={() => {
                  resetTimer()
                  resetGame()
                }}
              >
                Reset
              </button>
            </Modal>
          )}
          <div>
            score: {score} -------- Flags:{mines - FlaggedBlocks}
          </div>
          <div>{time}</div>
          <div onClick={handlePause}>pause</div>
        </>
      )}
    </div>
  )
}

export default Header
