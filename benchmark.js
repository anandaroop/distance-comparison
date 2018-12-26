export const benchmark = (count, fn) => {
  withTiming(() => {
    repeat(count, fn)
  })
}

const withTiming = fn => {
  const t1 = new Date().getTime()
  fn()
  const t2 = new Date().getTime()
  console.log('Elapsed:', t2 - t1, 'ms')
}

const repeat = (count, fn) => {
  console.log(`Running ${count} trials of ${fn.toString()}`)
  for (let i = 0; i < count; i++) {
    fn()
  }
}

