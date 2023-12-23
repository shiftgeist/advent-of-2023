// https://typehero.dev/challenge/day-16/
// From: https://www.youtube.com/watch?v=gY2nFeuNRnY

type FindSantaH<T extends any[], P extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? F extends '🎅🏼'
    ? P['length']
    : FindSantaH<R, [0, ...P]>
  : []

type FindSanta<T extends any[], Row extends any[] = []> = T extends [
  infer F extends any[],
  ...infer R
]
  ? FindSantaH<F> extends number
    ? [Row['length'], FindSantaH<F>]
    : FindSanta<R, [0, ...Row]>
  : never
