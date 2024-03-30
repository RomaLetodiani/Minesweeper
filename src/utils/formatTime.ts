export const formatTime = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600) // Calculate hours
  const minutes = Math.floor((totalSeconds % 3600) / 60) // Calculate minutes
  const Seconds = totalSeconds % 60 // Calculate seconds

  // Pad the hours, minutes, and seconds with leading zeros if needed
  const formattedHours = String(hours).padStart(2, '0')
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(Seconds).padStart(2, '0')

  return { formattedHours, formattedMinutes, formattedSeconds, hours, minutes, Seconds }
}
