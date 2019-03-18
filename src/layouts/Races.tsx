import * as React from "react"
import Base from "./Base"
import { SeasonListItem } from "../types/Season"
import { RacesList } from "../types/Race"
import RacesTable from "../components/RacesTable"

interface RacesProps {
  pageContext: {
    season: SeasonListItem
    racesList: RacesList
  }
}

export default React.memo(
  ({ pageContext }: RacesProps): React.ReactElement<RacesProps> => {
    const { season } = pageContext.season

    return (
      <Base
        title={`Races of season ${season}`}
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
        <RacesTable data={pageContext.racesList} />
      </Base>
    )
  }
)
