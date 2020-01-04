import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  bannerContainer: {
    // backgroundImage: `url('/assets/background-pict.jpg')`
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem auto'
  },
  bannerImage: {
    maxHeight: '760px'
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    marginBottom: '0.5rem'
  },
  footerContent: {
    fontFamily: 'Cormorant Garamond, serif !important',
    fontSize: '16px !important',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px !important'
    }
  },
}))

export default useStyles;