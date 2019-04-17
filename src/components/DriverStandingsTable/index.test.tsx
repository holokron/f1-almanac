import React from "react"
import renderer from "react-test-renderer"
import DriverStandingsTable from "."
import { DriverStandingsList } from "../../types"

describe("components/DriverStandingsTable", (): void => {
  it.each([
    [[]],
    [
      [
        {
          position: "1",
          positionText: "1",
          points: "123",
          wins: "321",
          Constructors: [
            {
              constructorId: "foo",
              name: "Foo",
              nationality: "bar",
              url: "https://foo.bar",
            },
          ],
          Driver: {
            driverId: "foo",
            permanentNumber: "13",
            code: "FOO",
            url: "https://foo.bar",
            givenName: "Foo",
            familyName: "Bar",
            dateOfBirth: "1980-01-01",
            nationality: "bar",
          },
        },
      ],
    ],
  ])(
    "data: %p",
    (data: DriverStandingsList): void => {
      const tree = renderer.create(<DriverStandingsTable data={data} />)

      expect(tree.toJSON()).toMatchSnapshot()
    },
  )
})
