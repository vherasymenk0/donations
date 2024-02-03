export const numberToCurrency = (number: number) =>
  new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
    notation: 'compact',
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  }).format(number)
