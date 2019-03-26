import { Driver } from "./Driver"
import { TeamsList, Team } from "./Team"

export interface DriverStandingItem {
  position: string
  positionText: string
  points: string
  wins: string
  Driver: Driver
  Constructors: TeamsList
}

export type DriverStandingsList = DriverStandingItem[]

export interface TeamStandingItem {
  position: string
  positionText: string
  points: string
  wins: string
  Constructor: Team
}

export type TeamStandingsList = TeamStandingItem[]
