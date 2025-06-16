export function defaultToString(item) {
  if (item === null) {
    return 'null'
  // biome-ignore lint/style/noUselessElse: <explanation>
  } else if (item === undefined) {
    return 'undefined'
  // biome-ignore lint/style/noUselessElse: <explanation>
  } else if (typeof item === 'string' && item instanceof String) {
    return `${item}`
  }
  return item.toString()
}
