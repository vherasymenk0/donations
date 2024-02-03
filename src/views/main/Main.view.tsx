import { useEffect, useState } from 'react'
import { Container, Theme, useMediaQuery } from '@mui/material'
import { getJarsList } from '../../api'
import { JarModel } from '../../models/jar'
import { MobileListItem } from './components/MobileListItem'
import { DesktopListItem } from './components/DesktopListItem'

export const MainView = () => {
  const [jarsList, setJarsList] = useState<JarModel[]>([])
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  useEffect(() => {
    const getData = async () => {
      const data = await getJarsList()
      setJarsList(data)
    }

    getData()
  }, [])

  return (
    <Container sx={{ my: 6, borderRadius: 2 }}>
      {jarsList.map((item) => {
        if (isMobile) return <MobileListItem key={item._id} {...item} />
        return <DesktopListItem key={item._id} {...item} />
      })}
    </Container>
  )
}
