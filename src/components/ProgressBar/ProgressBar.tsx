import { Box, LinearProgress } from '@mui/material'
import { useStyles } from './ProgressBar.styles'

interface Props {
  value: number
  maxValue: number
}

export const ProgressBar = ({ value, maxValue }: Props) => {
  const styles = useStyles()
  const currentValue = value > maxValue ? maxValue : value
  const percentValue = (currentValue / maxValue) * 100

  return (
    <Box>
      <LinearProgress
        variant="determinate"
        valueBuffer={100}
        value={percentValue}
        sx={styles.root}
      />
    </Box>
  )
}
