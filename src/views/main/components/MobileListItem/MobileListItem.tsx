import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import { useState } from 'react'
import { Button, IconButton, Link, Paper, Stack } from '@mui/material'
import { JarModel } from '../../../../models/jar'
import { Text } from '../../../../components/Text'
import { DescriptionText } from '../DescriptionText'
import { DonationSummary } from '../DonationSummary'
import { useStyles } from './MobileListItem.styles'
import PublicationDate from '../PublicationDate'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

export const MobileListItem = ({
  name,
  username,
  title,
  description,
  text,
  messageLink,
  jarGoal,
  date,
  jarId,
  jarAmount,
  lastChangeTimestamp,
}: JarModel) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const styles = useStyles()

  return (
    <>
      <Paper sx={styles.paper}>
        <Stack sx={styles.preview}>
          <Text variant="subtitle2" color="grey.800">
            {name}
          </Text>
          <a href={`https://send.monobank.ua/jar/${jarId}`} target="_blank" rel="noreferrer">
            Посилання на банку
          </a>
          <DescriptionText variant="body5" text={description} />
        </Stack>
        <Stack sx={styles.moreInfo} onClick={handleOpen}>
          <Text variant="body5" color="primary.main" textAlign="center">
            (тицяй сюди для повної інформації)
          </Text>
        </Stack>
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Stack sx={styles.modal}>
            <IconButton sx={styles.closeBtn} onClick={handleClose}>
              <CloseRoundedIcon color="secondary" />
            </IconButton>
            <Text variant="h6" color="grey.800" textAlign="left" mb={1}>
              {name}
            </Text>

            <Text variant="body4" color="secondary.main" textAlign="left" mb={1}>
              Канал:{' '}
              <Link href={`https://t.me/${username}`} variant="subtitle4" color="primary.main">
                {title}
              </Link>
              <PublicationDate date={date} />
            </Text>

            <Stack sx={{ maxHeight: '400px', overflowY: 'scroll' }}>
              <DescriptionText text={text} textAlign="left" />
              <Stack flexDirection="row" justifyContent="flex-end" mt={0.5}>
                <Link href={messageLink} variant="body6">
                  (посилання на публікацію)
                </Link>
              </Stack>
            </Stack>

            <DonationSummary
              isMobile
              currentValue={jarAmount}
              targetValue={jarGoal}
              lastDate={lastChangeTimestamp}
            />

            <Button variant="contained" sx={styles.btn}>
              <a href={`https://send.monobank.ua/jar/${jarId}`} target="_blank" rel="noreferrer">
                поповнити банку
              </a>
            </Button>
          </Stack>
        </Fade>
      </Modal>
    </>
  )
}
