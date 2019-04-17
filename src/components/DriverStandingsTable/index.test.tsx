import React from "react"
import renderer from "react-test-renderer"
import DriverStandingsTable from "."
import { DriverStandingsList } from "../../types"

describe("components/DriverStandingsTable", (): void => {
  it.each([[[]]])(
    "data: %p",
    (data: DriverStandingsList): void => {
      const tree = renderer.create(<DriverStandingsTable data={data} />)

      expect(tree.toJSON()).toMatchSnapshot()
    },
  )
})
