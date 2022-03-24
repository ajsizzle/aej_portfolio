import React from 'react';

// eslint-disable-next-line no-unused-vars
import { About, Footer, Header, Skills, Testimonial, Works } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default App;
