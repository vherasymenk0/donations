import { useEffect, useState } from 'react'
import { Container, Theme, useMediaQuery } from '@mui/material'
import { JarModel } from '../../models/jar'
import { MobileListItem } from './components/MobileListItem'
import { DesktopListItem } from './components/DesktopListItem'
import { LoadingScreen } from '../../components/LoadingScreen'
import { ErrorScreen } from '../../components/ErrorScreen'
import { getJarsList } from '../../api'

export const MainView = () => {
  const [jarsList, setJarsList] = useState<JarModel[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const data = await getJarsList()

      if (data?.[0]?.messageLink) {
        setJarsList(data)
      } else {
        setIsError(true)
      }

      setIsLoading(false)
    }

    getData()
  }, [])

  if (isLoading) return <LoadingScreen text="Завантажуємо monoбанки..." />
  if (isError) return <ErrorScreen />

  return (
    <Container sx={{ my: 6, borderRadius: 2 }}>
      {jarsList.map((item) => {
        if (isMobile) return <MobileListItem key={item._id} {...item} />
        return <DesktopListItem key={item._id} {...item} />
      })}
    </Container>
  )
}
