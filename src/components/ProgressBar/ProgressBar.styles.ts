import { makeSxStyles } from '../../helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette }) => ({
  root: {
    height: '10px',
    borderRadius: 1,
    backgroundColor: palette.success.light,
    '& > .MuiLinearProgress-bar': {
      backgroundColor: palette.success.main,
    },
  },
}))
