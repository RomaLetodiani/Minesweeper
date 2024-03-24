export const formatTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  // Pad the minutes and seconds with leading zeros if needed
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(seconds).padStart(2, '0')

  return `${formattedMinutes}:${formattedSeconds}`
}
