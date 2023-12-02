// https://typehero.dev/challenge/day-9/

type Reverse<T> = T extends `${infer FirstLetter}${infer RestOfString}`
  ? `${Reverse<RestOfString>}${FirstLetter}`
  : T
