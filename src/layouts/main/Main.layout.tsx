import { Container, Stack } from '@mui/material'
import Logo from '../../assets/image/logo.png'
import { Text } from '../../components/Text'
import { PropsWithChildren } from 'react'
import { palette } from '../../theme/palette'

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      component="main"
      sx={{ backgroundColor: palette.primary['500'], minHeight: '100vh', height: '100%' }}
    >
      <Container>
        <Stack flexDirection="row" alignItems="center" justifyContent="center" mt={3}>
          <img
            srcSet={`${Logo}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${Logo}`}
            alt="logo"
            loading="lazy"
            style={{
              height: '80px',
              objectFit: 'contain',
              marginLeft: '-12px',
            }}
          />
          <Text variant="h5" color="primary.main">
            Кожна гривня від вас - підтримка для наших захисників
          </Text>
        </Stack>
        {children}
      </Container>
    </Stack>
  )
}
