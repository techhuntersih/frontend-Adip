import React from "react";
import "./footer.css";
import { Button } from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
import { useNavigate } from 'react-router-dom';




function Footer() {
  const history = useNavigate();

  return (
    <div className="main-footer">
      <ScrollToTop smooth />
     
      <div className="container">
        <div className="row">
          {/* Column1 */}
          {/* <div className="col-sm"> */}
          
            {/* <h4>THICC MEMES INC</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </h1>
          </div>// */}
          {/* Column2 */}
         
          {/* Column3 */}
          
            <div style={{fontSize:'0.7rem'}}>
            This website is made accessible to persons with disabilities. It meets the guidelines for Indian Government Websites and adheres to Level AA of the Web Content Accessibility Guidelines (WCAG 2.0) of the World Wide Web Consortium (W3C). This website is also certifiedby STQC that it fulfills the requirements of the Website Quality Certification Scheme - Quality Level - I. </div>
           
          
        </div>
        
        <div className="row">
          <p className="col-sm">
          
                  |<Button style={{color:'white', fontSize:'0.8rem'}}> Home</Button> |  
            <Button style={{color:'white', fontSize:'0.8rem' }} onClick={()=>{
                  history("./faq.js")}}> Terms and Conditions </Button>  | <Button style={{color:'white', fontSize:'0.8rem'}}> Accessibilty Option</Button>     |  <Button style={{color:'white' , fontSize:'0.8rem'}} onClick={()=>{
                  history("./contactus")
                }}> Contact us</Button>   |    <Button style={{color:'white' , fontSize:'0.8rem'}}>Site Map </Button> | <Button style={{color:'white' , fontSize:'0.8rem'}}> Privacy Policy </Button>   | <Button style={{color:'white' , fontSize:'0.8rem'}} onClick={()=>{
                  history("./feedback")}}>Feedback  </Button> |<Button style={{color:'white' , fontSize:'0.8rem'}}> Help to person with disabilities </Button>|          
            <div style={{fontSize:' 0.8rem'}}>  All Rights Reserved |
            
                   &copy; 2015 Cochlear Implant Under ADIP Scheme of GOI  </div>
             
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;