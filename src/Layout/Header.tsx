import { Link, useParams } from 'react-router-dom'
// import logo from '../assets/logo.png'
import { useGame } from '../Contexts/GameContext'
import useTimer from '../hooks/useTimer'
import { useEffect } from 'react'
import Modal from '../components/Modal'
import useMediaQuery from '../hooks/useMediaQuery'
import Button from '../components/UI/Button'
import { PauseIcon, PlayIcon, TwoDots } from '../components/icons/GlobalIcons'
import Timer from '../components/Game/Timer'
import { formatTime } from '../utils/formatTime'
const Header = () => {
  const { mode } = useParams()
  const { gameState, setGameState, resetGame } = useGame()
  const { score, FlaggedBlocks, mines, totalFlagsUsed } = useGame()
  const { seconds, resetTimer, isRunning, startTimer, pauseTimer } = useTimer()
  const { hours, minutes, Seconds } = formatTime(seconds)
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

  return (
    <div
      className={`flex ${
        mode ? 'justify-between' : 'justify-center'
      } bg-slate-900 text-sky-400 z-20 border-b-2 border-b-sky-400 shadow-neon items-center mb-5 p-5`}
    >
      {!mode && (
        <h1 className="uppercase font-black md:tracking-[1rem] font-rubik text-[44px] md:text-7xl">
          Minesweeper
        </h1>
      )}
      {mode && (
        <>
          {(gameState.Paused || gameState.Over || gameState.win) && (
            <Modal>
              <div className="flex flex-col justify-center items-center gap-5 text-sky-200">
                <p className="text-2xl">
                  {gameState.Over
                    ? 'Game Over'
                    : gameState.Paused
                    ? 'Game Paused'
                    : 'Congratulations'}
                </p>
                <p className="flex items-center leading-3 text-xl">
                  Your Score {TwoDots} {score}
                </p>
                <p className="flex items-center leading-3 text-xl">
                  Total Flags Used {TwoDots} {totalFlagsUsed}
                </p>
                <div className="text-center">
                  <p className="text-2xl mb-3">Time</p>
                  <div className="flex flex-col justify-center items-center gap-5">
                    {hours > 0 && (
                      <p className="flex items-center leading-3 text-xl">{hours} Hours</p>
                    )}
                    {minutes > 0 && (
                      <p className="flex items-center leading-3 text-xl">{minutes} Minutes</p>
                    )}
                    {Seconds > 0 && (
                      <p className="flex items-center leading-3 text-xl">{Seconds} Seconds</p>
                    )}
                  </div>
                </div>
                <div className="flex gap-8 text-xl mt-5">
                  <Link to={'/'}>
                    <Button
                      additionalStyles="shadow-glow border px-8 "
                      onClick={() => {
                        resetTimer()
                        resetGame()
                      }}
                    >
                      Home
                    </Button>
                  </Link>
                  <Button
                    additionalStyles="shadow-glow border px-8 "
                    onClick={() => {
                      resetTimer()
                      resetGame()
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </Modal>
          )}

          <div className="shadow-Block rounded-xl p-2 min-w-[120px] text-sky-200">
            <p className="flex items-center leading-3">
              SCORE {TwoDots} {score}
            </p>
            <p className="flex items-center leading-3">
              FLAGS {TwoDots} {FlaggedBlocks}/
              {mode === 'easy'
                ? mines
                : mode === 'amateur'
                ? mines - 10
                : mode === 'expert'
                ? mines - 39
                : mines}
            </p>
          </div>
          <div className="min-w-[145px] flex justify-center">
            <Timer seconds={seconds} />
          </div>
          <Button
            additionalStyles={`shadow-glow border rounded-full p-3 ${
              !gameState.win && !gameState.Over && 'z-50'
            }`}
            onClick={handlePause}
          >
            {isRunning ? PauseIcon : PlayIcon}
          </Button>
        </>
      )}
    </div>
  )
}

export default Header
