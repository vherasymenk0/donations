import { CircularProgress, Stack } from '@mui/material'
import { Text } from '../Text'

export const LoadingScreen = ({ text }: { text: string }) => {
  return (
    <Stack position="absolute" width="100%" top="50%" sx={{ transform: 'translateY(-50%)' }}>
      <Stack alignItems="center">
        <Text variant="h5" color="primary.main" mb={2}>
          {text}
        </Text>
        <CircularProgress color="primary" variant="indeterminate" />
      </Stack>
    </Stack>
  )
}
