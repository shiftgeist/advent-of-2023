// https://typehero.dev/challenge/day-12/
// Based on https://www.youtube.com/watch?v=1aFxKH1fC3Q

type FindSanta<T extends any[], P extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? F extends '🎅🏼'
    ? P['length']
    : FindSanta<R, [0, ...P]>
  : never
