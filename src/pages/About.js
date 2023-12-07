import React from 'react';
import '../index.css';
import logo1 from '../200.jpg';


const About = () => {
  return (
    <>
      <div className='content'>
        <div className='about text-dark'>
          <h2>About</h2>
          HAPPY WELL WISHERS provides an enriched learning
          environment that has helped countless students get
          ahead. Our unparalleled teaching methods help
          participants prepare for the next step in their career
          and broaden their horizons. Since opening our doors
          in 2000, we’ve worked hard on expanding our
          curriculum to meet the needs of emerging industries.
          Get in touch with us today to find out how we can help
          you.
        </div>
        <div>
          <img  className='banner' src={logo1}/> 
        </div>
      </div>
    </>
  );
};

export default About;
