import React from "react"
import renderer from "react-test-renderer"
import TeamStandingsTable from "."
import { TeamStandingsList } from "../../types"

describe("components/TeamStandingsTable", (): void => {
  it.each([
    [[]],
    [
      [
        {
          position: "1",
          positionText: "1",
          points: "123",
          wins: "321",
          Constructor: {
            constructorId: "foo",
            name: "Foo",
            nationality: "bar",
            url: "https://foo.bar",
          },
        },
      ],
    ],
  ])(
    "data: %p",
    (data: TeamStandingsList): void => {
      const tree = renderer.create(<TeamStandingsTable data={data} />)

      expect(tree.toJSON()).toMatchSnapshot()
    },
  )
})
