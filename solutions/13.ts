// https://typehero.dev/challenge/day-13/
// Based on https://www.youtube.com/watch?v=7GDHfSkNb7I

type DayCounterH<
  N extends number,
  T extends Array<number> = []
> = N extends T['length'] ? T[number] : DayCounterH<N, [...T, T['length']]>

type DayCounter<L extends number, H extends number> =
  | Exclude<DayCounterH<H>, DayCounterH<L>>
  | H
