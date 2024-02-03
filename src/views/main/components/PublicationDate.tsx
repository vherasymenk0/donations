import { Text } from '../../../components/Text'
import { TypographyProps } from '@mui/material'

interface Props extends TypographyProps {
  date: number
}

const PublicationDate = ({ date, sx, ...rest }: Props) => {
  const locale = 'uk-UA'

  const formattedDate = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date)

  const formattedTime = new Intl.DateTimeFormat(locale, {
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).format(date)

  const result = `${formattedTime} (${formattedDate})`

  return (
    <Text variant="body6" color="grey.700" display="flex" mt={0.5} sx={sx} {...rest}>
      Дата публікації: {result}
    </Text>
  )
}

export default PublicationDate
