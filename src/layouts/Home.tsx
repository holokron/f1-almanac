import * as React from "react"
import { Grid } from "grommet"
import Base from "./Base"
import { SeasonsList } from "../types/Season"
import Card from "../components/Card"

interface Props {
  pageContext: {
    seasonsList: SeasonsList
  }
}

export default function Home({
  pageContext,
}: Props): React.ReactElement<Props> {
  return (
    <Base>
      <Grid
        gap="medium"
        margin="large"
        columns={{
          count: "fit",
          size: "small",
        }}
      >
        {pageContext.seasonsList.map(season => (
          <Card
            label={season.season}
            key={season.season}
            link={`/seasons/${season.season}`}
          />
        ))}
      </Grid>
    </Base>
  )
}
