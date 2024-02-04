import { Stack } from '@mui/material'
import { Text } from '../Text'

export const ErrorScreen = () => {
  return (
    <Stack
      position="absolute"
      width="100%"
      top="50%"
      left="50%"
      sx={{ transform: 'translate(-50%, -50%)' }}
    >
      <Stack alignItems="center">
        <Text variant="h5" color="primary.main" mb={2}>
          Щось пішло не так :(
        </Text>
        <Text variant="subtitle2" color="primary.main" mb={2}>
          Спробуйте трішки пізніше
        </Text>
      </Stack>
    </Stack>
  )
}
