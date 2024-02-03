import { makeSxStyles } from '../../../../helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette, typography }) => ({
  paper: {
    mb: 2,
    overflow: 'hidden',
    border: 'none',
  },
  preview: {
    width: '100%',
    gap: 1,
    py: 2,
    px: 2,

    '& > a': {
      color: palette.primary.main,
      ...typography.subtitle4,
    },
  },
  moreInfo: {
    justifyContent: 'center',
    backgroundColor: palette.primary['500'],
    px: 2,
    py: 2,
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    backgroundColor: palette.grey['25'],
    boxShadow: 24,
    p: 4,
    maxWidth: { xs: 375, sm: 500 },
    borderRadius: 1,

    '&:focus': {
      outline: 'none',
    },

    '& button > a': {
      ...typography.body4,
      fontWeight: 500,
      color: 'inherit',
      textDecoration: 'none',
    },
  },
}))
