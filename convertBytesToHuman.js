/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {

  const mappingBytes = {
    0: 'B',
    1: 'KB',
    2: 'MB',
    3: 'GB',
    4: 'TB',
    5: 'PB',
  }

  const convertToString = (bytes, power) => `${Math.round(bytes) === bytes ? bytes : +bytes.toFixed(2)} ${mappingBytes[power]}`

  if (typeof bytes !== 'number' || bytes < 0 || !isFinite(bytes)) {
    return false
  }

  let power = 0
  if (bytes < 1024) return convertToString(bytes, power)

  while (bytes > 1) {
    power += 1
    bytes = bytes / 1024
    if (bytes < 1024) break
  }
  return convertToString(bytes, power)
}
