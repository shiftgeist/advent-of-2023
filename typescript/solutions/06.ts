// https://typehero.dev/challenge/day-6/

type FilterChildrenBy<Status, ExcludeItems> = Exclude<Status, ExcludeItems>
