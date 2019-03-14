import * as React from "react"
import { grommet } from "grommet/themes"
import { Grommet, Grid, Box, Text } from "grommet"
import { Link } from "gatsby"

interface Props {
  children: React.ReactNode
}

export default function Base({ children }: Props): React.ReactElement<Props> {
  return (
    <Grommet theme={grommet}>
      <Grid
        gap="none"
        columns={["auto"]}
        rows={["xsmall", "auto", "xsmall"]}
        areas={[
          { name: "header", start: [0, 0], end: [0, 0] },
          { name: "content", start: [0, 1], end: [0, 1] },
          { name: "footer", start: [0, 2], end: [0, 2] },
        ]}
      >
        <Box
          align="center"
          justify="center"
          gridArea="header"
          background="light-5"
        >
          <Link to="/">
            <Text weight="bold" size="xlarge">
              Formula 1 Almanac
            </Text>
          </Link>
        </Box>
        <Box gridArea="content">{children}</Box>
        <Box align="center" gridArea="footer" background="dark-2">
          2019 &copy; Yogi
        </Box>
      </Grid>
    </Grommet>
  )
}
