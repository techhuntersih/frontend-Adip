import React from 'react';
import Card from './Card';
import Header from './Header';
import Slider from './Slider';
import Helpdesk from "./Help-desk"
import Footer from './Footer';
function Frontend() {
  return (
  <div>
   <Header/>
    <Slider/>
    <Card/>
    <Helpdesk/>
    <Footer/>
  </div>
  );
}

export default Frontend;