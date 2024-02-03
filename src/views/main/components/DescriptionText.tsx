import { Text } from '../../../components/Text'
import { TypographyProps } from '@mui/material/Typography/Typography'

interface Props extends TypographyProps {
  text: string
}

export const DescriptionText = ({ text, variant = 'body4', ...rest }: Props) => {
  return (
    <Text variant={variant} {...rest}>
      {sanitizeText(text)}
    </Text>
  )
}

const sanitizeText = (text: string) => {
  let cleanedText = text.replace(/\[text-break]|\[url-break]/g, '')

  // remove links
  cleanedText = cleanedText.replace(/\[[^\]]+]\([^)]+\)/g, '')
  cleanedText = cleanedText.replace(/https?:\/\/\S+/g, '')

  // remove jar word in different variants
  cleanedText = cleanedText.replace(/Банк[аи][:\-]?|банк[аи][:\-]?/g, '')

  // tg links
  cleanedText = cleanedText.replace(/@\S+/g, '')

  return cleanedText
}
