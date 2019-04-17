import { Circuit } from "./Circuit"

export interface Race {
  season: string
  round: string
  url: string
  raceName: string
  Circuit: Circuit
  date: string
  time: string
}

export type RacesList = Race[]
