import React from 'react';
import Container from '@material-ui/core/Container';

import useStyles from '../App.styles';

const Banner = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.bannerContainer}>
      <img src="/assets/background-pict.jpg" alt="background" className={classes.bannerImage} />
    </Container>
  );
}

export default Banner;
