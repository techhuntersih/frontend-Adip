import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Request from './components/Request_Form/Request_form';
import Criteria from './components/Registration_Form/Criteria_form/Criteria';
import Form from './components/Registration_Form/Applicationform/Application';
import CheckApplicationStatus from './components/Registration_Form/Applicationform/CheckApplicstionDetails';
import Login from './components/ADMIN/Login';
import Home from './components/ADMIN/Home';
import Frontend from './components/Frontend/Frontend';
function App() {
  return (
    <div className="App">
      <div></div>
       <BrowserRouter>
         <Routes>
            <Route path='/criteria' exact element={<Criteria/>}/>
           <Route path='/request' exact element={<Request/>}/> 
           <Route path='/app' exact element={<Form/>}/>
           <Route path='/' exact element={<Frontend/>}/>
           <Route path='/admin/login' exact element={<Login/>}/>
           <Route path='/admin/home' exact element={<Home/>}/>
           {/* <Route path='/check' exact element={<CheckApplicationStatus/>}/> */}
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
