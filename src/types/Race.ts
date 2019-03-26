import { Circuit } from "./Circuit"

export interface Race {
  season: string
  round: string
  url: string
  raceName: string
  Circuit: Circuit
  date: Date
  time: Date
}

export type RacesList = Race[]
