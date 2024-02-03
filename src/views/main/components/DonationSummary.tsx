import { Text } from '../../../components/Text'
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
  const date = new Date(lastDate)
  const locale = 'uk-UA'

  const formattedTime = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).format(date)

  const currentCurrencyValue = numberToCurrency(currentValue / 100)
  const targetCurrencyValue = numberToCurrency(targetValue / 100)

  return (
    <Stack gap={1} my={2} width={isMobile ? '100%' : '70%'}>
      {isMobile ? (
        <Stack>
          <Text variant="subtitle4" color="grey.900" textAlign="center">
            {currentCurrencyValue} з {targetCurrencyValue}
          </Text>
          <Text variant="body5" color="grey.900" textAlign="center">
            (останнє оновлення сьогодні о {formattedTime})
          </Text>
        </Stack>
      ) : (
        <Stack>
          <Text variant="body3" color="grey.900" textAlign="center">
            Зібрано {currentCurrencyValue} з {targetCurrencyValue}{' '}
          </Text>
          <Text variant="body5" color="grey.900" textAlign="center">
            (останнє оновлення сьогодні о {formattedTime})
          </Text>
        </Stack>
      )}

      <ProgressBar value={currentValue} maxValue={targetValue} />
    </Stack>
  )
}
