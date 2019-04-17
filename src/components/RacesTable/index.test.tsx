import React from "react"
import renderer from "react-test-renderer"
import RacesTable from "."
import { RacesList } from "../../types"

describe("components/RacesTable", (): void => {
  it.each([
    [[]],
    [
      [
        {
          season: "2019",
          round: "1",
          url: "https://foo.bar",
          raceName: "Foo Bar",
          Circuit: {
            circuitId: "foo",
            url: "https://foo.bar",
            circuitName: "Foo Bar",
            Location: {
              lat: "123",
              long: "321",
              locality: "Foo",
              country: "Bar",
            },
          },
          date: "2019-01-01",
          time: "14:00:00",
        },
      ],
    ],
  ])(
    "data: %p",
    (data: RacesList): void => {
      const tree = renderer.create(<RacesTable data={data} />)

      expect(tree.toJSON()).toMatchSnapshot()
    },
  )
})
