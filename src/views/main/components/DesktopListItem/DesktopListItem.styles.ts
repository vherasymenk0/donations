import { makeSxStyles } from '../../../../helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ typography }) => ({
  root: {
    my: 2,
    p: 0,
    borderRadius: 1,
    '& .MuiAccordionSummary-content': {
      pr: 5,

      '&.Mui-expanded': {
        mx: 0,
        mt: 1.5,
        mb: 2,
      },
    },
  },
  summary: {
    pt: 1.5,
    pb: 1,
    px: 3,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    p: 0,
  },
  btn: {
    mt: 1.5,
    width: 300,
    a: {
      ...typography.body4,
      fontWeight: 500,
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  footer: {
    alignItems: 'center',
    width: '100%',
    pb: 3,
  },
}))
