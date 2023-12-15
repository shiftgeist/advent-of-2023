// https://typehero.dev/challenge/day-5/

type SantasList<
  BadList extends readonly any[],
  GoodList extends readonly any[]
> = [...BadList, ...GoodList]
