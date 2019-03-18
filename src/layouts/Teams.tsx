import * as React from "react"
import Base from "./Base"
import { SeasonListItem } from "../types/Season"
import { TeamsList } from "../types/Team"
import TeamsTable from "../components/TeamsTable"

interface TeamsProps {
  pageContext: {
    season: SeasonListItem
    teamsList: TeamsList
  }
}

export default React.memo(({ pageContext }: TeamsProps): React.ReactElement<TeamsProps> => {
  const { season } = pageContext.season

  return (
    <Base
      title={`Teams of season ${season}`}
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
      <TeamsTable data={pageContext.teamsList} />
    </Base>
  )
})
