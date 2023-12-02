// https://typehero.dev/challenge/day-14/
// Based on https://github.com/TkDodo/aot-2023/blob/main/14.ts

type DecipherNaughtyList<
  T extends string,
  Acc extends Array<string> = []
> = T extends `${infer Name}/${infer Rest}`
  ? DecipherNaughtyList<Rest, [...Acc, Name]>
  : [...Acc, T][number]
