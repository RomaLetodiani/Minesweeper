import { Link } from 'react-router-dom'
import { CloseIcon } from '../icons/GlobalIcons'

const Mode = ({ mode }: { mode: string }) => {
  return (
    <Link to={`/game/${mode}`}>
      <div className="w-40 py-3 gap-3 text-sky-200 border-2 rounded-3xl border-sky-200 shadow-glow flex justify-center items-center flex-col">
        <h2 className="font-bold uppercase text-lg">{mode}</h2>
        <p className="flex justify-center items-center gap-3">
          <span>
            {mode === 'easy' ? 9 : mode === 'amateur' ? 15 : mode === 'expert' ? 40 : '?'}
          </span>
          {CloseIcon}
          <span>
            {mode === 'easy' ? 9 : mode === 'amateur' ? 15 : mode === 'expert' ? 15 : '?'}
          </span>
        </p>
        <div className="text-center">
          <p>
            {mode === 'easy' ? 81 : mode === 'amateur' ? 225 : mode === 'expert' ? 600 : '?'} Blocks
          </p>
          <p>
            {mode === 'easy' ? 10 : mode === 'amateur' ? 40 : mode === 'expert' ? 99 : '?'} Mines
          </p>
          <p>
            {mode === 'easy' ? 10 : mode === 'amateur' ? 30 : mode === 'expert' ? 60 : '?'} Flags
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Mode
