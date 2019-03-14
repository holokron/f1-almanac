import * as React from "react"
import { Box, Button, Text } from "grommet"
import { navigate } from "gatsby"

interface Props {
  label: string
  gridArea?: string
  link?: string
}

export default function Card({
  gridArea,
  label,
  link,
}: Props): React.ReactElement<Props> {
  return (
    <Box align="center" justify="center" gridArea={gridArea}>
      <Button
        color="neutral-3"
        fill
        margin="small"
        primary
        label={<Text size="xlarge">{label}</Text>}
        onClick={link ? () => navigate(link) : undefined}
      />
    </Box>
  )
}

Card.defaultProps = {
  gridArea: null,
  link: null,
}
