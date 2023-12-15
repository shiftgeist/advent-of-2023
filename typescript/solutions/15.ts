// https://typehero.dev/challenge/day-15/
// Source: https://www.youtube.com/watch?v=q0bULpmfUwI

type BoxToys<T, N, R extends any[] = []> = N extends number
  ? R[`length`] extends N
    ? R
    : BoxToys<T, N, [...R, T]>
  : never
