import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Request from './components/Request_Form/Request_form';
import Criteria from './components/Registration_Form/Criteria_form/Criteria';
import Form from './components/Registration_Form/Applicationform/Application';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
            <Route path='/criteria' exact element={<Criteria/>}/>
           <Route path='/request' exact element={<Request/>}/> 
           <Route path='/app' exact element={<Form/>}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
