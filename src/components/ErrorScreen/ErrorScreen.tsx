import { Stack } from '@mui/material'
import { Text } from '../Text'

export const ErrorScreen = () => {
  return (
    <Stack position="absolute" width="100%" top="50%" sx={{ transform: 'translateY(-50%)' }}>
      <Stack alignItems="center">
        <Text variant="h5" color="error.main" mb={2}>
          Щось пішло не так :(
        </Text>
        <Text variant="subtitle2" color="error.main" mb={2}>
          Спробуйте трішки пізніше
        </Text>
      </Stack>
    </Stack>
  )
}
