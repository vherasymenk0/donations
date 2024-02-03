import { Text } from '../../../components/Text'
import moment from 'moment/moment'
import { ProgressBar } from '../../../components/ProgressBar'
import { numberToCurrency } from '../../../helpers/numberToCurrency'
import { Stack } from '@mui/material'

interface Props {
  lastDate: string
  currentValue: number
  targetValue: number
  isMobile?: boolean
}

export const DonationSummary = ({ lastDate, currentValue, targetValue, isMobile }: Props) => {
  const formattedLastDate = moment(new Date(lastDate)).calendar().toLowerCase()
  const currentCurrencyValue = numberToCurrency(currentValue)
  const targetCurrencyValue = numberToCurrency(targetValue)

  return (
    <Stack gap={1} my={2} width={isMobile ? '100%' : '70%'}>
      {isMobile ? (
        <Text variant="subtitle4" color="success.dark" textAlign="center">
          {currentCurrencyValue} з {targetCurrencyValue}
        </Text>
      ) : (
        <Text variant="body3" color="success.dark" textAlign="center">
          Cтаном на {formattedLastDate} зібрано {currentCurrencyValue} з {targetCurrencyValue}
        </Text>
      )}

      <ProgressBar value={currentValue} maxValue={targetValue} />
    </Stack>
  )
}
