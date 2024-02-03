import moment from 'moment/moment'
import { Text } from '../../../components/Text'

interface Props {
  date: number
}

const PublicationDate = ({ date }: Props) => {
  const formattedDate = moment(date).format('LLLL')

  return (
    <Text
      variant="body5"
      color="primary.main"
      mt={1}
      sx={{ display: 'flex', alignSelf: 'self-end' }}
    >
      Опубліковано у {formattedDate}
    </Text>
  )
}

export default PublicationDate
