import React from 'react';

import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Footer from '../components/footer';
import Venue from '../components/venue';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Venue />
      <Footer />
    </>
  );
}

export default LandingPage;
