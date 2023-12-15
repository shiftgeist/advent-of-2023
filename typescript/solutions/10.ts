// https://typehero.dev/challenge/day-10/

type StreetSuffixTester<T, K extends string> = T extends `${string}${K}`
  ? true
  : false
