import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { JarModel } from '../../../../models/jar'
import { Text } from '../../../../components/Text'
import { DescriptionText } from '../DescriptionText'
import { DonationSummary } from '../DonationSummary'
import PublicationDate from '../PublicationDate'
import { useStyles } from './DesktopListItem.styles'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Link,
  Stack,
} from '@mui/material'

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
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={styles.summary}>
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

          <DescriptionText text={description} variant="body3" />
        </Stack>
      </AccordionSummary>

      <Divider sx={{ mb: 2 }} />

      <AccordionDetails sx={styles.details}>
        <Stack px={3}>
          <Text variant="body3" color="secondary.main" textAlign="left" mb={1}>
            Канал:{' '}
            <Link href={`https://t.me/${username}`} variant="body4" color="primary.main">
              {title}
            </Link>
            <PublicationDate date={date} sx={{ display: 'flex', mt: 0 }} />
          </Text>

          <Stack>
            <DescriptionText text={text} />
            <Stack flexDirection="row" justifyContent="flex-end" mt={0.5}>
              <Link href={messageLink} variant="body6">
                (посилання на публікацію)
              </Link>
            </Stack>
          </Stack>
        </Stack>

        <Divider sx={{ mt: 1 }} />

        <Stack sx={styles.footer}>
          <DonationSummary
            currentValue={jarAmount}
            targetValue={jarGoal}
            lastDate={lastChangeTimestamp}
          />
          <Button variant="contained" color="secondary" sx={styles.btn}>
            <a href={`https://send.monobank.ua/jar/${jarId}`} target="_blank" rel="noreferrer">
              поповнити банку
            </a>
          </Button>
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}
