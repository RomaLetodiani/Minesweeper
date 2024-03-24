export const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600) // Calculate hours
  const minutes = Math.floor((totalSeconds % 3600) / 60) // Calculate minutes
  const seconds = totalSeconds % 60 // Calculate seconds

  // Pad the hours, minutes, and seconds with leading zeros if needed
  const formattedHours = String(hours).padStart(2, '0')
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(seconds).padStart(2, '0')

  // Construct the formatted time string
  if (hours > 0) {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  } else {
    return `${formattedMinutes}:${formattedSeconds}`
  }
}
