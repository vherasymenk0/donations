import { makeSxStyles } from '../../../../helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ typography }) => ({
  root: {
    my: 2,
    px: 2,
    py: 1,
    borderRadius: 1,
    '& .MuiAccordionSummary-content': {
      pr: 5,
    },
  },
  btn: {
    width: 300,
    a: {
      ...typography.body4,
      fontWeight: 500,
      color: 'inherit',
      textDecoration: 'none',
    },
  },
}))
