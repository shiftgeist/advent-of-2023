// https://typehero.dev/challenge/day-4/

type Address = { address: string; city: string }

type PresentDeliveryList<People> = {
  [key in keyof People]: Address
}
