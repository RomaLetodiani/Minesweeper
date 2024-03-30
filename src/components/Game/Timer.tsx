import { formatTime } from '../../utils/formatTime'
import { TwoDots } from '../icons/GlobalIcons'

type Props = {
  seconds: number
}

const Timer = ({ seconds }: Props) => {
  const { formattedHours, formattedMinutes, formattedSeconds, hours } = formatTime(seconds)
  return (
    <div className="flex px-3 py-2 text-lg md:text-2xl shadow-Block rounded-xl text-sky-200 justify-center items-center">
      {hours > 0 && (
        <>
          {formattedHours}
          {TwoDots}
        </>
      )}

      {formattedMinutes}
      {TwoDots}
      {formattedSeconds}
    </div>
  )
}

export default Timer
