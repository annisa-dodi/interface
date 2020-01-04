import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Venue from '../components/venue';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Venue />
      <Footer />
    </>
  );
}

export default LandingPage;
