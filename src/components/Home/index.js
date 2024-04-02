/*eslint-disable*/
import React from 'react';
// styles
import 'bootstrap/scss/bootstrap.scss';

import '../../assets/scss/paper-kit.scss';
import '../../assets/demo/demo.css';
import { Container } from 'reactstrap';
import Navbar from '../Navbar';

// core component
function Home() {
  return (
    <>
      <Navbar />
      <div
        className='page-header section-dark'
        style={{
          backgroundImage:
            'url(' + require('../../assets/img/antoine-barres.jpg') + ')',
        }}
      >
        <div className='filter' />
        <div className='content-center'>
          <Container>
            <div className='title-brand'>
              <h1 className='presentation-title'>Email Signature </h1>
              <div className='fog-low'>
                <img
                  alt='...'
                  src={require('../../assets/img/fog-low.png')}
                />
              </div>
              <div className='fog-low right'>
                <img
                  alt='...'
                  src={require('../../assets/img/fog-low.png')}
                />
              </div>
            </div>
            <h2 className='presentation-subtitle text-center'>
              Make your mark with a Professional Email Signature App!
            </h2>
          </Container>
        </div>
        <div
          className='moving-clouds'
          style={{
            backgroundImage:
              'url(' + require('../../assets/img/clouds.png') + ')',
          }}
        />
        <h6 className='category category-absolute'>
          Dashboard / Home Page
          <a
            href='https://www.creative-tim.com?ref=pkr-index-page'
            target='_blank'
          ></a>
        </h6>
      </div>
    </>
  );
}

export default Home;
