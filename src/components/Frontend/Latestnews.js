import React  from 'react';
import Marquee from 'react-fast-marquee';
import './Latestnews.css';
import { useState } from 'react';

function Latestnews() {
  return (
    <div className="latestnews">
    

    
        <Marquee pauseOnHover direction="left" speed={50} delay={5} >
          <div className="image_wrapper">
            <p style={{color:"white" }}>
            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
            </p>
          </div>
          <div className="image_wrapper">
           <p>
            hello
           </p>
          </div>
          <div className="image_wrapper">
            <p>
              welcome
            </p>
          </div>
          <div className="image_wrapper">
            <p>
              bye
            </p>
          </div>
        </Marquee>
        </div>
  );
}

export default Latestnews;