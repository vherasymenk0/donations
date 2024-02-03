import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { JarModel } from '../../../../models/jar'
import { Text } from '../../../../components/Text'
import { DescriptionText } from '../DescriptionText'
import { DonationSummary } from '../DonationSummary'
import PublicationDate from '../PublicationDate'
import { useStyles } from './DesktopListItem.styles'
import { Accordion, AccordionDetails, AccordionSummary, Button, Link, Stack } from '@mui/material'

export const DesktopListItem = ({
  name,
  username,
  title,
  description,
  text,
  messageLink,
  jarGoal,
  jarId,
  jarAmount,
  date,
  lastChangeTimestamp,
}: JarModel) => {
  const styles = useStyles()

  return (
    <Accordion sx={styles.root}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack width="100%">
          <Stack flexDirection="row" justifyContent="space-between" mb={2}>
            <Text variant="subtitle2" color="grey.800">
              {name}
            </Text>
            <Link
              href={`https://send.monobank.ua/jar/${jarId}`}
              variant="subtitle3"
              color="primary.main"
            >
              Посилання на банку
            </Link>
          </Stack>

          <DescriptionText text={description} />
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Text variant="body3" color="secondary.main" textAlign="left" mb={1}>
          Канал:{' '}
          <Link href={`https://t.me/${username}`} variant="body4" color="primary.main">
            {title}
          </Link>
        </Text>

        <Stack>
          <DescriptionText text={text} />
          <Link href={messageLink} variant="body4">
            (посилання на публікацію)
          </Link>
        </Stack>

        <Stack alignItems="center" width="100%">
          <DonationSummary
            currentValue={jarAmount}
            targetValue={jarGoal}
            lastDate={lastChangeTimestamp}
          />
          <Button variant="contained" color="info" sx={styles.btn}>
            <a href={`https://send.monobank.ua/jar/${jarId}`} target="_blank" rel="noreferrer">
              поповнити банку
            </a>
          </Button>
        </Stack>

        <PublicationDate date={date} />
      </AccordionDetails>
    </Accordion>
  )
}
