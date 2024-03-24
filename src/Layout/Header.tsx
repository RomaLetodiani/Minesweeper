import { useParams } from 'react-router-dom'
import logo from '../assets/logo.png'
import useCountdownTimer from '../hooks/useCountDownTimer'
import { formatTime } from '../utils/formatTime'
import { useGame } from '../Contexts/GameContext'
const Header = () => {
  const { mode } = useParams()
  const { gameState } = useGame()
  const { seconds } = useCountdownTimer(
    mode === 'easy' ? 1200 : mode === 'intermediate' ? 900 : 600,
  )
  const time = formatTime(seconds)
  return (
    <div className={`flex ${mode && 'justify-between'} justify-center items-center shadow-xl p-5`}>
      {!mode && (
        <div className="max-w-lg">
          <img className="w-full h-full" src={logo} alt="Minesweeper" />
        </div>
      )}
      {mode && (
        <>
          <div>{time}</div>
          <div>{gameState.score}</div>
        </>
      )}
    </div>
  )
}

export default Header
