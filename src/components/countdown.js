import React from 'react';
import CountDown from 'reactjs-countdown';
import useStyles from '../App.style';

const Countdown = () => {
  const classes = useStyles();

  return (
    <div className={classes.digitCountdown}>
      <CountDown
        end="February 8, 2020"
      />
    </div>
  );
}

export default Countdown;
