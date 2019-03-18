import * as React from "react"
import Base from "./Base"
import { SeasonListItem } from "../types/Season"
import { DriversList } from "../types/Driver"
import DriversTable from "../components/DriversTable"

interface DriversProps {
  pageContext: {
    season: SeasonListItem
    driversList: DriversList
  }
}

export default React.memo(
  ({ pageContext }: DriversProps): React.ReactElement<DriversProps> => {
    const { season } = pageContext.season

    return (
      <Base
        title={`Drivers of season ${season}`}
        breadcrumbs={[
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Seasons",
            path: "/",
          },
          {
            name: season,
            path: `/seasons/${season}`,
          },
        ]}
      >
        <DriversTable data={pageContext.driversList} />
      </Base>
    )
  }
)
