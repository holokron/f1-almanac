import React from "react"
import renderer from "react-test-renderer"
import DriversTable from "."
import { DriversList } from "../../types"

describe("components/DriversTable", (): void => {
  it.each([
    [[]],
    [
      [
        {
          driverId: "foo",
          permanentNumber: "13",
          code: "FOO",
          url: "https://foo.bar",
          givenName: "Foo",
          familyName: "Bar",
          dateOfBirth: "1980-01-01",
          nationality: "bar",
        },
      ],
    ],
  ])(
    "data: %p",
    (data: DriversList): void => {
      const tree = renderer.create(<DriversTable data={data} />)

      expect(tree.toJSON()).toMatchSnapshot()
    },
  )
})
