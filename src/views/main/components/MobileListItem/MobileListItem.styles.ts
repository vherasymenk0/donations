import { makeSxStyles } from '../../../../helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette, typography }) => ({
  paper: {
    position: 'relative',
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
    backgroundColor: palette.grey['200'],
    px: 2,
    py: 2,
  },
  content: {
    maxHeight: 300,
    overflowY: 'scroll',
    my: 2,
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
  },
  closeBtn: {
    position: 'absolute',
    p: 0,
    right: 25,
    top: 27,
  },
  btn: {
    backgroundColor: palette.secondary.main,
    height: 40,
    mt: 1,

    a: {
      ...typography.body4,
      fontWeight: 500,
      color: 'inherit',
      textDecoration: 'none',
    },
  },
}))
