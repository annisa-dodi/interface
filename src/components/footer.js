import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from '../App.styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <Typography className={classes.footerContent} align="center">
        ©2020 by Annisa & Dodi. Proudly created by Mild Creative
      </Typography>
    </div>
  );
}

export default Footer;
