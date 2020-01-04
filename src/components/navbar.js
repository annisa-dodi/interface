import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
// import useStyles from '../App.style';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbarContainer: {
    backgroundColor: 'white',
    color: 'black',
    width: '100vw'
  },
  logo: {
    height: '50px'
  },
  menuNavbar: {
    textDecoration: 'none',
    color: '#000',
    cursor: 'pointer',
    fontFamily: 'Cormorant Garamond, serif',
    fontSize: '20px',
    transition: "color .5s ease-in-out",

    '&:hover': {
      color: 'rgb(244,201,174)'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px'
    },
  },
  menuContainer: {
    paddingRight: '100px',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '50px'
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: '0px',
      marginRight: '20px'
    }
  },
  menuContainerMobile: {
    marginBottom: '0.5rem',
    width: '100vw'
  }
}));

function DesktopNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbarContainer}>
        <Toolbar>
          <Grid container justify="space-evenly">
            <Grid item md={2} sm={1}>
              <img
                src="/assets/dzifaridho-removebg-preview.png"
                alt="logo"
                className={classes.logo}
              />
            </Grid>
            <Grid
              item
              container
              justify="flex-end"
              md={10}
              sm={11}
              spacing={6}
              alignItems="center"
              className={classes.menuContainer}
            >
              <Grid item>
                <a href="#invited" className={classes.menuNavbar}>
                  You are invited!
                </a>
              </Grid>
              <Grid item>
                <a href="#story" className={classes.menuNavbar}>
                  Story
                </a>
              </Grid>
              <Grid item>
                <a href="#rsvp" className={classes.menuNavbar}>
                  RSVP
                </a>
              </Grid>
              <Grid item>
                <a href="#venue" className={classes.menuNavbar}>
                  Venue
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default function ButtonAppBar() {
  return (
    <>
      <Hidden smDown>
        <DesktopNavbar />
      </Hidden>
      <Hidden mdUp>
        <MobileNavbar />
      </Hidden>
    </>
  );
}

function MobileNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbarContainer}>
        <Toolbar>
          <Grid container direction="column" justify="space-evenly" alignItems="center" spacing={3}>
            <Grid item md={2} sm={1}>
              <img
                src="/assets/dzifaridho-removebg-preview.png"
                alt="logo"
                className={classes.logo}
              />
            </Grid>
            <Grid
              item
              container
              justify="space-evenly"
              md={10}
              sm={11}
              spacing={3}
              alignItems="center"
              className={classes.menuContainerMobile}
            >
              <Grid item xs={4}>
                <a href="#invited" className={classes.menuNavbar}>
                  You are invited!
                </a>
              </Grid>
              <Grid item xs={2}>
                <a href="#story" className={classes.menuNavbar}>
                  Story
                </a>
              </Grid>
              <Grid item xs={2}>
                <a href="#rsvp" className={classes.menuNavbar}>
                  RSVP
                </a>
              </Grid>
              <Grid item xs={2}>
                <a href="#venue" className={classes.menuNavbar}>
                  Venue
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
