import React from 'react';
import Card from './Card';
import Header from './Header';
import NavigationBar from './Navigation-Bar';
import Slider from './Slider';
import Helpdesk from "./Help-desk"
import Footer from './Footer';
import Latestnews from './Latestnews';

function Frontend() {
  return (
  <div>
    <Header/>
    <NavigationBar/>
    <Slider/>
    <Latestnews/>
    <Card/>
    <Helpdesk/>
    <Footer/>
    
  </div>
  );
}

export default Frontend;