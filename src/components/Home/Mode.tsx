import { Link } from 'react-router-dom'
import { CloseIcon } from '../icons/GlobalIcons'

const Mode = ({ mode }: { mode: string }) => {
  return (
    <Link to={`/game/${mode}`}>
      <div className="p-5 bg-[#757575] w-44 h-24 text-white rounded-xl flex justify-center items-center flex-col">
        <h2 className="font-bold uppercase text-lg">{mode}</h2>
        <p className="flex justify-center items-center gap-3">
          <span>
            {mode === 'easy' ? 9 : mode === 'intermediate' ? 15 : mode === 'expert' ? 40 : '?'}
          </span>
          {CloseIcon}
          <span>
            {mode === 'Easy' ? 9 : mode === 'intermediate' ? 15 : mode === 'expert' ? 40 : '?'}
          </span>
        </p>
      </div>
    </Link>
  )
}

export default Mode
