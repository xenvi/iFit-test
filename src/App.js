import React, { Fragment } from 'react';
import './App.css';

// Components
import ProductNav from './Components/Layout/ProductNav';
import MainNav from './Components/Layout/MainNav';
import Footer from './Components/Layout/Footer';

import Hero from './Components/Content/Hero';
import Slider from './Components/Content/Slider';
import DesktopLibrary from './Components/Content/DesktopLibrary';
import Equipment from './Components/Content/Equipment';

function App() {
  return (
    <Fragment>
      <ProductNav />
      <MainNav />
        <Hero />
        <Slider />
        <DesktopLibrary />
        <Equipment />
      <Footer />
    </Fragment>
  );
}

export default App;
