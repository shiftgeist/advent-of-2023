// https://typehero.dev/challenge/day-11/

type SantaListProtector<T> = {
  readonly [K in keyof T]: T[K] extends Function
    ? T[K]
    : SantaListProtector<T[K]>
}
