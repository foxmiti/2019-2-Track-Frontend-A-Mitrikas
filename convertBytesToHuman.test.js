/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman'

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman('123qwe')).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
  expect(convertBytesToHuman([1337])).toBe(false)
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman(false)).toBe(false)
  expect(convertBytesToHuman(-10000)).toBe(false)
})

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(100)).toBe('100 B')
  expect(convertBytesToHuman(2048)).toBe('2 KB')
  expect(convertBytesToHuman(1337)).toBe('1.31 KB')
  expect(convertBytesToHuman(1337000)).toBe('1.28 MB')
  expect(convertBytesToHuman(1337000000)).toBe('1.25 GB')
  expect(convertBytesToHuman(1337000000000)).toBe('1.22 TB')
  expect(convertBytesToHuman(1337000000000000)).toBe('1.19 PB')
})

// другая группа проверок
