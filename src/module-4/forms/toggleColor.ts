// Adds the color if it's not selected yet, removes it otherwise
export function toggleColor(selected: string[], color: string) {
  return selected.includes(color)
    ? selected.filter((item) => item !== color)
    : [...selected, color]
}
