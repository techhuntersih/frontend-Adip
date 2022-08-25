import React from 'react';
import Card from './Card';
import Header from './Header';
import NavigationBar from './Navigation-Bar';
import Slider from './Slider';
import Helpdesk from "./Help-desk"
import Footer from './Footer';
import Latestnews from './Latestnews';
import Sr from './sr';

function Frontend() {
  return (
  <div>
   
    <Header/>
   <Sr/>
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