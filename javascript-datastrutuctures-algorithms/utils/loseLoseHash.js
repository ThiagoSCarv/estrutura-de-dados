export function loseLoseHash(key) {
  if (key === 'number') {
    return key
  }

  const tableKey = this.toStrFn(key)
  let hash = 0
  for (let letter = 0; letter < tableKey.length; letter++) {
    hash += tableKey.charCodeAt(letter)
  }
  return hash % 37
}
