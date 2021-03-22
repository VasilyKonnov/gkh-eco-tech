export const padTime = (time: number) => {
  return String(time).length === 1 ? `0${time}` : `${time}`
}

export const format = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  return `${minutes}:${padTime(seconds)}`
}

export const uniqueVal = (
  value: string,
  index: string | number,
  self: string | any[],
) => {
  return self.indexOf(value) === index
}
